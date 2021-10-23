/*OBJETOS: CONSTRUTORES:*/
//UM ARRAY TAMBÉM É UM OBJETO
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
    }
]

//TESTE:
var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());



