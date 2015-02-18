var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
   

exports.departmentMgr = {
/* Add item */
  getDepartments : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `department` ', function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  getDepartment: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `department` where iddepartments = ?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  update: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `department` set '+body.name+' = ? WHERE`iddepartments`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  dpdelete: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `department` set `deleted`=0 WHERE`iddepartments`=?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result)
        }
      });
    });
  },
  
    addDp: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `department` SET ?', body,  function(err, result) {
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



