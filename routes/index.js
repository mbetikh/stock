var express = require('express');
var loginMgr = require('../app/login').loginMgr
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'دخول' });
});

router.get('/login', function(req,res){
  res.render('login',{title: 'دخول'});
});

router.get('/enterTest', function(req,res){
  res.render('enterTest',{title: 'test'});
});

router.get('/adminPage', function(req,res){
  res.render('adminPage',{title: 'صفـحة الأدارة'});
});

module.exports = router;
