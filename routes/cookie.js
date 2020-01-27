var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

//cookie

/*
router.get('/', function(req, res, next) {

    res.cookie('cookie1', 'nilesh koshti');
   // res.cookie('nil', 'koshti' );
    res.end('Wow');

    res.render('cookie');
});

router.get('/cookie',function(req,res){

    res.cookie(nil , 'koshti').send('Cookie is set');
    res.cookie(nil,'koshti',{expires: new Date() + 9999});
});

router.get('/',function(req,res){

    console.log("Cookies : ",req.cookies);
});

*/

router.get('/',function(req,res,next){

    res.render('cookie');
});
router.post('/cookie', function(req, res, next) {
  
    var useremail = req.body.user_email;
    console.log(useremail);
    req.session.mysessionuseremail = useremail;
  
    var userpassword = req.body.user_password;
    console.log(userpassword);
    req.session.mysessionpassword = userpassword;

    console.log("user session value is " + req.session.mysessionuseremail + "user password session value is" + req.session.mysessionpassword);
    res.redirect("/home");
  });


  router.get('/home', function(req, res, next) {

    //check Session is set or not
    if(req.session.mysessionuseremail && req.session.mysessionpassword)
    {
      var useremail = req.session.mysessionuseremail;
      var userpassword = req.session.mysessionpassword;

      //render Session value in Home.ejs file 
      res.render('home', { useremail : useremail, userpassword : userpassword});
    }else{
      res.redirect('/cookie');
    }
   
  });
  router.get('/logout', function(req, res, next) {
  
    req.session.destroy(function(err){
      res.redirect('/cookie');
    })
    
  });
  
  router.get('/counter', function(req, res, next) {
  
    if(req.session.views){
      req.session.views++
      res.setHeader('content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    }else{
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
    }
  });
  

module.exports = router;
 