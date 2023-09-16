function calcular(){

    var n1 = document.getElementById("numero");
    var n2 = document.getElementById("numero2");
    var res = document.getElementById("res");
    var calc = document.getElementsByName("calc");

    if(calc[0].checked){
        var num = parseFloat(n1.value) + parseFloat(n2.value);
        res.innerHTML = `${num}`;
    }else if(calc[1].checked){
        var num = parseFloat(n1.value) - parseFloat(n2.value);
        res.innerHTML = `${num}`;
    }else if(calc[2].checked){
        var num = parseFloat(n1.value) / parseFloat(n2.value);
        res.innerHTML = `${num}`;
    }else if(calc[3].checked){
        var num = parseFloat(n1.value) * parseFloat(n2.value);
        res.innerHTML = `${num}`
    }
}