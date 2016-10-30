//Creem variable general
var Mates=function(){
	//Constant PI
	this.PI=3.1415297;

	//Defineixo atributs de la clase operadors
	this.operadors={
		op1:0,
		op2:0
	};

	//Definició de funcions o mètodes
		this.suma=function(op1, op2){
		var res=op1+op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('la suma de ' + op1 + ' i ' + op2 + ' és: '+ res);
		console.log(this.operadors);
		return this.operadors;
		};

		this.resta=function(op1, op2){
		var res=op1-op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('la resta de ' + op1 + ' i ' + op2 + ' és: '+ res);
		console.log(this.operadors);
		return this.operadors;

		};

		this.producte=function(op1, op2){
		var res=op1*op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('El producte de ' + op1 + ' i ' + op2 + ' és: '+ res);
		console.log(this.operadors);
		return this.operadors;

		};

		this.divisio=function(op1, op2){
		var res=op1/op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('La divisio de ' + op1 + ' i ' + op2 + ' és: '+ res);
		console.log(this.operadors);
		return this.operadors;

		};
	
	
};
//Exporto el modul 
module.exports=Mates;