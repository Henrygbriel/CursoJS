let vetor = [1, 3, 4, 2, 0]; //declarando vetor
vetor[5]=8;//adicionando um elemento no vetor, mas indicando o indice
vetor.push(9);//adicionando um elemento no vetor, com o push o elemento já vai direto pro ultimo indice
vetor.sort();//ordem crescente
//console.log(`${vetor}`);//mostrando todos os valores do vetor
//console.log(`${vetor.length}`);//mostrando quantos elementos o vetor possui com o length
/*for(var i=0; i < vetor.length; i++){
    console.log(`Elemento ${i} = ${vetor[i]}`)
}*/

for (var i in vetor) {
    console.log(`Elemento [${i}] = ${vetor[i]}`)
}

let pos = vetor.indexOf(8);
if(pos==-1){
    console.log("O valor 8 nao foi encontrado");
}else{
    console.log(`O valor 8 está na posição ${pos}`);
}