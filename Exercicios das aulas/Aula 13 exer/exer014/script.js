function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var horas = data.getHours();
    msg.innerHTML = `Agora são ${horas} horas`
    if(horas >= 0 && horas < 12){
        //bom dia
        img.src = "fotomanha.png"
        document.body.style.background = "#dff56a"
    } else if(horas >= 12 && horas < 19){
        //boa tarde
        img.src = "fototarde.png"
        document.body.style.background = "#f9a442"
    } else{
        //boa noite
        img.src = "fotonoite.png"
        document.body.style.background = "#252525"
    }
}