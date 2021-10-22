/*OBJETOS: MÉTODOS=FUNÇÕES:*/
//
//
//
//
//
//····································································································
/*

//1ª FORMA:

var aluno = {
    nome: "Pedro",
    notas: [7.0, 8.0],

    media: calcMedia

}

function calcMedia(n1, n2){ //FUNÇÃO PARA CALCULAR A MÉDIA
    return (n1 + n2)/2;
}

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.notas)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))
*/

//2ª FORMA: USANDO "THIS"

var aluno = {
    nome: "Pedro",
    notas: [7.0, 8.0],

    media: calcMedia

}

function calcMedia(){ //FUNÇÃO PARA CALCULAR A MÉDIA
    return (this.notas[0] + this.notas[1])/2; //O THIS IDENTIFICA UM ELEMENTO EM EXPECÍFICO
}

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.notas)
console.log(aluno.media())
