var express = require('express');  
var path = require('path');  
var router = express.Router();
var bodyParser = require('body-parser');
var cons = require('consolidate');
var app = express();

var http=require('http').Server(app);
var io=require('socket.io')(http);
var exec =require('child_process').exec; 


var database=require('./routes/database');
database.connect();
  
global.logged;

var pinToogle = require('./routes/pinToogle');
var loginpage =require('./routes/loginpage');
var dashboard =require('./routes/dashboard');


 


var fs=require('fs');
var spawn=require('child_process').spawn;
var proc;
var sockets={};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);  
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html',cons.swig);
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'html');



router.all('/', function (req, res, next) {  
  console.log('Someone made a request!');
  next();
});


app.use('/toogle',pinToogle);
app.use('/',loginpage);
app.use('/dashboard',dashboard);
//var chill=exec('fswebcam  --save /home/pi/a.jpg ');
io.on('connection', function(socket) {
 
	
   
	
	   
		
		
	setInterval(function(){
		
	fs.readFile('/home/pi/a.jpg',function(err,buf){
   socket.emit('liveStream', {image:true,buffer:buf.toString('base64')});
    exec('fswebcam  --save /home/pi/a.jpg ');
    console.log('x');
   });
	},500);
  



});
    
 
 
  

 


 

 


http.listen(9000);

module.exports = app;  
