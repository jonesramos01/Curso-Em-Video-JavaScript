/*OBJETOS: PROPRIEDADES=VARIÁVEIS:*/
//OBJETOS SÃO PARECIDOS COM ARRAYS. A DIFERENÇA É QUE ARRAYS SE IDENTIFICA PELOS [] E, OS OBJETOS PELAS {}
//ARRAYS → [] "Em arrays se usa o índice"
//OBJETOS → {} "Em objetos se usa a chave"
//OBS: 
//EM OBJETOS, VARIÁVEIS SÃO CHAMADAS DE PROPRIEDADES!
//UMA PROPRIEDADE DE UM OBJETO PODE RECEBER QUALQUER TIPO DE VALOR. INCLUINDO ARRAYS E, ATÉ MESMO UM OUTRO OBJETO.
//····································································································
//EX:
//var objeto = {}
//var objeto = {chave: "valor", chave: "valor", ...}

//····································································································
//1ª FORMA DE CRIAR OBJETO:
//····································································································
//1º) Declaração dos dados e das variáveis:
/*
var aluno = {
            nome: "Pedro", 
            notaA: 7.0, 
            notaB: 8.0,
            notas: [7.0, 8.0]
        }

//2º) Acessar as propriedades(variáveis):


//EX:

//Acessando como Array:

console.log(aluno["nome"])
console.log(aluno["notaA"])
console.log(aluno["notaB"])

//Acessando como Objeto:

console.log(aluno.nome)
console.log(aluno.notaA)
console.log(aluno.notaB)

//Obs: Percebe-se que a técnica de ambas para acessar as propriedades/variáveis é praticamente igual. Produzem o mesmo resultado.


console.log(aluno); //Imprimindo o objeto inteiro:

console.log(aluno.notas[0]) //Imprime somente a notaA
console.log(aluno.notas[1]) //Imprime somente a notaB
//Ou:
console.log(aluno["notas"][0])
console.log(aluno["notas"][1])


//3º) Acrescentar/Inserir novas propriedados (mesmo já tendo algumas já criadas):

//1ª Forma de Inserir:
//Mais simples 

aluno.sobrenome = "Simão" //1ª Opção: "Mais limitada"
//Ou:
aluno["sobrenome"] = "Simão" //2ª Opção: "Mais possibilidades"


//2ª Forma de Inserir:
//Mais completa pois abre a possibilidade de mudar o valor da propriedade/variável mais facilmente.

var propSobrenome = "Sobrenome" //Ex: "Last Name"  
var propNascimento = "Nascimento"

aluno[propSobrenome] = "Simão"
aluno[propNascimento] = "24.08.2013"

//Testar:
console.log(aluno) 
*/

//····································································································
//2ª FORMA DE CRIAR OBJETO:
//····································································································
var aluno = new Object();

aluno.nome = "Pedro"
aluno.notaA = "7.0"
aluno.notaB = "8.0"
aluno.notas = [7.0, 8.0]

console.log(aluno) //Imprimindo todos os dados

//Acessando como Array:

console.log(aluno["nome"])
console.log(aluno["notaA"])
console.log(aluno["notaB"])
console.log(aluno["notas"])

//Acessando como Objeto:

console.log(aluno.nome)
console.log(aluno.notaA)
console.log(aluno.notaB)
console.log(aluno.notas)