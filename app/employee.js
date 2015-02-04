var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
   

exports.EmployeeMgr = {
/* Add item */
    getEmployee : function(cb){
      mysqlMgr.connect(function (conn) {
          conn.query('SELECT * FROM `department`',function(err, result) {
          conn.release();
        if(err) {
           util.log(err);
       } else {
            cb(result);
          }
         });
      });
     },
    addEmployee: function(body,cb){
      mysqlMgr.connect(function (conn) {
        console.log(body);
        conn.query('INSERT INTO `employee` SET ?', body,  function(err, result) {    
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
   getEmployee: function(cb){
      mysqlMgr.connect(function (conn) {
        conn.query('SELECT * FROM `employee` where deleted = 1', function(err, result) {
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




