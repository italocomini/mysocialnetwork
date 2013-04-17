var express = require('express');
var app = express();

app.configure(function(){
    app.set('view engine', 'jade');
	// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
    res.render("index.jade", {layout:false});
});

app.listen(8000);
console.log("SocialNet is listening to port 8000.");
