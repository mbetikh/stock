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
router.get('/employee', function(req,res){
    res.render('employee',{title: 'ألموظفين'});
});


router.get('/newItem', function(req,res){
  res.render('newItem',{title: 'اضافة صنف'});
});



router.get('/addItemm', function(req,res){
  res.render('addItemm',{title: 'أضافة صنف'});
});






router.get('/adminPage', function(req,res){
  res.render('adminPage',{title: 'adminPage'});
})

router.post('/addItem', function(req,res){
  itemMgr.addItem(req.body,function(result){
    console.log(result);

  });
});


module.exports = router;
