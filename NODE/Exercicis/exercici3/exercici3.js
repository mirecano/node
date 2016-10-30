//Reutilitzar modul os del sistema
var os=require('os');

//Imprimir memoria lliure actual
console.log('Memòria lliure:'+os.freemem());
//Declaro vector
var vec=[];
//Omplo vector amb 1000000 números
for(var i=0;i<1000000;i++) {
    vec.push(i);
}	
//Imprimeixo per consola la memòria després d'omplir el vector
console.log('Memòria lliure després de crear el vector:'+os.freemem());