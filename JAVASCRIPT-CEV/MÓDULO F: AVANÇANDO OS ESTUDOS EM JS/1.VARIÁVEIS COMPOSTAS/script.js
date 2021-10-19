/*MÓDULO F: AVANÇANDO OS ESTUDOS EM JS:*/
/*1.VARIÁVEIS COMPOSTAS:*/
/*2.FUNÇÕES*/
/*EX:*/
/*4.PRÓXIMOS PASSOS*/
//······································································································
/*1.VARIÁVEIS COMPOSTAS:*/

/*
var a = [a0, a1, a2, ... ]
        
a = Array/Vetor
0, 1, 2, ... = Índice/Chave
[a0, a1, a2, ... ] = Elemento
a0 = Conteúdo/Valor 

//EX:
var a = [1, 2, 3, 4]
a[4] = 5 //Adiciona o valor 5 a posição 4 no vetor. 
a.push(y) //Adiciona o valor 5 a última posição, seja ela qual for.
a.length //Para saber o comprimento do Array. "Quantidade de elementos/posições". Obs: No JS é sem ()
num.sort() //Ordena os elementos em ordem crescente (caso realmente precise).
*/

/*
var num = []
//console.log(num) //Ou
console.log(`Nosso vetor é o ${num}`)
*/

/*
//EX1:
var num = [1, 3, 5, 7]
console.log(num) //Mostra o array/vetor.
console.log(num.length) //Mostra o comprimento do array/vetor. "Neste possui 4 posições/elementos".
num[4] = 9 //Adiciona o valor 9 na posição 4 do array/vetor.
console.log(num)
console.log(num.length)
*/

/*
//EX2:
var num = [7, 5, 3, 1]
console.log(num) //Mostra o array/vetor.
console.log(num.length) //Mostra o comprimento do array/vetor.
num[4] = 9 //Adiciona o valor 9 a posição 4 do array/vetor.*****
console.log(num)
num.sort() //Organiza os elementos em ordem crescente.*****
console.log(num)
console.log(num.length)
*/

/*
//EX3:
var num = [1, 3, 5, 7]
console.log(num) //Mostra o array/vetor.
console.log(num.length) //Mostra o comprimento do array/vetor.
num.push(9) //Adiciona o valor 9 a última posição no array/elemento.
console.log(num)
console.log(num.length)
*/

/*
//EX4:
var num = [9, 1, 7, 3, 5]
console.log(num) 
console.log(num.length)
num.push(11)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
console.log(num[1])
*/

/*
//EX5: IMPRIMIR AS POSIÇÕES MANUALMENTE

//1)
var num = [1,2,3,4,5]
console.log(num)

//2)
var num = [1,2,3,4,5]
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/

/*
//EX6: IMPRIMIR AS POSIÇÕES AUTOMATICAMENTE

//1)
var num = [1,2,3,4,5,6,7]
for(var pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//2)
var num = [1,2,3,4,5,6,7]
for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


//3) Opção for mais atual (a grosso modo, esta opção do for só serve para arrays e objetos)
var num = [1,2,3,4,5,6,7]
for(var pos in num){
    console.log(num[pos])
}
 
//Ou
var num = [1,2,3,4,5,6,7]
for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

