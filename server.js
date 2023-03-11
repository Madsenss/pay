const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
// const makeSalt = crypto.randomBytes(128).toString('base64');
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
var db;

var today = new Date();
var nowLocale = today.toLocaleString();
var now = today.getTime();
var destructionDate = now + 31536000000;

var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './contactfile')
	},
	filename: function (req, file, cb) {
		cb(null, now + (file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')))
	}
});

var upload = multer({
	storage: storage,
	fileFilter: (req, file, callback) => {
		var ext = path.extname(now + file.originalname);
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.PNG' && ext !== '.JPG' && ext !== '.JPEG' && ext !== '.pdf' && ext !== '.PDF') {
			return callback(new Error('PNG, JPG, JPEG, PDF만 업로드하세요'))
		}
		callback(null, true)
	},
	limits: {
		fileSize: 1024 * 1024 * 50
	}
});



MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, (error, client) => {
	if (error) return console.log(error);
	db = client.db('pay');
	app.listen(process.env.PORT, () => {
		console.log('server n db start')
	});
});



// DB데이터 송신
app.get('/contactdata', (req, res) => {
	db.collection('contact').find().toArray((error, result) => {
		res.send(result).json;
	});
});


// 폴더 파일 송신
app.get('/download/:fileName', (req, res) => {
	res.download(__dirname + '/contactfile/' + req.params.fileName);
});


// Contact 업로드
app.post('/uploadfile', upload.array('filename', 10), (req, res) => { });
app.post('/uploaddata', (req, res) => {

	var copy = req.body.fileName;
	for (var i = 0; i < copy.length; i++) {
		copy[i] = now + req.body.fileName[i];
	}

	db.collection('postcounter').findOne({ name: 'total' }, (error, result) => {
		var totalResult = result.totalPost;
		db.collection('contact').insertOne({
			_id: (parseInt(totalResult) + 1), date: nowLocale, company: req.body.company, bn: req.body.bn, phone: req.body.phone, category: req.body.category,
			another: req.body.another, payment: req.body.payment, url: req.body.url, max: (req.body.max + '백만원'), saveFileName: copy, destructionDate: destructionDate, read: 'off', adminMemo: ''
		}, (error, result) => {
			db.collection('postcounter').updateOne({ name: 'total' }, { $inc: { totalPost: 1 } }, (error, result) => {
				if (error) { return console.log(error) }
				res.send('감사합니다. 확인 후 연락드리겠습니다');
			});
		});
	});
});

// Contact 삭제
app.delete('/delete', (req, res) => {

	db.collection('login').findOne({ adminID: 'koon' }, (error, result) => {
		const hashedPassword = crypto.createHash(process.env.HASH).update(req.body.password + result.salt).digest(process.env.DIGEST);
		if (hashedPassword == result.password) {
			db.collection('contact').findOne({ _id: req.body.no }, (error, result) => {
				if (result.saveFileName.length > 0) {
					try {
						for (var i = 0; i < result.saveFileName.length; i++) {
							fs.unlinkSync(`./contactfile/${result.saveFileName[i]}`);
						}
					}
					catch (error) {
						res.send('해당 파일이 존재하지 않습니다.');
					}
					db.collection('contact').deleteOne({ _id: req.body.no }, (error, result) => {
						res.send('삭제 완료');
					});
				} else {
					db.collection('contact').deleteOne({ _id: req.body.no }, (error, result) => {
						res.send('삭제 완료');
					});
				}
			});

		} else {
			res.send('비밀번호가 틀렸습니다');
		}
	});
});




// Admin 수신 스위치
app.post('/readon', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set: { read: 'on' } }, (error, result) => {
		if (error) { return res.send(error) };
		res.send('수신 확인');
	});
});

app.post('/readoff', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set: { read: 'off' } }, (error, result) => {
		if (error) { return res.send(error) };
		res.send('수신 미확인');
	});
});



// 메모 작성
app.post('/writememo', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set: { memo: req.body.text } }, (error, result) => {
		if (error) { return res.send(error) };
		res.send('메모 저장');
	});
});


app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});