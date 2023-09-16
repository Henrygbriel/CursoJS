function converter(){
    var valor = document.getElementById("valorDigitado");
    var dolar = parseFloat(valor.value);
    var moedaSelecionada = document.getElementsByName("moeda");

    if(moedaSelecionada[0].checked){
        var real = dolar * 5.20;
        res.innerHTML = `R$${real.toFixed(2)}`;
    }else if(moedaSelecionada[1].checked){
        var euro = dolar * 1.01;
        res.innerHTML = `€${euro.toFixed(2)}`
    }else if(moedaSelecionada[2].checked){
        var bitcoin = dolar/20000;
        res.innerHTML = `₿${bitcoin}`
    }
}