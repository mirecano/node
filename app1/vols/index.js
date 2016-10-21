//definim variables
var number, origin, destination;

//definim 4 funcions que les exportarem pq es puguin utilitzar fora d'aquest fitxer
exports.setNumber=function(num){
	number=num;
};

exports.setOrigin=function(o){
	origin=o;
};

exports.setdestination=function(d){
	destination=d;
};

exports.getInfo=function(){
	return {
		number: number,
		origin: origin,
		destination: destination
	};
};