var rpio = require('rpio');
var express = require('express');
var router = express.Router();
var database=require('./database');
rpio.init({mapping: 'gpio'});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Raspberry Pi GPIO Simple-GUI' });
  
});
 

router.post('/getPortList', (req, res) =>{
	let sql='SELECT NAZWA   FROM PORTY WHERE ZAJETY=0;';
	let query =database.db.query(sql, (err,results)=> {	
		res.send(results);
		console.log(results);
		});	
	});

router.post('/WidgetTwojDom', (req, res) =>{
	let sql='SELECT   FROM POKOJE RIGHT  JOIN PIETRA ON POKOJE.id_pietra=PIETRA.ID;';
	let query =database.db.query(sql, (err,results)=> {	
		res.send(results);
		console.log(results);
		});	
	});


router.post('/getListaUrzadzen', (req, res) =>{
	console.log(req.body.a);
	let sql='SELECT * FROM '+req.body.a ;
	let query =database.db.query(sql, (err,results)=> {	
		res.send(results)
		});	
	
		
		
	});

router.post('/getSpecDEV', (req, res) =>{
	
	let sql='desc '+req.body.a;
	let query =database.db.query(sql, (err,results)=> {
		console.log(req.body.a);
		res.send(results);
		});	
	});


router.post('/getListaPokoiWidget', (req, res) =>{
	
	let sql='SELECT  PIETRA.NAZWAPIETRA, POKOJE.NAZWAPOKOJU  FROM POKOJE RIGHT  JOIN PIETRA ON POKOJE.id_pietra=PIETRA.ID WHERE PIETRA.NAZWAPIETRA="'+req.body.a+'";';
	let query =database.db.query(sql, (err,results)=> {
		
		res.send(results);
		});	
	});

router.post('/getKategoriaUrzadzenia', (req, res) =>{
	let sql='SELECT * FROM KategoriaUrzadzenia;';
	let query =database.db.query(sql, (err,results)=> {
		
		res.send(results);
		});	
	});
router.post('/setDodajPokoj', (req, res) =>{
	let sql='INSERT INTO POKOJE (id_pietra, NAZWAPOKOJU) VALUES ((SELECT ID FROM PIETRA WHERE NAZWAPIETRA="'+req.body.query2+'"),"'+req.body.query1+'");'; 
	let query =database.db.query(sql, (err,results)=> {
		
		res.send(results);
		});	
	});	
	
router.post('/setDodajPietro', (req, res) =>{
	console.log(req.body.query);
	let sql='INSERT INTO PIETRA (NAZWAPIETRA) VALUES ("'+req.body.query+'");';
	let query =database.db.query(sql, (err,results)=> {
		
		res.send(results);
		});	
	});	
	
router.post('/getListaPieter', (req, res) =>{
	let sql='SELECT NAZWAPIETRA FROM PIETRA;';
	let query =database.db.query(sql, (err,results)=> {
		
		res.send(results);
		});	
	});	
router.post('/getListaPokoi', (req, res) =>{
	let sql='SELECT NAZWAPOKOJU FROM POKOJE;';
	let query =database.db.query(sql, (err,results)=> {
	
	    res.send(results);
		});	
	});	
	
router.post('/a', function(req, res) {
                rpio.open(req.body.gpio, rpio.OUTPUT, + req.body.status);
                rpio.write(req.body.gpio, + req.body.status);
                res.contentType('json');
                res.send({ gpio: req.body.gpio, status: req.body.status });
            	console.log('Written to pin');  
    });

	
module.exports = router;
