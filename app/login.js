var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
   

exports.loginMgr = {
/* Add item */
  userLogin : function(body,cb){
    console.log(body);
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `users` WHERE username=? and password = ?',  [body.username,body.password],  function(err, result) {
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




