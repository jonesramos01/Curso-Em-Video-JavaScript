/*DATAS:*/
/*
//1º) Data atual:
var d = new Date();

console.log(d); //Imprime a data atual do sistema operacional


//2º) Data específica:
//var d = new Date(year, month, day, hours, minutes, seconds, ...); //Pode ter mais ou menos dados se quiser...
//var d = new Date(year, month, day)
var d = new Date(2021, 9, 27);

console.log(d); //Imprime a data específica em questão
*/

//Métodos principais para manipular datas:
var d = new Date();

console.log(d);
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

//Obs: Ao passar o mês em forma de número, esse número vai corresponder ao index de um Array (0, 1, 2, ...) Ex: 0 - Janeiro, ... , 11 - Dezembro

/*
Métodos principais para manipular datas:

getDate()	Returns the day of the month (from 1-31)
getFullYear()	Returns the year
getDay()	Returns the day of the week (from 0-6)
getMonth()	Returns the month (from 0-11)
getHours()	Returns the hour (from 0-23)
getMinutes()	Returns the minutes (from 0-59)
getSeconds()	Returns the seconds (from 0-59)
getMilliseconds()	Returns the milliseconds (from 0-999)

Obs: Lista completa em index.html
*/