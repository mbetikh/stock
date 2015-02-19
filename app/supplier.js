var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.supplierMgr = {
	addSupplier: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `supplier` SET ?', body,  function(err, result) {    
        conn.release();
        if(err) {
           util.log(err);
       } else {
            cb(result);
          }
         });
      });
     },
  getSupplier : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `supplier` WHERE deleted = 1', function(err, result) {
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
      conn.query('SELECT * FROM `supplier` WHERE idsupplier = ?',id, function(err, result) {
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
      conn.query('UPDATE `supplier` SET '+body.name+' = ? WHERE`idsupplier`=?',[body.value,body.pk], function(err, result) {
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
      conn.query('UPDATE `supplier` SET `deleted`=0 WHERE `idsupplier`=?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result)
        }
      });
    });
  },
  checkNameSupplier : function(name,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT idsupplier FROM `supplier` WHERE deleted=1 AND name=?',name, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  checkEmailSupplier : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT idsupplier FROM `supplier` WHERE deleted=1 AND Email=?',email, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
}