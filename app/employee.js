var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
   
exports.employeeMgr = {

  getEmployees: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `employee` where idemployee = ?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  searchEmployee : function(name,cb){
    name = name+"%";
    mysqlMgr.connect(function (conn) {
        conn.query('SELECT e.idemployee , e.name empname , e.email , e.phoneNumber , e.username ,e.password , e.level , d.name dname  FROM `employee` `e`,`department` `d` where e.deleted = 1 and `e`.`iddepartment` = `d`.`iddepartments` and `e`.`name` LIKE ? ' ,[name], function(err, result) {
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
      conn.query('INSERT INTO `employee` SET ?', body,  function(err, result) {    
        conn.release();
        if(err) {
           util.log(err);
        } else {
            cb(result);
        }
      });
    });
  },

  getEmployee: function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT e.idemployee , e.name empname , e.email , e.phoneNumber , e.username ,e.password , e.level , d.name dname  FROM `employee` `e`,`department` `d` where e.deleted = 1 and `e`.`iddepartment` = `d`.`iddepartments` ', function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  updateEmployee: function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `employee` set '+body.name+' = ? WHERE`idemployee`=?',[body.value,body.pk], function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  deletEmployee: function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('update `employee` set `deleted`=0 WHERE`idemployee`=?',id, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result)
        }
      });
    });
  },

  getEmployeeByEmail : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `employee` WHERE `deleted` = 1 AND `email` = ?',email,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result[0]);
        }
      });
    });
  },

  getEmployeeById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `employee` WHERE `deleted` = 1 AND `idemployee` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result[0]);
        }
      });
    });
  }, 
}

