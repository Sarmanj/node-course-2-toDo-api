//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('toDos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2)) ;
  // })
//
//   db.collection('Users').insertOne({
//     name: 'Arman Jizan',
//     age: '34',
//     location: '26 Freya Crescent Shalvey'
//   }, (err, result) => {
//     if(err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2)) ;
//   })
  db.close();
});
