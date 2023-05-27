const express = require('express')
app.use(express.urlencoded({ extended: true }));
const app = express()
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
  if (에러) return console.log(에러)
  app.listen(8080, function() {
    console.log('listening on 8081')
  })
})

//오류가 왜 날까

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
}) 


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 