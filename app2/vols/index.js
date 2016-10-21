//definir nou element
module.exports=function(info){


	//definim objecte (array)
	var values={
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive:null
	};

	//Omplir objecte (array)
	//bucle que s'encarrega de proporcionar valors a l'array (recorrer l'array)
	for(var prop in values){
		if(values[prop] !=='undefined'){ //!== identico (valor y tipo de dato)
			values[prop]=info[prop];
		}
	};
	var functions={
		//actualitzar les dates de sortida/arrivada
		triggerDepart: function(){
			values.actualDepart=Date.now();
		},
		triggerArrive: function(){
			values.actualArrive=Date.now();
		},
		getInformation: function(){
			return values;
		}
	};
	return functions;
};

