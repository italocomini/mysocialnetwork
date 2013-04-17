var express = require('express');
var app = express(); // criando nova instância do Express

app.configure(function(){
	app.set('view engine', 'jade');
	// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, reponse) {
	reponse.render('index.jade', {layout : false});
});

app.listen(5000);