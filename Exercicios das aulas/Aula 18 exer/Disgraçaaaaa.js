let numeroAdicionado = document.getElementById("numero");
let res = document.getElementById("res");
let lista = [];
function isNumero(n){
    if(Number(n) <= 100 && Number(n) >= 1){
         return true;
     }else{
         return false;
    }
}
function inList(n){
    if(lista.indexOf(n) != -1){
      return true;
    }else{
         return false;
    }
}
function adicionar(){
    let select = document.getElementById("listaNumber");
    if(numeroAdicionado.value.length == 0){
        window.alert("ERRO! digite um numero"); 
     }else if(isNumero(numeroAdicionado.value) == false){
        window.alert("ERRO! digite um numero entre 1 e 100");
    }else if(inList(numeroAdicionado.value) == true){
       window.alert("ERROOOOOO, VALOR JÁ ADICIONADO");
    }
    else if(isNumero(numeroAdicionado.value) == true && inList(numeroAdicionado.value) == false){
         lista.push(numeroAdicionado.value);
        let item = document.createElement("option");
        item.text = `Valor ${numeroAdicionado.value} adicionado`;
        select.appendChild(item);
         res.innerHTML = "";
    }
    numeroAdicionado.value = '';
    numeroAdicionado.focus();
}
function finalizar(){
    let soma = 0;
    let maior = lista[0];
    let menor = lista[0];
    for(let posição in lista){
        soma += lista[posição];
        if(lista[posição] > maior){
          maior = lista[posição];
        }else if(lista[posição] < menor){
           menor = lista[posição];
        }
 }
    res.innerHTML = `<p>Ao todo, temos ${lista.length} numeros cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média de todos os valores digitados é ${soma/lista.length}</p>`;
}