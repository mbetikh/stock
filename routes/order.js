    var express = require('express');
    var orderMgr = require('../app/order').orderMgr;
    var departmentMgr = require('../app/department').departmentMgr;
    var user =require('../app/userHelpers');
    var router = express.Router();





    router.get('/getitem/:ido', function(req,res){
      orderMgr.getitem(req.params.ido,function(result){ 
        res.send(result);
      });  
    });

    router.get('/editOrder/:id', function(req,res){
      orderMgr.getorder(req.params.id,function(result1){ 
       res.render('editOrder',{title: 'دخول',edit:result1});
      });
     
    });

  router.get('/getEmployee', function(req,res){   
    orderMgr.getemp(function(result){ 
     var resul = new Array();
       for ( var i=0; i< result.length ;i++){
     var k = new Object({id : i,value : result[i].idemployee, text : result[i].name});
     resul.push(k);
      }
     res.send(resul);
    });
  });
    
     router.post('/editOrder', function(req,res){
     orderMgr.updateOrder(req.body,function(result){
     res.send(result);
     });
  });

      router.post('/editOrderr', function(req,res){
     orderMgr.updateOrder1(req.body,function(result){
     res.send(result);
     });
  });






   router.post('/edittt', function(req,res){
     orderMgr.updateOrderr(req.body,function(result){
     res.send(result);
     });
  });

     



    router.get('/things', function(req,res){
         res.render('things',{title: 'أضافة موظف'});

      });

    router.get('/acceptOrder', function(req,res){
      orderMgr.getUnAcceptedOrder(function(accepted){
         res.render('acceptOrder',{title: 'acceptOrder',accep:accepted});
          });
      });


    router.get('/showOrder', function(req,res){
               req.session.back = req.originalUrl;
               var page = user.getPage(req);
               var limit =user.getLimit(page);
              orderMgr.getOrder(req.body,function(result){
                 orderMgr.getOrdd(req.body,function(result2,result1){
                   departmentMgr.getDepartments(function(result3){
                   orderMgr.getOrderInfo(limit,function(resultz){
                   if(resultz[1][0] != undefined ){
                  var pageCount = user.getPageCount(resultz[1][0].cnt); 
                  var pagination = user.paginate(page,pageCount);
                 res.render('showOrder',{title: 'أضافة موظف',ord:result,ordd:result2,emp:result3,info1:resultz[0],pagination:pagination});
    }
  });          
});
});
});    
});

  
    router.get('/viewOrderItem/:id', function(req,res){
       
       orderMgr.orderItem(req.params.id,function(result){ 
      orderMgr.getItemInOrder(req.params.id,function(resultt){ 
       res.render('viewOrderItem',{title: 'أضافة موظف',info:result,item:resultt});
          
           });
         });
       });


    router.get('/getEmployee/:ido', function(req,res){
      orderMgr.getEmployee(req.params.ido,function(result){ 
        res.send(result);
      });
     
    });


    router.get('/getreminder/:reminder/:f', function(req,res){
      orderMgr.getreminder(req.params.reminder,req.params.f,function(result){ 
        res.send(result);
      });
     
    });


     router.get('/getreminder/:reminder', function(req,res){
      orderMgr.isExistOrNot(req.params.reminder,function(result3){ 
        //console.log(result3);
        res.send(result3);
      });
     
    });

        router.get('/deleteOrderAccepted/:id', function(req,res){
         // console.log(req.params.id);
            orderMgr.deleteOrderAccepted(req.params.id,function(result){
            res.send(result);
           });  
        });


           router.get('/deleteItem/:id', function(req,res){
           // console.log(req.params.id);
              var sp=req.params.id
              var n = sp.indexOf(" ");
              var id=sp.slice(0,n); 
              var two_number=sp.slice(n+1,req.params.id.length); 
              var nn=two_number.indexOf(" ");
              var accepted=two_number.slice(0,nn);
              var idorder=two_number.slice(nn+1,two_number.length);
              orderMgr.deleteItem(id,accepted,idorder,function(result,id){
            //  console.log(id);
              res.send(id);
             });  
        });

        


        router.get('/deleteOrderNotAccepted/:id', function(req,res){
         // console.log(req.params.id);
            orderMgr.deleteOrderNotAccepted(req.params.id,function(result){
            res.send(result);
           });  
        });

       




    router.post('/saveItem',function(req,res){
      orderMgr.addItem(req.body,function(result){
       // console.log(result);
        res.redirect('/order/showOrder');
    });


    });
    router.post('/saved', function(req,res){
   
      orderMgr.addOrder(req.body,function(result){
        res.redirect('/order/showOrder');
      
      });
    });

    module.exports = router;