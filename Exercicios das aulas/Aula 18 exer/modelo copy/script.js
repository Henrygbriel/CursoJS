   let numeroAdicionado = document.getElementById("numero");
   let res = document.getElementById("res");
   let lista = [];


   //FUNÇÃO PARA SABER SE O NUMERO ESTÁ ENTRE 1 E 100
function isNumero(n){
    if(Number(n) <= 100 && Number(n) >= 1){
        return true;
    }else{
        return false;
    }
} 


    //FUNÇÃO PARA SABER SE O NUMERO JÁ SE ENCOTRA NA LISTA
function inList(n){
    if(lista.indexOf(n) != -1){
        return true;
    }else{
        return false;
    }
}


    //FUNÇÃO DE ADICIONAR O NUMERO NA LISTA
function adicionar(){
    let select = document.getElementById("listaNumber");
    
    //IF ACIONADO QUANDO NAO EXISTE NENHUM NUMERO NO INPUT
    if(numeroAdicionado.value.length == 0){
        window.alert("ERRO! digite um numero"); 
    }
    //CHAMADA DA FUNÇÃO "ISNUMERO" QUE RETORNA DE ACORDO COM OQ ACONTECE NA FUNÇÃO
    else if(isNumero(numeroAdicionado.value) == false){
        window.alert("ERRO! digite um numero entre 1 e 100");
    }
    //CHAMADA DA FUNÇÃO "INLIST" QUE RETORNA DE ACORDO COM OQ ACONTECE NA FUNÇÃO
    else if(inList(numeroAdicionado.value) == true){
        window.alert("ERROOOOOO, VALOR JÁ ADICIONADO");
    }
    //IF QUE ADICIONA O NUMERO NA LISTA E MOSTRA NO SELECT DO HTML
    else if(isNumero(numeroAdicionado.value) == true && inList(numeroAdicionado.value) == false){
        let num = Number(numeroAdicionado.value);
        lista.push(num);
        let item = document.createElement("option");
        item.text = `Valor ${numeroAdicionado.value} adicionado`;
        select.appendChild(item);
        res.innerHTML = "";
        
    }

    //COD PARA APAGAR O VALOR ADICIONADO DO INPUT
    numeroAdicionado.value = '';

    //COD PARA O CURSOR NAO PARAR DE PISCAR NO INPUT
    numeroAdicionado.focus();
}


    //FUNÇÃO QUE ACIONA QUANDO CLICA NO BOTAO DE FINALIZAR
function finalizar(){
    let soma = 0;
    let maior = lista[0];
    let menor = lista[0];

    //COD QUE BUSCA O MAIOR E O MENOR VALOR NA LISTA
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