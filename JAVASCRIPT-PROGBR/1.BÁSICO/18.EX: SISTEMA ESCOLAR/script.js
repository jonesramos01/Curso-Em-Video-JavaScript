/*SISTEMA ESCOLAR*/
//NOME  
//NOTA1, NOTA 2, MÉDIA
//APROVADO, REPROVADO
//Obs: Em um sistema real todos esses dados estariam em um banco de dados, porém é possível simular essa atividade com Arrays.

//1º Arrays simulando um banco de dados:
var nomes = ["Jones", "Derek", "Thais"];
var notasA = [7.0, 7.5, 8.0];
var notasB = [7.0, 7.5, 8.0];

//2º Função para calcular a média:
function media(n1, n2){
    return (n1 + n2)/2
}

//3º Criação da lista:
for(var index in nomes){
    //console.log(index) //Para ver o índice das posições
    //console.log(nomes[index]) //Para ver o índice dos nomes
    //console.log(notasA[index]) //Para ver o índice das notasA
    //console.log(notasB[index]) //Para ver o índice das notasB
    console.log(nomes[index] + "-" + notasA[index] + "-" + notasB[index])
}




