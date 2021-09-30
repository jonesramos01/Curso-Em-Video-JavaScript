/*::::MÓDULO B: COMANDOS BÁSICOS::::*/
/*2.TRATAMENTO DE DADOS = MANIPULAÇÃO DE DADOS:*/

/*
//::::COMANDOS::::

alert("Hello World!");
confirm("Welcome!");
prompt("Qual o seu nome");

"... + ..." adição e concatenação
`... ${nomedavariável} ...` concatenação
*/

/*
//Ex1:
var nome = prompt("Qual o seu nome?");

alert("Muito prazer, " + nome + "!");
*/

/*
//Ex2: 
//OBS: CONVERSÃO NECESSÁRIA POIS, POR PADRÃO, O COMANDO prompt RETORNA VALOR STRING

//::::CONVERTER STRING EM NÚMERO::::

//Number.parseInt OU parseInt OU Number = Inteiro
//Number.parseFloat OU parseFloat OU Number = Real

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

/*
//3ª Opção:

//1:
var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
var s = n1 + n2;

alert("O valor da soma é: " + s);

//::::CONVERTER NÚMERO EM STRING:::::

//String(n)
//n.toString()
*/

//2: 
var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
var s = n1 + n2;

alert(`A soma entre ${n1} e ${n2} é igual a ${s}`);

//::::FORMATANDO STRING::::

//s.length "Diz quantos caracteres a string tem"
//s.toUpperCase() "Tudo para maiúsculo"
//s.toLowerCase() "Tudo para minúsculo"