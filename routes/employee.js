var express = require('express');
var router = express.Router();
var employeeMgr = require('../app/employee').EmployeeMgr;
var departmentMgr = require('../app/department').departmentMgr;




// router.get('/', function(req,res){
//     res.render('employee',{title: 'ألموظفين'});
// });

// // router.get('/', function(req,res){
//     res.render('employee',{title: 'ألموظفين'});
// });
router.get('/', function(req, res){
  console.log("aaaa");
  employeeMgr.getEmployee(function(result){
    res.render('employee',{title: 'الاقسام',emp:result});
  });
});


router.get('/deleteEmp/:id', function(req,res){
  employeeMgr.deletEmployee(req.params.id,function(result){
   res.send(result);
   });
});


router.get('/addEmployee', function(req,res){
  departmentMgr.getDepartments(function(result){
    res.render('addEmployee',{title: 'أضافة موظف',dep:result});
  });
});

router.get('/getdep', function(req,res){
  departmentMgr.getDepartments(function(result){
    res.send(result);
  });
});

router.get('/editEmployee', function(req,res){
    res.render('editEmployee',{title: 'أضافة موظف'});
});



router.post('/edit', function(req,res){
  employeeMgr.updateEmployee(req.body,function(result){
   res.send(result);
   });
});

router.post('/addEmployeee', function(req,res){
  employeeMgr.addEmployee(req.body,function(result){
    res.redirect('/employee/addEmployee');
  });
});

router.get('/editEmployee/:id', function(req,res){
  employeeMgr.getEmployees(req.params.id,function(result){
    departmentMgr.getDepartments(function(results){
    res.render('editEmployee',{title: 'تعديل موظف',Empl:result,dep:results});
});
  });
});


module.exports = router;

