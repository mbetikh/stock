var express = require('express');
var router = express.Router();





router.get('/', function(req,res){
  res.render('AddOrder',{title: 'الطلبيــات'});
})



module.exports = router;