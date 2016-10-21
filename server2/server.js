var http=require('http');
var url=require('url');

//crear servidor
var server=http.createServer(function(req, resp){
	//parsejem la url a través de objurl (separar diferents components)
	var objurl=url.parse(req.url);
	//console.log mostrem per pantalla
	console.log('PATH: '+objurl.path);
	console.log('PATHNAME: '+ objurl.pathname);
	console.log('QUERY: ' + objurl.query);
	//Creem resposta. si és correcte 200, sino 404
	resp.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	resp.write('<DOCTYPE html><html><head></head>');
	resp.write('<body><h1>Hola Món</h1>');
	resp.write('<h2>' + objurl.pathname+ '</h2>');
	resp.write('</body></html>');
	response.end();
});

server.listen(3000);
console.log('Servidor iniciat');