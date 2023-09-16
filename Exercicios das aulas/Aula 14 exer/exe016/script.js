function contar(){
    var ini = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var pass = document.getElementById("passo");
    var res = document.getElementById("res");

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = `Impossivel contar!!`
        //window.alert("ERRO falta dados");
    }else{
        res.innerHTML = `Contando: <br>`
        var valorIni = parseInt(ini.value);
        var valorFim = parseInt(fim.value);
        var valorPasso = parseInt(pass.value);
        if(valorPasso <= 0){
            window.alert("Passo invalido! Considerando passo 1");
            valorPasso = 1;
        }
        // CONTAGEM CRESCENTE
        if(valorIni < valorFim){
            while(valorIni <= valorFim){
                
                res.innerHTML += `👉 ${valorIni}`;
            
                valorIni+=valorPasso;
            }
        }
        //CONTAGEM REGRESSIVA
        else{
            while(valorIni >= valorFim){
                
                res.innerHTML += `👉 ${valorIni}`

                valorIni -= valorPasso;
            }
        }
        res.innerHTML += `👉🏁`;
        
    }

    
}
