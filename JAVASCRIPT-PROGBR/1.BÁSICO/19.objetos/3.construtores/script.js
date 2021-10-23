/*OBJETOS: CONSTRUTORES:*/
//UM ARRAY TAMBÉM É UM OBJETO
//....................................................................................................
//1)
/*
function criarAluno(){
    return{
        nome: "Pedro",
        nota1: 7.0,
        nota2: 8.0,
        media: function(){
            return(this.nota1 + this.nota2)/2;
        }
    }
}

//TESTE
var aluno = criarAluno();

console.log(aluno);
console.log(aluno.media());
*/

//....................................................................................................
//2)
/*
var calcMedia = function(){
    return(this.nota1 + this.nota2)/2;
}

//1º) DECLARAÇÃO DOS DADOS:
var turma = [ //ARRAY
    { //OBJETO
        nome: "Pedro",
        nota1: 7.0,
        nota2: 8.0,
        media: calcMedia,
    },

    { //OBJETO
        nome: "André",
        nota1: 8.0,
        nota2: 9.0,
        media: calcMedia,
    }
    
]

//TESTE:

var aluno = turma[0]; //Pedro
console.log(aluno);
console.log(aluno.media());

var aluno = turma[1]; //João
console.log(aluno);
console.log(aluno.media());
*/
//....................................................................................................

