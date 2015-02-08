var express = require('express');
var itemMgr = require('../app/item').itemMgr
var loginMgr = require('../app/login').loginMgr

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'دخول' });
});

// router.get('/login', function(req,res){
//   res.render('login',{title: 'دخول'});
// });

// router.get('/', function(req, res) {
//   res.render('department', { title: 'Express' });
// });


router.get('/newItem', function(req,res){
  res.render('newItem',{title: 'اضافة صنف'});
});



router.get('/login', function(req,res){
  res.render('login',{title: 'دخول'});
});


router.get('/addItemm', function(req,res){
  res.render('addItemm',{title: 'أضافة صنف'});
});






router.get('/enterTest', function(req,res){
  res.render('enterTest',{title: 'test'});
});


router.get('/adminPage', function(req,res){
  res.render('adminPage',{title: 'صفـحة الأدارة'});
})

router.post('/addItem', function(req,res){
  itemMgr.addItem(req.body,function(result){
    console.log(result);

  });
});


module.exports = router;
