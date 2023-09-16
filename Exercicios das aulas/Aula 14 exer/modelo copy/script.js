function gerar(){
    var numero = document.getElementById("numero");
    var tabuada = document.getElementById("seltab");
    var cont = 1;


    if(numero.value.length == 0){
        window.alert(`Por favor digite um numero`);
    }else{
        var num = parseInt(numero.value);
        tabuada.innerHTML=``;
        while(cont <= 10){
            var item = document.createElement("option");
            var mult = cont * num; 
            item.text += `${num} x ${cont} = ${mult}`;
           
            tabuada.appendChild(item);
            cont++
        }
    }
    
}