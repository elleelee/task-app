// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'
// const ObjectID = mongodb.ObjectID

const id = new ObjectID()
console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect to database!');
  }
  const db = client.db(databaseName)

//   db.collection('users').insertOne({
//     name: 'Ellen Lee',
//     age: 27
//   }, (error, result) => {
//     if (error) {
//       return console.log('unable to insert user')
//     }
//     console.log(result.ops)
//   })
// })

  // db.collection('users').insertMany([
  //    {
  //       name: 'Jen',
  //       age: 28
  //    }, {
  //       name: 'Gunther',
  //       age: 27
  //    }
  //  ], (error, result) => {
  //   if (error) {
  //     return console.log('unable to add documents!')
  //   }
  //   console.log(result.ops)
  // })

 // db.collection('tasks').insertMany([
 //    {
 //       description: 'task 1 description',
 //       completed: false
 //    }, {
 //       description: 'task 2 description',
 //       completed: true
 //    }, {
 //       description: 'task 3 description',
 //       completed: false
 //    }
 //  ], (error, result) => {
 //   if (error) {
 //     return console.log('unable to add tasks!')
 //   }
 //   console.log(result.ops)
 // })

})
