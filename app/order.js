var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');

exports.orderMgr = {

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
          conn.query('SELECT * FROM `item` where `deleted` = 1 AND `item_type_iditem_type` = ?',id,function(err, result2) {
          conn.release();
        if(err) {
           util.log(err);
       } else {
            cb(result2);
          }
         });
      });
     },

     getreminder : function(id,cb){
      mysqlMgr.connect(function (conn) {
      	 // consel.log("dd");
          conn.query('SELECT * FROM `item` where  `iditem` = ?',id,function(err, result3) {
          conn.release();
        if(err) {
           util.log(err);
       } else {
            cb(result3);
          }
         });
      });
     },
    addOrder: function(body,cb){
      mysqlMgr.connect(function (conn) {

          var discription = body.textarea;
          var quantity=body.quant;
          var iditeme=body.getiteme;
          var reminder=body.reminder;
          var requEmploye=body.employee;
          var confirm=body.confirm;
          var re= reminder-quantity;
          console.log()
          if(confirm==undefined)
          {
           var confirm=0;
          }
          conn.query('INSERT INTO `orders`(`quantity`, `discription`, `requestEmploye`, `Employ_stocks`, `accepted`) VALUES (?,?,?,?,?)',[quantity,discription,requEmploye,1,confirm],function(err, result3) {
          conn.query('INSERT INTO `order_has_item` (`idorder`,`iditem`) VALUES (?,?)',[result3.insertId,iditeme],function(err, result) {
          if (confirm !=0){
            conn.query('UPDATE `item` SET `remainder`=? where iditem=?',[re,iditeme]);
          }
          conn.release();


             if(err) {
           util.log(err);
         } else {
              console.log(result);
            
              cb(result);

            }

          });
       
         });
      });
     },

getOrderInfo:function(cb){
      mysqlMgr.connect(function (conn) {
         // consel.log("dd");
          conn.query('SELECT o.idorder,i.name as item,o.quantity,emp.name as empe ,dept.name as dep FROM item as i ,orders as o,order_has_item as io , employee as emp ,department as dept WHERE o.deleted=1 and o.idorder=io.idorder AND i.iditem=io.iditem and o.requestEmploye=emp.idemployee AND dept.iddepartments=emp.iddepartment',function(err, result3) {
          conn.release();
        if(err) {
           util.log(err);
       } else {
            cb(result3);
          }
         });
      });
     },
deleteOrder:function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `orders` set `deleted`=0 WHERE`idorder`=?',id, function(err, result) {
      // add to reminder this quantity
      //conn.query('select ',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result)
        }
      });
    });
  }

	}
   