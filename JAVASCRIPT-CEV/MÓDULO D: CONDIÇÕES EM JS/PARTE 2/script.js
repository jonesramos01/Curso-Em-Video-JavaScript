/*MÓDULO D: CONDICIONAIS - PARTE 2*/
//1.CONDICIONAIS SIMPLES
//2.CONDICIONAIS COMPOSTAS
//3.CONDICIONAIS ANINHADAS
//4.CONDICIONAIS MÚLTIPLAS
//····································································································
//::::3.CONDICIONAIS ANINHADAS:::::
//····································································································
//EX TESTE NO NODE.JS: "OBS: EXTENSÃO NODE EXEC INSTALADA. HABILITA O F8 PARA EXECUTAR O NODE.JS."
//····································································································

//EX: VOTO
//····································································································
/*
var idade = 22; //Ir testando outros valores
if (idade < 18){
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}
*/

/*
var idade = 16; //Ir testando outros valores
if(idade < 16){
    console.log("Não pode votar");
} else {
    console.log("Pode votar");
}
*/

/*
var idade = 22; //Ir testando outros valores
console.log(`Você tem ${idade} anos`);
if(idade < 16){
    console.log("Não pode votar");
} else if(idade >= 16 && idade < 18 || idade > 65){
        console.log("Voto opcional");
    } else if(idade >= 18){
        console.log("Voto obrigatório");
    }
*/    
//OU
/*
var idade = 17; //Ir testando outros valores
console.log(`Você tem ${idade} anos`)
if(idade < 16){
    console.log("Não pode votar");
} else if(idade < 18 || idade > 65){
        console.log("Voto opcional");
    } else{
        console.log("Voto obrigatório");
    }
*/
//····································································································
//EX BOM DIA, BOA TARDE, BOA NOITE, BOA MADRUGADA
//····································································································
/*
var hora = 24;
console.log(`São ${hora} hora(s)`);
if(hora >= 6 && hora < 12){
    console.log(`Bom dia!`);
} else if (hora >= 12 && hora < 18){
    console.log(`Boa tarde!`);
} else if(hora >= 18 && hora < 24){
    console.log(`Boa noite!`);
} else if( hora == 24 || hora >= 00 && hora < 6){
    console.log(`Boa madrugada!`);
}
*/
//OU
//DICA: PEGAR HORA ATUAL DO SISTEMA; CASO O PROGRAMA ESTIVER RODANDO EM ALGUM SISTEMA, CLIENTE, SERVIDOR, ...
/*
var agora = new Date(); 
var hora = agora.getHours()
console.log(`São ${hora} hora(s)`);
if(hora >= 6 && hora < 12){
    console.log(`Bom dia!`);
} else if (hora >= 12 && hora < 18){
    console.log(`Boa tarde!`);
} else if(hora >= 18 && hora < 24){
    console.log(`Boa noite!`);
} else if(hora == 24 || hora >= 00 && hora < 6){
    console.log(`Boa madrugada!`);
}
*/

//····································································································
//::::4.CONDICIONAIS MÚLTIPLAS::::
//····································································································
