var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
exports.userMgr = {
  /* adding a new user to the system */
  addUser : function(body,cb){
    mysqlMgr.connect(function (conn) {
    
      conn.query('INSERT INTO `user` SET ?',  body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
        
          cb(results); 
        }
      });
    });
  },
  /* editing user's table field by field */
  editUser : function(body,rec,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `user` SET '+body.name+' = ?,`modify_date`=? WHERE `iduser` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(null,rec); 
        }
      });
    });
  },
  /* get all users*/
  getUsers : function(limit,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `iduser`,`name`,`phone_number`,`level` FROM user LEFT JOIN phone ON  (phone.user_employee = user.iduser AND phone.user_type = 0 AND phone.status=1) WHERE  user.status = 1 group by iduser limit ?,10; SELECT COUNT(*) as cnt FROM `user`  WHERE `status` = 1;', limit,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  /* get user by id*/
  getUser : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `iduser`,`name`,`email`,`phone_number`,`level`,`idphone`,`p_type`,`type`,`office_idoffice`,`phone_number` FROM user LEFT JOIN  office ON (office.idoffice = user.office_idoffice AND office.status=1) LEFT JOIN phone ON(phone.user_employee = user.iduser AND phone.status = 1 AND phone.user_type =0) WHERE  user.iduser = ? AND user.status = 1', id ,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
    /* delete user by id*/
  delUser : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `user` SET `status` = 0 ,`modify_date`=? WHERE `iduser` = ?',[date,id],  function(err, result) { 
        conn.query('SELECT `idphone`,`phone_number` FROM  `phone` WHERE `status` = 1  AND `user_type`=0 AND `user_employee`=?',id,  function(err, results) {
          conn.query('SELECT `name` FROM  `user` WHERE `iduser` = ? ',id,  function(err, resultz) {
            conn.query('UPDATE `phone` SET `status` = 0,`modify_date`=? WHERE `user_employee` = ?',[id,date]);
            conn.release();
            if(err) {
            util.log(err);
            } else {
              cb(results,resultz);
            }
          });
        });
      });
    });
  },

  /* getting user by email */
  getUserByEmail : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `user` WHERE `status` = 1 AND `email` = ?',email,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result[0]);
        }
      });
    });
  },
  /* getting user by ID */
  getUserById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `user` WHERE `status` = 1 AND `iduser` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result[0]);
        }
      });
    });
  }, 
};