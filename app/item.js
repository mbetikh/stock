var mysqlMgr = require('./mysql').mysqlMgr,
  util=require('util');



exports.itemMgr = {
/* Add item_type */
addItemtype : function(body,cb){
    console.log(body);
    console.log("hhhhhhhhhh");      
    mysqlMgr.connect(function (conn) {
      
      var type = body.type;

         console.log("MOHAMMED or ffffff"); 
         conn.query('INSERT INTO `item_type`(`type`) VALUES (?)',[type],  function(err, result) {
         conn.release();
         if(err) {
          util.log(err);
         } else {
          cb(result)
         }

        });
      });

    },
/* Add item */
  addItem : function(body,cb){
    console.log(body);      
    mysqlMgr.connect(function (conn) {
      
      var id_item_info_id = body.id_item_info_id;
      var quantity = body.quantity;
      var remainder = body.remainder;
      var description = body.description;
      var item_type_iditem_type = body.item_type_iditem_type;
      var deleted = body.deleted;
      var Name = body.Name;
      var Barcode = body.Barcode;
      var supplier_idsupplier = body.supplier_idsupplier;


      if(Name == '' && Barcode == '')
        { 
         console.log("MOHAMMED ALI"); 
         conn.query('UPDATE `item` SET `quantity`=? where `id_item_info_id`=?',[quantity,id_item_info_id],  function(err, result) {
          conn.release();
         if(err) {
          util.log(err);
         } else {
          cb(result)
         }
    }); 
        }else{
         console.log("MOHAMMED or ffffff"); 
         conn.query('INSERT INTO `item`(`id_item_info_id`, `quantity`, `remainder`, `description`, `item_type_iditem_type`, `deleted`) VALUES (?,?,?,?,?,?)',[id_item_info_id,quantity,remainder,description,item_type_iditem_type,deleted],  function(err, result5) {
         conn.query('INSERT INTO `item_info`(`Name`, `Barcode`) VALUES (?,?)',[Name,Barcode],  function(err, result) {
         conn.release();
         if(err) {
          util.log(err);
         } else {
          var results={
            iditem:result.insertId
            
          }
          console.log(result.iditem);
          console.log(result);
          conn.query('INSERT INTO `supplier_has_item` (`supplier_idsupplier`, `item_iditem`) VALUES (?,?)',[supplier_idsupplier,results.iditem]);
          
          cb(result)
         }
   
         });
      });

        }
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
      conn.query('SELECT * FROM `item` `i`,`item_info` `if` where `if`.`item_info_id` = `i`.`id_item_info_id` and `i`.`item_type_iditem_type` = ?',id, function(err, result) {
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
  }

}




