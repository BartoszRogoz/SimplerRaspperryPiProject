var express = require('express');
var router = express.Router();
var database=require('./database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginpage', { title: 'Raspberry Pi GPIO Simple-GUI' });
  
});
router.post('/log', (req, res) =>{
	let sql='SELECT * FROM Uzytkownicy WHERE "'+ req.body.login +'"=Login AND "'+ req.body.haslo +'"=Haslo'  ;
	let query =database.db.query(sql, (err,results)=> {
		if(err) { throw err;}
		console.log(sql);
		res.send(results);
		console.log(results);
		});
		
	});

module.exports = router;
