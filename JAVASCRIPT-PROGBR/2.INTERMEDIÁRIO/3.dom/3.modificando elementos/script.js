//····································································································
/*ACESSANDO ELEMENTOS HTML COM JS:*/
//····································································································
/*
//1) ÁRVORE DOM:

document

document.head
document.head.title

document.body

//2) MÉTODO PARA ACESSAR QUALQUER ELEMENTO:

//ACESSAR ELEMENTO PELO ID:
document.getElementById()

//ACESSAR ELEMENTO PELA CLASSE (RETORNA UM ARRAY COM TODOS OS ELEMENTOS DA CLASSE):
document.getElementsByClassName()

//ACESSAR ELEMENTO PELA TAG (RETORNA UM ARRAY COM TODOS OS ELEMENTOS DA TAG):
document.getElementsByTagName

//ACESSAR ELEMENTO PELO SELETOR:
document.querySelector()

//ÁREA PARA TESTES DOM:

//ID:
//Apenas mostra o conteúdo
document.getElementById("p1"); 

//Ou:

//Além de mostrar o conteúdo, o mesmo é anexado à uma variável:
let p1 = document.getElementById("p1"); //Em seguida:
console.log(p1);

//CLASS:

//Apenas mostra o conteúdo
document.getElementsByClassName("paragrafo"); 

//Ou:

//Além de mostrar o conteúdo, o mesmo é anexado à uma variável:
let paragrafo = document.getElementsByClassName("paragrafo"); //Em seguida:
console.log(paragrafo);
*/

//TAG:

//Apenas mostra o conteúdo:
//document.getElementsByTagName("h1") //Apenas mostra o conteúdo

//Ou:

//Além de mostrar o conteúdo, o mesmo é anexado à uma variável:
//let h1 = document.getElementsByTagName("h1"); //Em seguida:
//console.log(h1);

//OBS:
//console.clear() + Atualizar o navegador //Para limpar o console e apagar a memória

/*··································································································*/
/*MODIFICANDO ELEMENTOS:*/
/*··································································································*/

//MANEIRAS DE MODIFICAR ELEMENTOS:

//1) innerHTML: "Modificam conteúdo, Faz alterações HTML, Mostra alteração no navegador"
//xpto.innerHTML

//2) innerText: "Modificam conteúdo, Não faz alterações HTML, Mostra no console o conteúdo que aparece no navegador"
//xpto.innerText

//3) textContent: "Modificam conteúdo, Não faz alterações HTML, Mostra no console o conteúdo que aparece no HTML"
//xpto.textContent

//ÁREA DE TESTES:

//Altera o conteúdo do parágrafo de id:"p1":
//let p = document.getElementById("p1")
//console.log(p)

//p.innerHTML = "Novo conteúdo 1" 
//Ou:
//p.innerText = "Novo conteúdo 2"
//Ou: 
//p.textContent = "Novo conteúdo 3"

//
//p.textContent = "<h2>Tem um h2 dentro de p</h2>"

/*··································································································*/
/*MODIFICANDO ATRIBUTOS:*/
/*··································································································*/

//MODIFICANDO CLASSE:

//Ex: 

//p.className = ""

//p.style = "color: blue"

