var express = require('express');
var router = express.Router();
var loginMgr = require('../app/login').loginMgr;

/* GET users listing. */

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  loginMgr.userLogin(req.body,function(result){
    console.log(result); 
    if(!result[0]){
      console.log("empty");
    } else {
      console.log("TRUE");
      res.redirect('/newItem');
    }
    // if(result){
    //   res.redirect('/stock/newItem');
    // }
  });
});

module.exports = router;
