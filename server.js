const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

var db;
// MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
// 	if (에러) return console.log(에러)
// 	db = client.db('bdar_sw_db');

	app.listen(7777, function () {
		console.log('listening on 7777')
	});
// });
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');

// app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session()); 
app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname + '/index.html');
})

app.get('/check', function(요청, 응답) { 
  응답.sendFile(__dirname + '/index2.html');
})

// app.post('/check',function(요청,응답){
//   응답.sendFile(__dirname + 'check.html');
// });

// app.post('/check', passport.authenticate('local', {failureRedirect : '/fail'}), function(요청, 응답){
//   응답.sendFile(__dirname + 'check.html')
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