/*OBJETOS: PROPRIEDADES:*/
//OBJETOS SÃO PARECIDOS COM ARRAYS. A DIFERENÇA É QUE ARRAYS SE IDENTIFICA PELOS [] E, OS OBJETOS PELAS {}
//ARRAYS → []
//OBJETOS → {}
//OBS: EM OBJETOS, VARIÁVEIS SÃO CHAMADAS DE PROPRIEDADES!
//····································································································
//EX:
//var objeto = {}
//var objeto = {chave: "valor", chave: "valor", ...}

//1º) Declaração dos dados e das variáveis:

var aluno = {nome: "Pedro", notaA: 7.0, notaB: 7.0}

//2º) Acessar as propriedades(variáveis):

//Acessando como Array:

console.log(aluno["nome"])
console.log(aluno["notaA"])
console.log(aluno["notaB"])

//Acessando como Objeto:

console.log(aluno.nome)
console.log(aluno.notaA)
console.log(aluno.notaB)

//Obs: Percebe-se que a técnica de ambas é praticamente igual. Produzem o mesmo resultado.



