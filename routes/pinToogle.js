var rpio = require('rpio');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Raspberry Pi GPIO Simple-GUI' });
});  


/* GET ajax response. */
router.post('/a', function(req, res) {
                rpio.init({mapping: 'gpio'});
                rpio.open(req.body.gpio, rpio.OUTPUT, + req.body.status);
                rpio.write(req.body.gpio, + req.body.status);
                res.contentType('json');
                res.send({ gpio: req.body.gpio, status: req.body.status });
            	console.log('Written to pin');  
    });
  
  


module.exports = router;
