var http=require('http');
var url=require('url');

var server=http.createServer(function(req,resp){
	//separar els diferents components d'una URL. La parsejem
	var objurl=url.parse(req.url);
	console.log('PATH: '+objurl.path);
	console.log('PATHNAME: '+objurl.pathname);
	console.log('QUERY: '+objurl.query);
	resp.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	resp.write('<DOCTYPE html><html><head></head>');
	resp.write('<body><h1><b>Hola món!</b></h1>');
	resp.write('<h2>'+objurl.pathname+'</h2></body></html>');


	resp.end();

	


});


server.listen(3000);
console.log('Servidor iniciat');








