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

MongoClient.connect(process.env.DB_URL, {useUnifiedTopology: true}, (error, client) => {

	if (error) return console.log(error);

	db = client.db('pay');

	app.listen(process.env.PORT, () => {
		console.log('server n db start')
	});

});

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});