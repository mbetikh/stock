var express = require('express');
var router = express.Router();
var login = require('../app/login')(router);



/* GET users listing. */

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/login', function(req,res){
  res.render('login',{title: 'دخول'});
});


module.exports = router;
