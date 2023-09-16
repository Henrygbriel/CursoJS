let pessoa = {nome:'Henry', 
    idade:19, 
    sexo:'M', 
    peso:70, 
    x: function engordar(p=0){
        return this.peso += p; //o THIS é uma autoreferencia ao objeto
    },
    AAAA(){
        return this.idade + 1;
    },
    name: "gabriel"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos e engordou ${pessoa.peso} kg, ${pessoa.AAAA(5)}, ${pessoa.name}`);
console.log(pessoa ['AAAA']());
console.log(pessoa.x(10));

