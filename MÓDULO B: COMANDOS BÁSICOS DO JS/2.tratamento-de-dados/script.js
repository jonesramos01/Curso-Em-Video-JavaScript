/*::::MÓDULO B: COMANDOS BÁSICOS::::*/
/*2.TRATAMENTO DE DADOS = MANIPULAÇÃO DE DADOS:*/

/*
//COMANDOS:
alert("Hello World!");
confirm("Welcome!");
prompt("Qual o seu nome");
+ adição e concatenação
*/

/*
//Ex1:
var nome = prompt("Qual o seu nome?");

alert("Muito prazer, " + nome + "!");
*/

/*
//Ex2: CONVERTER STRING EM NÚMERO:
//OBS: CONVERSÃO NECESSÁRIA POIS, POR PADRÃO, O COMANDO prompt RETORNA VALOR STRING

//Number.parseInt OU parseInt OU Number
//Number.parseFloat OU parseFloat OU Number

//1ª Opção:
var n1 = Number.parseInt(prompt("Digite um número: "));
var n2 = Number.parseInt(prompt("Digite outro número: "));
var s = n1 + n2;

alert("O valor da soma é: " + s);
*/

/*
//2ª Opção:
var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite outro número: "));
var s = n1 + n2;

alert("O valor da soma é: " + s);
*/

/**/
//3ª Opção:
var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
var s = n1 + n2;

alert("O valor da soma é: " + s);
par

//CONVERTER NÚMERO EM STRING:

//String(n)
//n.toString