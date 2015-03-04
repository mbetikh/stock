  var mysqlMgr = require('./mysql').mysqlMgr,
  util=require('util');
  var easyPbkdf2 = require("easy-pbkdf2")(),
    url=require('url'),
    employeeMgr = require('../app/employee').employeeMgr;
  exports.orderMgr = {
  

  getItemInOrder  : function(id,cb){

        mysqlMgr.connect(function (conn) {
            conn.query('select name,Barcode,quantity,description from item_info,order_has_item where iditem=item_info_id and idorder= ?',id,function(err, result1) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             // console.log(result2);
              cb(result1);
            }
           });
        });

      },

   


   orderItem : function(id,cb){

        mysqlMgr.connect(function (conn) {
            conn.query('SELECT o.idorder,o.discription, emp.name AS empe, empe.name AS emm, dept.name AS dep, o.create_time, o.accepted FROM orders AS o, employee AS emp, employee AS empe, department AS dept WHERE o.deleted =1 AND o.Employ_stocks = empe.idemployee AND o.requestEmploye = emp.idemployee AND dept.iddepartments = emp.iddepartment  and o.idorder=?',id,function(err, result1) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             // console.log(result2);
              cb(result1);
            }
           });
        });




   },



    getOrder : function(body,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('SELECT * FROM `item_type`',function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
       },
       
        getEmployee : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('SELECT * FROM `employee` where `iddepartment` = ?',id,function(err, result) {
            conn.release();

          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
       },
   
   
       getOrdd : function(body,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('SELECT * FROM `item` where deleted=1',function(err, result2) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result2);
            }
           });
        });
       },

       getitem : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select ii.name,ii.item_info_id from item i,item_info ii,item_type it where i.item_type_iditem_type=6 and i.id_item_info_id=ii.item_info_id  and  i.deleted=1 ',id,function(err, result2) {
            //console.log(result2);
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result2);
            }
           });
        });
       },

       getreminder : function(id,f,cb){
        console.log(f);
        mysqlMgr.connect(function (conn) {
            //console.log("id : : "+id);
            conn.query('select remainder from item where id_item_info_id= ? ; select id from order_has_item where idorder=? and iditem=? ',[id,f,id],function(err, result) {
           // console.log("remainder : : "+result3.remainder);
            conn.release();
          if(err) {
             util.log(err);
         } else {
          console.log(result);
              cb(result);
            }
           });
        });
       },
      
      addOrder: function(body,cb){
        mysqlMgr.connect(function (conn) {

            var discription = body.textarea;
           // var iditeme=body.getiteme;
            
            var requEmploye=body.employee;
            
            
          
            //dont forget to insert quantity
            conn.query('INSERT INTO `orders`(`discription`, `requestEmploye`, `Employ_stocks`) VALUES (?,?,?)',[discription,requEmploye,1],function(err, result) {
    //        conn.query('INSERT INTO `order_has_item` (`idorder`,`iditem`) VALUES (?,?)',[result3.insertId,iditeme],function(err, result) {
           
              //conn.query('UPDATE `item` SET `remainder`=? where iditem=?',[re,iditeme]);
            conn.release();

               if(err) {
             util.log(err);
           } else { 
            cb(result);
              }

            });
         
           //});
        });
       },

  getUnAcceptedOrder:function(cb)
  {


  },

