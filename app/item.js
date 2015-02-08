var mysqlMgr = require('./mysql').mysqlMgr,
  util=require('util');



exports.itemMgr = {
/* Add item */
  addItem : function(body,cb){
    console.log(body);
    if(true){
      console.log("hello");
    }
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `item` SET ?',  body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result.insertId)
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
          console.log(result);
          cb(result);
        }
      });
    });
  }



}




