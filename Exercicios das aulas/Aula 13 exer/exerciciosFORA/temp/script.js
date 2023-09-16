function verificar(){
    var tempC = document.getElementById("temp");
    var res = document.getElementById("res");
    var temptotal = document.getElementsByName("temp");

    if(temptotal[0].checked){
        var tempK = parseFloat(tempC.value) + 273;
        res.innerHTML = `A temperatura em kelvin é ${tempK} graus`;  
    }else if(temptotal[1].checked){
        var tempF = parseFloat(tempC.value)*1.8 + 32;
        res.innerHTML = `A temperatura em Fahrenheit é ${tempF} graus`;
    }
    

    
}