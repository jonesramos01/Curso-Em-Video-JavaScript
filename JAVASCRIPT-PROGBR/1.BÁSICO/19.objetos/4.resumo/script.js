/*OBJETOS: RESUMO*/
//Formas de criar um Objeto:

//1ª Forma: Variável dentro de um objeto:
var a = {
    nome: "Pedro",
    sobrenome: "Simão",
}

console.log(a);

//2º Forma: Criando uma Função - "Retorna":
function obj(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome,}
}

var a = obj("Pedro", "Simão")

console.log(a);

//3ª Forma: Criando uma Função - "Não retorna" - "this.xpto"
function obj(n, s){
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj("Pedro", "Simão")

console.log(a)

//Formas de acessar um Objeto:

//console.log(a) //Acessa tudo

//console.log(a.nome) //Acessa o nome
//console.log(a.sobrenome) //Acessa o sobrenome
//Ou:
//console.log(a["nome"]) //Acessa o nome
//console.log(a["sobrenome"]) //Acessa o sobrenome