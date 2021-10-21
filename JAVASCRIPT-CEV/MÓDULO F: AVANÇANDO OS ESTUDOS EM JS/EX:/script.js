/*EX: ANALISADOR DE NÚMEROS*/
/*Obs: 
· Criar funções para os botões
· Criar variáveis para as id's
*/
let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = [] //Array declarado para análise de dados

//2º Adição dos elementos:

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


//1º
function adicionar(){
    if(num >=1 && num <= 100){
        window.alert("Tudo ok!")
    } else {
        window.alert("Valor inválido ou já encontrado na lista!")
    }
}

function finalizar(){

}