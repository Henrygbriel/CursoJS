function gerar(){
    var num = document.getElementById("num");
    var res = document.getElementById("res");
    var tabuada = document.getElementById("seltab");
    var contador = 1;

    if(num.value.length == 0){
        window.alert(`Impossivel gerar tabuada, por favor digite um numero`);
    }else{
        var numero = parseInt(num.value);
        tabuada.innerHTML=``;
        while(contador <= 10){
            var item = document.createElement("option"); //criação de um elemento de forma dinamica
            var mult = contador * numero;
            item.text += `${numero} x ${contador} = ${mult}`;
            item.value = `tab${contador}`; //isso não faz tanto sentido usar no JS
            tabuada.appendChild(item)
            contador++
        }
    }
}
