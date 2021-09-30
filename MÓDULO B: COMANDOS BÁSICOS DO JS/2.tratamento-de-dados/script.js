/*::::MÓDULO B: COMANDOS BÁSICOS::::*/
/*2.TRATAMENTO DE DADOS = MANIPULAÇÃO DE DADOS:*/

//···························································································
//::::COMANDOS::::
//···························································································
//alert("Hello World!");
//confirm("Welcome!");
//prompt("Qual o seu nome?");

//"ESCREVE NA TELA DO NAVEGADOR:"
//document.write(); 

//"CONVERTE STRING EM NÚMERO:"
//Number.parseInt OU parseInt OU Number = Inteiro
//Number.parseFloat OU parseFloat OU Number = Real

//"CONVERTE NÚMERO EM STRING:"
//String(n)  
//n.toString()

//"FORMATAÇÃO DE STRING:""
//s.length "Diz quantos caracteres a string tem"
//s.toUpperCase() "Tudo para maiúsculo"
//s.toLowerCase() "Tudo para minúsculo"

//"FORMATAÇÃO DE NÚMEROS:"
//n.toFixed(x); "Adiciona "x" casas decimais"
//n.toFixed(x).replace('.', ','); "Muda ponto por vírgula ou vice e versa se necessário"

//n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); "Add o valor monetário"
//n.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}); "Add o valor monetário"
//n.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}); "Add o valor monetário"

//"... + ..." adição e concatenação
//`... ${nomedavariável} ...` concatenação
/*

//::::Ex1::::

var nome = prompt("Qual o seu nome?");

alert("Muito prazer, " + nome + "!");
*/

//···························································································
//::::CONVERTER STRING EM NÚMERO::::
//···························································································
//OBS: POR PADRÃO, O COMANDO prompt RETORNA VALOR STRING.

//::::Ex2::::

//Number.parseInt OU parseInt OU Number = Inteiro
//Number.parseFloat OU parseFloat OU Number = Real

/*
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
*/

//···························································································
//::::CONVERTER NÚMERO EM STRING:::::
//···························································································
//String(n)
//n.toString()


/*
//Ex: 
var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
var s = n1 + n2;

alert(`A soma entre ${n1} e ${n2} é igual a ${s}`);
*/

//···························································································
//::::FORMATANDO STRING::::
//···························································································
//s.length "Diz quantos caracteres a string tem"
//s.toUpperCase() "Tudo para maiúsculo"
//s.toLowerCase() "Tudo para minúsculo"

/*
//::::Ex::::
var nome = prompt("Qual o seu nome?");
document.write(`Seu nome tem ${nome.length} letras <br>`); 
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()} <br>`); 
document.write(`Seu nome em letras minúsculas é ${nome.toLowerCase()} <br>`); 
*/