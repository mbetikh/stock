var express = require('express');
var router = express.Router();
var departmentMgr = require('../app/department').departmentMgr;
var employeeMgr = require('../app/employee').EmployeeMgr;


router.get('/', function(req,res){
    res.render('employee',{title: 'ألموظفين'});
});



router.get('/addEmployee', function(req,res){
  departmentMgr.getDepartments(function(result){
    res.render('addEmployee',{title: 'أضافة موظف',dep:result});
  });
});



router.post('/addEmployeee', function(req,res){
  employeeMgr.addEmployee(req.body,function(result){
    res.redirect('/employee/addEmployee');
  });
});

// router.post('/addItem', function(req,res){
//   itemMgr.addItem(req.body,function(result){
//     console.log(result);

//   });

module.exports = router;

