//require es per reutilutzar un modul. (accedir a les funcions creades a index.js)
var flight=require('./vols');

flight.setOrigin('Barcelona');
flight.setdestination('London');
flight.setNumber(123);

//extreure informacio (getInfo)
//accedir a la info a traves de console
console.log(flight.getInfo());