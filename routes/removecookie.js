var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

//remove cookie
/*
router.get('/clearcookie', function(req, res, next) {

    res.clearCookie('cookie1', 'nileshkoshti');
  res.clearCookie('nil', 'koshti');
    res.end('Wow');

    res.render('cookie');
});

router.get('/clearcookie',function(req,res){

  clearCookie('nil');
  res.send('Cookie deleted');
  res.render('cookie');
});
*/
module.exports = router;
 