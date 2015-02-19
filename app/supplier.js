var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
   
exports.supplierMgr = {
	addSupplier: function(body,cb){
      mysqlMgr.connect(function (conn) {
        console.log(body);
        conn.query('INSERT INTO `supplier` SET ?', body,  function(err, result) {    
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
       
  getSupplier : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `supplier` where deleted = 1', function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  editSupplier: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `supplier` where idsupplier = ?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
   updateSupplier: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `supplier` set '+body.name+' = ? WHERE`idsupplier`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  deleteSupplier: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `supplier` set `deleted`=0 WHERE`idsupplier`=?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result)
        }
      });
    });
  },
}