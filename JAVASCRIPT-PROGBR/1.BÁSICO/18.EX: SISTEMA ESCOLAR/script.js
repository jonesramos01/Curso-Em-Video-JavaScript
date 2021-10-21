/*SISTEMA ESCOLAR*/
//NOME  
//NOTA1, NOTA 2, MÉDIA
//APROVADO, REPROVADO
//Obs: Em um sistema real todos esses dados estariam em um banco de dados, porém é possível simular essa atividade com Arrays.

//1º) Arrays simulando um banco de dados:

var nomes = ["Jones", "Derek", "Thais"];
var notasA = [7.0, 7.5, 5.0];
var notasB = [7.0, 7.5, 5.0];


//2º) Função para calcular a Média:

function media(n1, n2){
    return (n1 + n2)/2;
}

//4º) Função para os Aprovados ou Reprovados:

function aprovado(media){
    if(media >= 7){
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

//3º) Criação da lista:
//A estrutura de repetição faz todo içamento dos termos anteriores. Ou seja, media(n1, n2) = media(notasA[index], notasA[index]). Mas se quiser declarar n1 e n2 para melhor entendimento, também pode.

for(var index in nomes){ //Verificar outras formas de fazer

    //console.log(index) //Para ver o índice das posições
    //console.log(nomes[index]) //Para ver o índice dos nomes
    //console.log(notasA[index]) //Para ver o índice das notasA
    //console.log(notasB[index]) //Para ver o índice das notasB
    
    //Declarando n1 e n2:
    var n1 = notasA[index];
    var n2 = notasB[index];
    var m = media(n1, n2)

    console.log(nomes[index] + " - " + n1 + " - " + n2 + " - " + m + " - " + aprovado(m)); 
}




