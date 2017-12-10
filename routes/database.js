var express = require('express');
var mysql =require('mysql');
var router = express.Router();
var db=mysql.createConnection({
	host    :'localhost',
	user    :'rogoz',
	password:'hukhuk',
	database:'TEST',
	charset :'utf8_unicode_ci'
});
//LOG
//mysql -urogoz -hlocalhost TEST -p
//hukhuk
//TABLES:
//KategoriaUrzadzenia
//PIETRA
//Wentylator ITP
//PORTY

module.exports = { 
	connect:function() {
	db.connect((err)=>{
	if(err){
		throw err;
	}
	console.log('MySql Connected');})},
	disconect:function() {
	db.end((err)=>{
	if(err){
		throw err;
	}
	console.log('MySql DisConnected');})},
	router,
	db
}
	

//Create table POKOJE( ID int NOT NULL AUTO_INCREMENT,NAZWAPOKOJU varchar(255),id_pietra int NOT NULL,  Primary key (ID),FOREIGN KEY(id_PIETRA) REFERENCES PIETRA(ID), CONSTRAINT POKOJE_UNIQUE UNIQUE (NAZWAPOKOJU)) ;
//Create table Urzadzenia( ID int NOT NULL AUTO_INCREMENT,NAZWAURZADZENIA varchar(255),KATEGORIA int NOT NULL, POKOJ int NOT NULL, Primary key (ID),FOREIGN KEY (POKOJ) REFERENCES POKOJE(ID),FOREIGN KEY(KATEGORIA) REFERENCES KategoriaUrzadzenia(ID), CONSTRAINT Urzadzenia_UNIQUE UNIQUE (NAZWAURZADZENIA));
//Create table PIETRA( ID int NOT NULL AUTO_INCREMENT,NAZWAPIETRA varchar(255),Primary key (ID), CONSTRAINT PIETRA_UNIQUE UNIQUE(NAZWAPIETRA) );
//CREATE TABLE PORTY (ID int NOT NULL AUTO_INCREMENT, NAZWA varchar(255),GPIO int NOT NULL,ZAJETY int NOT NULL , PRIMARY KEY(ID) );
