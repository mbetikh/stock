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

module.exports = router;