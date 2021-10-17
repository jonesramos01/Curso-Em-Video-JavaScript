/*MÓDULO E: REPETIÇÃO EM JS*/
/*EX TABUADA:*/
function tabuada(){
    var num = document.getElementById("txtn");
    var tab = document.getElementById("txtt");
    var res = document.getElementById("res");

    if(num.value.length == 0){ //"vazio"
        window.alert("[ERRO] Por favor, digite um número!");
    } else {
        var n = Number(num.value);
        var c = 1 //Contador
        tab.innerHTML = "" //Para limpar a área de select cada vez que entrar um novo número


        while(c <= 10){
            var item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            //item.value = `tab${c}`; //Não faz tanto sentido para JS, mas para outras linguagens sim
            tab.appendChild(item);
            c++
        }
    } 
}