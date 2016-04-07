var express = require('express');
var app = express();

var registered_hosts = [];

app.get('/register/:host' ,function(req,res){
	var host= req.params.host;
	registered_hosts.push(host)
	console.log('Registered: ' + host);
	res.send('host:'+ host);
});

app.get('/registered', function(req, res){
	console.log(registered_hosts);
	res.send (registered_hosts);
});

app.listen(8080, function(){
	console.log('App running on 8080');
});
