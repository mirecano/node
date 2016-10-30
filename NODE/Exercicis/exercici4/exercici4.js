var http=require('http');
var url=require('url');

//Funció
function handleRequest(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>Benvinguts a node</h1>');
	response.end();
};

//Servidor
var server=http.createServer(handleRequest);

//port per on escolta el servidor
server.listen(3000);

//Imprimir per pantalla
console.log('Servidor iniciat');