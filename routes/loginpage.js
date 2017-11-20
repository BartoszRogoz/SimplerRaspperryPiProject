var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginpage', { title: 'Raspberry Pi GPIO Simple-GUI' });
});


module.exports = router;
