/*VERIFICADOR DE IDADE*/
//Formulário:
//Botão do Formulário:
function verificar(){
    /*alert('Funcionou!'); //Teste */

    var data = new Date(); //Data atual (automático - dados do sistema)
    var ano = data.getFullYear(); //Ano atual (automático - dados do sistema)

    var fano = document.getElementById("txtano"); //Ano do formulário
    var res = document.getElementById("res"); //Resposta do formulário
    //Ou 
    //var res = document.querySelector(`div#res`);

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else{
        /*window.alert("Tudo ok!"); //Teste */
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        /*res.innerHTML = `Idade calculada: ${idade}` //Teste */ 
        
        var genero = ""

        var img = document.createElement("img"); //
        img.setAttribute("id", "foto"); //

        if(fsex[0].checked){
            genero = "Homem";
            
            if(idade >= 0 && idade <10){
                //criança
            } else if(idade >= 10 && idade < 21){
                //jovem
            } else if(idade >= 21 && idade < 50){
                //Adulto
            } else if(idade >= 50){
                //idoso
            }

        } else if(fsex[1].checked){
            genero = "Mulher";

            if(idade >= 0 && idade <10){
                //criança
            } else if(idade >= 10 && idade < 21){
                //jovem
            } else if(idade >= 21 && idade < 50){
                //Adulto
            } else if(idade >= 50){
                //idoso
            }
        }  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        
    }
}