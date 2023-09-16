
    let numeroInt = 50
    let lista = [10, 2, 3, 7, 5];
    let soma=0;
    if(numeroInt > 100 || numeroInt < 1){
        console.log("Erro");
    }else if(numeroInt >= 1 && numeroInt <=100){
        lista.push(numeroInt);
        lista.sort();
        console.log(lista);
        
        for(let i = 0; i < lista.length; i++){

            soma += lista[i];
            
        }
        console.log(soma);
    }