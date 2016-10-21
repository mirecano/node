//Creem variable general
var Flight=function(){


	//definim atributs de la clase Flight
	this.data={
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive:null
	};

	//Definicio de funcions o metodes
	//Omplir atributs

	/**
	*
	* 	fill: Omplir atributs de Flight
	*
	**/
	this.fill=function(info){
		for(var prop in this.data){
			if((this.data)[prop] !=='undefined'){ //!== identico (valor y tipo de dato)
				this.data[prop]=info[prop];
			}
		}
	};


	//actualitzar les dates de sortida/arrivada
	this.triggerDepart=function(){
		this.data.actualDepart=Date.now();
	};


	this.triggerArrive=function(){
		this.data.actualArrive=Date.now();
	};
		
	this.getInformation=function(){
		return this.data;
	};

};

//exportem el modul
module.exports=Flight;

