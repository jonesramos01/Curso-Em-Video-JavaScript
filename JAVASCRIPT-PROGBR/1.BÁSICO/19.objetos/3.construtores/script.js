/*OBJETOS: CONSTRUTORES:*/

var turma = [
    {
        nome: "Pedro",
        nota1: 7.0,
        nota2: 8.0,
        media: calcMedia,
    }
]

var calcMedia = function(){
    return(this.nota1 + this.nota2)/2;
}

console.log(turma)