getorder :function(id,cb){
        mysqlMgr.connect(function (conn) {
           // consel.log("dd");
            conn.query('SELECT o.idorder, emp.name AS name, empe.name AS emm, dept.name AS dep, o.create_time, o.accepted,o.discription FROM orders AS o, employee AS emp, employee AS empe, department AS dept WHERE o.idorder=? AND o.deleted =1 AND o.Employ_stocks = empe.idemployee AND o.requestEmploye = emp.idemployee AND dept.iddepartments = emp.iddepartment ',id,function(err, result1) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             // console.log(result2);
              cb(result1);
            }
           });
        });
       },
 getemp :function(cb){
  mysqlMgr.connect(function (conn) {
      conn.query('SELECT idemployee,name FROM employee where deleted = 1',function(err, result) {
      conn.release();
    if(err) {
       util.log(err);
   } else {
        cb(result);
      }
     });
  });
 },
 updateOrder: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `orders` set requestEmploye = ? WHERE `idorder`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

   updateOrder1: function(body,cb){
    mysqlMgr.connect(function (conn) {
     // console.log(body.value);
      conn.query('update `orders` set Employ_stocks = ? WHERE `idorder`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  updateOrderr: function(body,cb){
    mysqlMgr.connect(function (conn) {
     // console.log(body.value);
      conn.query('update `orders` set discription = ? WHERE `idorder`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
 
  getOrderInfo:function(limit,cb){
        mysqlMgr.connect(function (conn) {
           // consel.log("dd");
            conn.query('SELECT o.idorder,o.discription, emp.name AS empe, empe.name AS emm, dept.name AS dep, o.create_time, o.accepted FROM orders AS o, employee AS emp, employee AS empe, department AS dept WHERE o.deleted =1 AND o.Employ_stocks = empe.idemployee AND o.requestEmploye = emp.idemployee AND dept.iddepartments = emp.iddepartment ORDER BY `o`.`idorder` DESC limit ?,10; SELECT COUNT(*) as cnt FROM orders as o, employee as emp ,department as dept WHERE o.deleted=1  AND  o.requestEmploye=emp.idemployee AND dept.iddepartments=emp.iddepartment;',[limit],function(err, result1) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             // console.log(result2);
              cb(result1);
            }
           });
        });
       },

  addItem : function(body,cb){
    var idorder=body.idorder;
    var iditemm=body.getiteme;
    var description=body.textarea;
    var quantity=body.quant[0];
   // console.log(quantity);
    
    mysqlMgr.connect(function (conn) {
  //console.log(iditem);
  conn.query('SELECT id,quantity FROM `order_has_item` where iditem =? and idorder=?',[iditemm,idorder],function(err,result) {  
  
  if(result[0] == undefined)
  {
    // normal insert
    console.log(idorder);
     conn.query('INSERT INTO `order_has_item`(`quantity`,`iditem`, `idorder`,`description`) VALUES (?,?,?,?)',[quantity,iditemm,idorder,description],function(err,result) {  
      if(err) {
        util.log(err);
          }
       
      });


  }
  else
  {
   // console.log(result[0].id);
     var k=result[0].quantity;
     var z =parseInt(k)+parseInt(quantity);
     console.log(k);
      console.log(quantity);
       console.log(z);
    conn.query('UPDATE `order_has_item` SET quantity=? where  id =?',[z,result[0].id],function(err,result) {  
      if(err) {
        util.log(err);
          }

      });
  }

  conn.release();
    // console.log("id >"+result.id);
      if(err) {
        util.log(err);
          } else { 
          cb(result);
          }
        });

        });  

  },




  

  deleteOrderAccepted:function(id,cb){
  //var quantity,iditem,remainder,sum,accept,a;
      var x = new Array;
      var z;

    mysqlMgr.connect(function (conn) {
       // already now the accepted is 1 
        // conn.query('UPDATE `orders` SET deleted=0 where  idorder =?',id,function(err,result){
           // after that we need to change the reminder of the item and add the quantity to all reminder Iteme
    conn.query('SELECT iditem ,quantity from order_has_item where idorder= ? ',id,function(err,result){
     var y;
     y=result;
    for(var i=0;i<result.length;i++)
    {

      conn.query('SELECT remainder,iditem from item where iditem=? ',result[i].iditem,function(err,r){
      z=r[0].remainder+result[0].quantity;
      conn.query('UPDATE `item` SET `remainder`=?  where iditem=? ',[z,r[0].iditem],function(err,rr){
      conn.query('UPDATE `orders` SET `deleted`=0  where idorder=?',id,function(err,rrr){

      //x.push(r[0].remainder);
      //console.log(x);
      });
       });


        
    });
    }

       conn.release();
      if(err) {
        util.log(err);
          } else { 
          cb(result);
          }
       });
     
     });
   },

   deleteOrderNotAccepted:function(id,cb){
  var quantity,iditem,remainder,sum,accept,a;   
    mysqlMgr.connect(function (conn) {
       // already now the accepted is 0
         conn.query('UPDATE `orders` SET deleted=0 where  idorder =?',id,function(err,result){
         // finish

       conn.release();
      if(err) {
        util.log(err);
          } else { 
          cb(result);
          }
       });
     });
   }






   }

        /*
        if(accept==0){
        } else {

        }



       //console.log(accept);
       conn.release();
          //console.log(result1);
          if(err) {
             util.log(err);
            } else {
            cb(result1)
            }

      });

    });

     // unaccepted
     if(accepted == 0)
     {


     }


// acceped

      if(false)
      {



      mysqlMgr.connect(function (conn) {
        
          conn.query('SELECT  quantity from orders where idorder =?',id,function(err,result1){
          conn.query('SELECT iditem from order_has_item where idorder=?',id,function(err,result2){
          quantity =result1[0].quantity;
          iditem= result2[0].iditem;
          conn.query('SELECT remainder from item where iditem=?',iditem,function(err,result3){
          remainder=result3[0].remainder;
          sum=quantity+remainder;
          conn.query('update `orders` set `deleted`=0 WHERE`idorder`=?',id, function(err, result4){
           conn.query('update `item` set `remainder`=?  WHERE`iditem`=?',[sum,iditem], function(err, result5){

         
          conn.release();
          console.log(result5);
          if(err) {
             util.log(err);
            } else {
            cb(result1)
            }
        });
          });
           });
        });
      });
    });

// end if 
   }
*/
   