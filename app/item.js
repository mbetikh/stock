var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');



exports.itemMgr = {
/* Add item_type */
addItemtype : function(body,cb){      
  mysqlMgr.connect(function (conn) {
    conn.query('INSERT INTO `item_type` SET ?', body,  function(err, result) {    
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
   });
  },
/* Add item */
addItem : function(body,cb){
  mysqlMgr.connect(function (conn) {
    var id_item_info_id = body.id_item_info_id;
    var quantity = parseInt(body.quantity);
    var description = body.description;
    var item_type_iditem_type = body.item_type_iditem_type;
    var deleted = body.deleted;
    var Name = body.Name;
    var Barcode = body.Barcode;
    var supplier_idsupplier = body.getiteme; 
    var sum=0;

    if(Name == '' && Barcode == '')
      {conn.query('SELECT remainder FROM `item` where `id_item_info_id`=?',id_item_info_id, function(err, result) {  
       var re=parseInt(result[0].remainder);
       sum=quantity + re;
       conn.query('UPDATE `item` SET `quantity`=? ,`remainder`=? where `id_item_info_id`=?',[quantity,sum,id_item_info_id],  function(err, result) {
        conn.release();
       if(err) {
        util.log(err);
       } else {
        cb(result); 
       }
  }); 
});
      }else{
        var x;
       conn.query('INSERT INTO `item_info`(`Name`, `Barcode`) VALUES (?,?)',[Name,Barcode],  function(err, result) {
        x = result.insertId;
        var y=x;
       conn.query('INSERT INTO `item`(`id_item_info_id`, `quantity`, `remainder`, `description`, `item_type_iditem_type`, `deleted`) VALUES (?,?,?,?,?,?)',[result.insertId,quantity,quantity,description,item_type_iditem_type,1],  function(err, result, x) {
       conn.query('INSERT INTO `supplier_has_item` (`supplier_idsupplier`, `item_iditem`, `quantity`) VALUES (?,?,?)',[supplier_idsupplier,y,quantity],  function(err, result) {
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

    }
  });
},
updateitem: function(body,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('update `item` set '+body.name+' = ? WHERE `iditem` = ?',[body.value,body.pk], function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},
updatesupl: function(body,cb){
  mysqlMgr.connect(function (conn) {
    console.log(body);
    conn.query('update `supplier_has_item` set supplier_idsupplier = ? WHERE `item_iditem` = ?',[body.value,body.pk], function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},
updateiteminfo: function(body,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('update `item_info` set Name = ? WHERE `item_info_id` = ?',[body.value,body.pk], function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},
/* get item */
getitem : function(cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT * FROM `item_type` where deleted = 1', function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},
show: function(id,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT * FROM `item` `i`,`item_info` `if` where `if`.`item_info_id` = `i`.`id_item_info_id` and `i`.`deleted` = 1 and `i`.`item_type_iditem_type` = ?',id, function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},

getsupplier : function(ido,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT * FROM `supplier_has_item` `si`,`supplier` `s` where  s.deleted = 1 and `s`.`idsupplier` = `si`.`supplier_idsupplier` and `si`.`item_iditem` = ?',ido, function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},
getsupplierall : function(cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT * FROM `supplier` `s` where  s.deleted = 1 ', function(err, result1) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result1);
      }
    });
  });
},
getsuppliername : function(cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT idsupplier,name FROM `supplier` `s` where  s.deleted = 1 ', function(err, result1) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result1);
      }
    });
  });
},
edititem : function(id,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('SELECT * FROM `supplier` `s`,`supplier_has_item` `si`,`item_info` `if`,`item` `i` where  i.deleted = 1 and `i`.`id_item_info_id` = `if`.`item_info_id` and `if`.`item_info_id`=`si`.`item_iditem` and `si`.`supplier_idsupplier`=`s`.`idsupplier` and `i`.`iditem` = ?',id, function(err, result) {
      conn.release();
      if(err) {
        util.log(err);
      } else {
        cb(result);
      }
    });
  });
},

deleteitem: function(id,cb){
  mysqlMgr.connect(function (conn) {
    conn.query('update `item` set `deleted`=0 WHERE `iditem` =?',id, function(err, result) {
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




