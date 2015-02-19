var express = require('express');
var supplierMgr = require('../app/supplier').supplierMgr
var router = express.Router();

router.get('/', function(req, res) {
  supplierMgr.getSupplier(function(result){
    res.render('supplier',{title: 'الموردين',supplier:result});

  });
});

router.get('/addSupplier', function(req,res){
    res.render('addSupplier',{title: 'اضافة مورد جديد'});
});

router.post('/addSupplier', function(req,res){
  supplierMgr.addSupplier(req.body,function(result){
    res.redirect(/supplier/);
  });
});

router.get('/editsupplier/:id', function(req,res){
  supplierMgr.editSupplier(req.params.id,function(result){     
  	res.render('editsupplier',{title: 'دخول',editsupplier:result});
  });
});

router.post('/edit', function(req,res){
  supplierMgr.updateSupplier(req.body,function(result){
   res.send(result);
   });
});

router.get('/delete/:id', function(req,res){
  supplierMgr.deleteSupplier(req.params.id,function(result){
   res.send(result);
   });
});

router.post('/checkNameSupplier', function(req,res){
  supplierMgr.checkNameSupplier(req.body.name,function(result){
    if(result[0]!=undefined){
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

router.post('/checkEmailSupplier', function(req,res){
  supplierMgr.checkEmailSupplier(req.body.email,function(result){
    if(result[0]!=undefined){
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

module.exports = router;