const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const path = require('path');
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
var db;
var today = new Date();
var nowLocale = today.toLocaleString();
var now = today.getTime();
var destructionDate = now + 31536000000;


MongoClient.connect(process.env.DB_URL, {useUnifiedTopology: true}, (error, client) => {
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


// Contact 업로드
app.post('/upload', (req, res) => {

	db.collection('postcounter').findOne({ name: 'total' }, (error, result) => {
		var totalResult = result.totalPost;
		db.collection('contact').insertOne({ _id : (parseInt(totalResult) + 1), date: nowLocale, company: req.body.company, bn: req.body.bn, phone: req.body.phone, category: req.body.category, another: req.body.another, payment: req.body.payment, url: req.body.url, max: (req.body.max + '백만원'), saveFileName: '12.txt', destructionDate : destructionDate, read : 'off', adminMemo: ''}, (error, result) => {
      db.collection('postcounter').updateOne({ name: 'total' },{ $inc: {totalPost:1} }, (error, result) => {
				if(error) {return console.log(error)}
        res.send('전송완료');
      });
    });
	});
});



// Admin 수신 스위치
app.post('/readon', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set : {read : 'on'}}, (error, result) => {
		if(error) {return res.send(error)};
		res.send('수신 확인');
	});
});

app.post('/readoff', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set : {read : 'off'}}, (error, result) => {
		if(error) {return res.send(error)};
		res.send('수신 미확인');
	});
});



// 메모 작성
app.post('/writememo', (req, res) => {
	db.collection('contact').updateOne({ _id: parseInt(req.body.no) }, { $set : {memo : req.body.text}}, (error, result) => {
		if(error) {return res.send(error)};
		res.send('메모 저장');
	});
});


app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});