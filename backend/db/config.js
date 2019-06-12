/** Подключение db */

var MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb+srv://admin:admin@cluster0-ovjsr.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

client.connect(err => {
  console.log('connection success');
  if (err) {
    console.log(err);
  }
});

exports.client = client;
