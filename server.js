const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 
app.set('view engine', 'ejs');
app.use(express.static('views'));
var db;

MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
	if (에러) return console.log(에러)
	db = client.db('bdar_sw_db');

	app.listen(7777, function () {
		console.log('listening on 7777');
	});
});



app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname + '/index.html');
})

app.get('/check', function(요청, 응답) { 
  응답.render('index2.ejs');
})
app.get('/checkfail',function(요청,응답){
  응답.render('index3.ejs');
})
app.get('/loding',function(요청,응답){
  응답.render('index4.ejs');
})

// app.get('/list', function(요청, 응답){
//   db.collection('sw_student_profile').find().toArray(function(에러, 결과){
//     console.log(결과)
//     응답.render('list.ejs', { posts : 결과 })
//   })
// })

app.put('/edit', function(요청, 응답){ 
  db.collection('sw_student_profile').updateOne( {_id : parseInt(요청.body.id) }, {$set : { count : COUNT + 1 }}, 
    function(){ 
    
    console.log('수정완료')
  }); 
}); 

app.post('/add', passport.authenticate('local', {failureRedirect : '/checkfail'}), function(요청, 응답){
  응답.render('index4.ejs');
  
});

passport.use(new LocalStrategy({
  usernameField: 'sc',
  passwordField: 'cc',
  session: true,
  passReqToCallback: false,
}, function (입력한학번, 입력한출석코드, done) {
  console.log(입력한학번, 입력한출석코드);
  db.collection('sw_student_profile').findOne({ STUDENT_CODE : 입력한학번 }, function (에러, 결과) {
    if (에러) return done(에러);

    if (!결과) return done(null, false, { message: '존재하지않는 학번이요' });
    if (입력한출석코드 == 결과.CHECK_CODE) {
      return done(null, 결과);
    } else {
      return done(null, false, { message: '출석코드 맞게 한거야 ?' });
    }
  })
}));

passport.serializeUser(function (user, done) {
  done(null, user.STUDENT_CODE);
});

passport.deserializeUser(function (아이디, done) {
  db.collection('sw_student_profile').findOne({ sc : 아이디 }, function (에러, 결과) {
    done(null, 결과);
  })
}); 

app.get('/mypage', 로그인했니, function (요청, 응답) { 
  console.log(요청.user); 
  응답.render('mypage.ejs', { 사용자: 요청.user }) 
}) 

function 로그인했니(요청, 응답, next) { 
  if (요청.user) { 
    next() 
  } 
  else { 
    응답.send('로그인안하셨는데요?') 
  } 
} 

app.get('/mypage', 로그인했니, function (요청, 응답) {
  console.log(요청.user);
  응답.render('mypage.ejs', { 사용자: 요청.user })
}) 


