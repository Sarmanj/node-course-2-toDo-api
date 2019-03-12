//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect  to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('toDos').find({
  //   _id : new ObjectId('5c8745206fc25427b0a08cbb')
  //   }).toArray().then((docs) => {
  //   console.log('toDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('toDos').find().count().then((count) => {
  //   console.log(`toDos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'James Jizan'}).toArray().then((docs) => {
      console.log('toDos');
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
}) ;
