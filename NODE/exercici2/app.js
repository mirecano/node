//require es per reutilutzar un modul. (accedir a les funcions creades a index.js)
var Mates=require('./matematica');

//Declaro variables
var num1=10;
var num2=20;

//Creo objecte Mates
var calc=new Mates();

//Passo parametres a les diferents funcions per realitzar els calculs
calc.suma(num1,num2);
calc.resta(num1,num2);
calc.producte(num1,num2);
calc.divisio(num1,num2);

//Mostro per consola el numero PI
console.log(calc.PI);

