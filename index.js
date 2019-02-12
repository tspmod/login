var express = require('express');
var app = express();
var route = require('./router');
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'@thisismysecret22', resave: false, saveUninitilized:true}));
app.use(express.static(__dirname + '/client'))

app.get('/', function(req, res){
	res.sendFile("index.html");
});

app.use('/user', route);
app.listen(3030, function() {
	console.log('we are on 3030!!!')
})
