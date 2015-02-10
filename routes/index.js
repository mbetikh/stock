var express = require('express');
var itemMgr = require('../app/item').itemMgr
var loginMgr = require('../app/login').loginMgr

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'دخول' });
<<<<<<< HEAD
});

// router.get('/login', function(req,res){
//   res.render('login',{title: 'دخول'});
// });
router.get('/employee', function(req,res){
    res.render('employee',{title: 'ألموظفين'});
});

=======
});

// router.get('/login', function(req,res){
//   res.render('login',{title: 'دخول'});
// });

// router.get('/', function(req, res) {
//   res.render('department', { title: 'Express' });
// });

>>>>>>> 8c5230d45fe49da5d5d90427eef8a467857547f7

router.get('/newItem', function(req,res){
  res.render('newItem',{title: 'اضافة صنف'});
});

<<<<<<< HEAD
=======


router.get('/login', function(req,res){
  res.render('login',{title: 'دخول'});
});
>>>>>>> 8c5230d45fe49da5d5d90427eef8a467857547f7


router.get('/addItemm', function(req,res){
  res.render('addItemm',{title: 'أضافة صنف'});
});





<<<<<<< HEAD
=======

router.get('/enterTest', function(req,res){
  res.render('enterTest',{title: 'test'});
});
>>>>>>> 8c5230d45fe49da5d5d90427eef8a467857547f7


router.get('/adminPage', function(req,res){
  res.render('adminPage',{title: 'صفـحة الأدارة'});
})

router.post('/addItem', function(req,res){
  itemMgr.addItem(req.body,function(result){
    console.log(result);

  });
});


module.exports = router;
