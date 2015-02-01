var express = require('express');
var itemMgr = require('../app/item').itemMgr
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/newItem', function(req,res){
  res.render('newItem',{title: 'اضافة صنف'});
});


router.get('/addItemm', function(req,res){
  res.render('addItemm',{title: 'أضافة صنف'});
});



router.post('/addItem', function(req,res){
  itemMgr.addItem(req.body,function(result){
    console.log(result);

  });
});

module.exports = router;
