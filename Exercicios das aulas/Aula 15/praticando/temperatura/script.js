function operacao(){
    var valor1 = document.getElementById("valorRecebido1");
    var valor2 = document.getElementById("valorRecebido2");
    var res = document.getElementById("res");
    var opcoes = document.getElementsByName("option");

    if(valor1.value.length == 0 || valor2.value.length == 0){
        window.alert("Impossivel fazer operação, por favor digite um número");
    }else{
        var valRec1 = Number(valor1.value);
        var valRec2 = Number(valor2.value);
        var result = 0;
        var tab = 1;
        if(opcoes[0].checked){
            result = valRec1 + valRec2;
            res.innerHTML=(`Resultado: ${result}<br>`);
            for(tab = 1; tab <= 10; tab++){
                res.innerHTML += (`${result} x ${tab} = ${result * tab}<br>`); 
            }
            
        }else if(opcoes[1].checked){
            result = valRec1 - valRec2;
            res.innerHTML=(`Resultado: ${result}<br>`);
            while(tab <= 10){
                res.innerHTML += (`${result} x ${tab} = ${result*tab}<br>`);
                tab++;
            }

        }else if(opcoes[2].checked){
            result = valRec1 / valRec2;
            res.innerHTML=(`Resultado: ${result}<br>`);
            do{
                res.innerHTML += (`${result} x ${tab} = ${result*tab}<br>`);
                tab++;
            }while(tab <= 10);

        }else if(opcoes[3].checked){
            result = valRec1 * valRec2;
            res.innerHTML=(`Resultado: ${result}<br>`);
            for(tab = 1; tab <= 10; tab++){
                res.innerHTML += (`${result} x ${tab} = ${result*tab}<br>`);
            }

        }
        
    }
}