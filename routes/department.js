var express = require('express');
var router = express.Router();
var departmentMgr = require('../app/department').departmentMgr;

router.get('/', function(req, res) {
  departmentMgr.getDepartments(function(result){
    res.render('department',{title: 'دخول',dep:result});

  });
});


router.post('/edit', function(req,res){
  departmentMgr.update(req.body,function(result){
   res.send(result);
   });
});

router.get('/editdep/:id', function(req,res){
  departmentMgr.getDepartment(req.params.id,function(result){
    res.render('editdepartment',{title: 'دخول',dep:result});

  });
});

// router.post('/addItem', function(req,res){
//   itemMgr.addItem(req.body,function(result){
//     console.log(result);

//   });

module.exports = router;
