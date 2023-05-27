const express = require('express')
app.use(express.urlencoded({ extended: true }));
const app = express()
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
  if (에러) return console.log(에러)
  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})

//오류가 왜 날까

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
}) 


// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');

// app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session()); 

// app.get('/login', function(요청, 응답){
//   응답.render('login.ejs')
// });

// app.post('/login', passport.authenticate('local', {failureRedirect : '/fail'}), function(요청, 응답){
//   응답.redirect('/')
// });

// passport.use(new LocalStrategy({
//   usernameField: 'id',
//   passwordField: 'pw',
//   session: true,
//   passReqToCallback: false,
// }, function (입력한아이디, 입력한비번, done) {
//   //console.log(입력한아이디, 입력한비번);
//   db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
//     if (에러) return done(에러)

//     if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
//     if (입력한비번 == 결과.pw) {
//       return done(null, 결과)
//     } else {
//       return done(null, false, { message: '비번틀렸어요' })
//     }
//   })
// }));