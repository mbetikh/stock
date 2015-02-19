var express = require('express');
var itemMgr = require('../app/item').itemMgr;
var router = express.Router();


router.get('/', function(req,res){
  itemMgr.getitem(function(result){
    res.render('item',{title: 'الاصناف',dep:result});

  });
});

router.post('/item', function(req,res){
  itemMgr.addItemtype(req.body,function(result){
     console.log("hhhhhhhhhh");
     res.redirect('/item'); 
   });
});

router.post('/additem', function(req,res){
  itemMgr.addItem(req.body,function(result){
     console.log(result);
     res.redirect('/item'); 
   });
});

router.get('/getitem/:id', function(req,res){
  itemMgr.getsupplier(req.params.id,function(result){ 
     res.send(result);

  });
});

router.get('/getitem', function(req,res){
  itemMgr.getsupplierall(function(result1){ 
     res.send(result1);

  });
});

router.get('/showitem/:id', function(req,res){
  itemMgr.show(req.params.id,function(result){
    res.render('showitem',{title: 'اضافة صنف',itemo:result});
    
  });
});

router.get('/additem/:id', function(req,res){
  itemMgr.show(req.params.id,function(result){
    res.render('additem',{title: 'اضافة صنف',item:result});
  });
});


module.exports = router;
