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
// var data;

MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
	if (에러) return console.log(에러)
	db = client.db('bdar_sw_db');
  // data = 

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
app.get('/loading',function(요청,응답){
  응답.render('index4.ejs');
})


 app.post('/add', passport.authenticate('local', {failureRedirect : '/checkfail'}),function(요청,응답){ // 혼종 : 오류 띄우는 애 아직 이해 안됨
  응답.render('index4.ejs')
  })
  app.put('/add', function(요청, 응답){
    db.collection('sw_student_profile').updateOne( {_id : ObjectId(요청.body.id)}, {$set : { COUNT : parseInt(요청.body.count) + 1 , CHECK : Boolean(요청.body.check = true)}}, 
 function(){
 console.log('수정완료')
}); 
})
 

passport.use(new LocalStrategy({ //local 형식으로 아이디, 비번 확인 해주는애
  usernameField: 'sc',
  passwordField: 'cc',
  session: true,
  passReqToCallback: false,
}, function (입력한학번, 입력한출석코드, done) {
  //console.log(입력한학번, 입력한출석코드);
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

passport.deserializeUser(function (아이디, done) { //쿠키 만들어 주는 애
  db.collection('sw_student_profile').findOne({ sc : 아이디 }, function (에러, 결과) {
    done(null, 결과);
  })
}); 

app.get('/mypage', function (요청, 응답) {
  db.collection('sw_student_profile').find().toArray(function(에러,결과){
    응답.render('mypage.ejs', {posts: 결과})  
    console.log(결과)
  })
})
 
