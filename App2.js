var express = require('express');  
var path = require('path');  
var app = express();  
var router = express.Router();
var bodyParser = require('body-parser');

var pinToogle = require('./routes/pinToogle');
var loginpage =require('./routes/loginpage');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);  
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');



router.all('/', function (req, res, next) {  
  console.log('Someone made a request!');
  next();
});


app.use('/a',pinToogle);
app.use('/',loginpage);

app.listen(9000);  
module.exports = app;  
