var express = require('express');
var itemMgr = require('../app/item').itemMgr;
var router = express.Router();
var resul=new Array();
var resl =[];


router.get('/', function(req,res){
  itemMgr.getitem(function(result){
    res.render('item',{title: 'الاصناف',dep:result});
  });
});

router.post('/additem', function(req,res){
  itemMgr.addItem(req.body,function(result){
    res.redirect('/item'); 
   });
});

router.post('/addi', function(req,res){
  itemMgr.addItemtype(req.body,function(result){
    res.redirect('/item'); 
   });
});

router.post('/edits', function(req,res){
  itemMgr.updatesupl(req.body,function(result){
    res.send(result);
   });
});

router.post('/editinfo', function(req,res){
  itemMgr.updateiteminfo(req.body,function(result){
    res.send(result);
   });
});

router.post('/edit', function(req,res){
  itemMgr.updateitem(req.body,function(result){
    res.send(result);
   });
});

router.get('/edititem/:id', function(req,res){
  itemMgr.edititem(req.params.id,function(result){     
    res.render('edititem',{title: 'تعديل صنف',edititem:result});
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

router.get('/showsu', function(req,res){
  itemMgr.getsuppliername(function(result){ 
    for ( var i = 0 ; i< result.length; i++){
        var k = new Object({id : i,value : result[i].idsupplier, text : result[i].name});
        resul.push(k);
      }
    res.send(resul);
  });
});

router.get('/showitem/:id', function(req,res){
  itemMgr.show(req.params.id,function(result){
    res.render('showitem',{title: 'اضافة صنف',itemo:result});  
  });
});

router.get('/additem/:id', function(req,res){
  itemMgr.show(req.params.id,function(result){
    if(result.length==0){
      res.render('additem',{title: 'اضافة صنف',item:resl,id:req.params.id});
    }else{
      res.render('additem',{title: 'اضافة صنف',item:result,id:req.params.id});
    }
  });
});

router.get('/delete1/:id', function(req,res){
  itemMgr.deleteitem(req.params.id,function(result){
    res.send(result);
   });
});


module.exports = router;
