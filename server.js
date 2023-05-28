// const MongoClient = require('mongodb').MongoClient;
// const express = require('express')
// const app = express()
// const bodyParser= require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}))

// MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
//   if (에러) return console.log(에러)
//   app.listen(8085, function() {
//     console.log('listening on 8080')
//   })
// })

// const express = require('express')
// app.use(express.urlencoded({ extended: true }));
// const app = express()
// const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.undwesi.mongodb.net/', function(에러, client){
  if (에러) return console.log(에러)
  app.listen(8888, function() {
    console.log('listening on 8080')
  })
})

//여기 이하는 쓸데없는 app.get 이런 코드들

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
}) 

const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8089, function() {
    console.log('listening on 8080')
})

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
})

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html')
});

app.post('/add', function(요청, 응답){
  console.log(요청.body);
  응답.send('전송완료')
});