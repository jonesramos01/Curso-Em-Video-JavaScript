function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora = 16;

    msg.innerHTML = `Agora são: ${hora} hora(s)`;

    if(hora >= 00 && hora < 12){
        //BOM DIA
        img.src = 'assets/bom-dia.jpg';
        window.document.body.style.background = "#4682B4"
        
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'assets/boa-tarde.jpg';
        window.document.body.style.background = "#696969"
       
    } else if(hora >= 18 && hora < 24 || hora < 00){
        //BOA NOITE
        img.src = 'assets/boa-noite.jpg';
        window.document.body.style.background = "#00008B	"
        
    }
}
