function contar(){
    var valorInicio = document.getElementById("inicio");
    var i = parseInt(valorInicio.value);
    var valorFinal = document.getElementById("fim");
    var f = parseInt(valorFinal.value);
    var valorPasso = document.getElementById("passo");
    var p = parseInt(valorPasso.value);
    var res = document.getElementById("res");

    if(p<=0){
        window.alert("Passo invalido, continuando com passo 1");
        p=1;
    }

    if(valorInicio.value.length == 0 || valorFinal.value.length == 0 || valorPasso.value.length == 0){
        res.innerHTML = `Impossivel fazer a contagem, preencha todos os campos`;
    }
    else{
        res.innerHTML=`Contagem: <br>`;
        if(i < f){
            while(i <= f){
                res.innerHTML += `👉${i}`
                i+=p;
            }
        }
        if(i > f){
            while(i >= f){
                res.innerHTML += `👉${i}`
                i-=p;
            }
        }
    res.innerHTML += `👉🏁`;
    }
    
}