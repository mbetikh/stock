var express = require('express');
var orderMgr = require('../app/order').orderMgr;
var departmentMgr = require('../app/department').departmentMgr;

var router = express.Router();





router.get('/getitem/:ido', function(req,res){
	orderMgr.getitem(req.params.ido,function(result){ 
		res.send(result);

	});
 
});

router.get('/things', function(req,res){
     res.render('things',{title: 'أضافة موظف'});

	});

router.get('/acceptOrder', function(req,res){
     res.render('acceptOrder',{title: 'acceptOrder'});

	});


router.get('/showOrder', function(req,res){
 
          orderMgr.getOrder(req.body,function(result){
  	
  	         orderMgr.getOrdd(req.body,function(result2){
  	         	 departmentMgr.getDepartments(req.body,function(result3){
  	         	 orderMgr.getOrderInfo(function(resultz){
             		console.log(resultz);
                res.render('showOrder',{title: 'أضافة موظف',ord:result,ordd:result2,emp:result3,orderinfo:resultz});
                   });
  	         	   });
                 
                 });
               
               });
             
             });

router.get('/getEmployee/:ido', function(req,res){
	orderMgr.getEmployee(req.params.ido,function(result){ 
		res.send(result);

	});
 
});


router.get('/getreminder/:reminder', function(req,res){
	//console.log("ddd");
	orderMgr.getreminder(req.params.reminder,function(result3){ 
		//console.log(result3);
		res.send(result3);
		//res.render('AddOrder',{title: 'أضافة موظف',ord3:result3});
	});
 
});

router.get('/delete/:id', function(req,res){
  orderMgr.delete(req.params.id,function(result){
   res.send(result);
   });
});


router.post('/saved', function(req,res){
	//console.log("req.body");
	//insert this in order table
	// var discription = req.body.textarea;
	// var quantity=req.body.quant[0];
	// var iditeme=req.body.getiteme[0];
	// var reminder=req.body.reminder;
	// var requEmploye=req.body.employee;
	// var confirm=req.body.confirm;
	// // get employee id by login session
	// var userEmployeId = 1;
	// if(confirm==undefined)
	// {
	// 	var confirm=0;
	// }

 //    // updaate this in item table 
	// var iteme_reminder = reminder-quantity; 
	//console.log(requEmploye);
	orderMgr.addOrder(req.body,function(result){
    res.redirect('/order/showOrder');
    // orderMgr.getOrder(req.body,function(result){
  	
  	 //         orderMgr.getOrdd(req.body,function(result2){
  	 //         	 departmentMgr.getDepartments(req.body,function(result3){
    //             res.render('addOrder',{title: 'أضافة موظف',ord:result,ordd:result2,emp:result3,ma:true});
    //                });
                 
    //              });
               
    //            });
  });
});

module.exports = router;