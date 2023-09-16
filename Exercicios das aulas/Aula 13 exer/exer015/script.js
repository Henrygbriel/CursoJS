function verificar(){
    var data = new Date();//isso é pra pegar a data, horario, anos e meses.
    var ano = data.getFullYear()//comando pra pegar o ano atual, assim como as horas no ultimo exercicio, FULLYEAR É PARA PEGAR O ANO COM OS 4 DIGITOS EX: 2022
    var fano = document.getElementById("txtano");//pegando o ano que foi digitado no input
    var res = document.getElementById("res");//pegando o id da div que vai mostrar o conteudo na pagina web
    

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Erro");
    }else{
        var formularioSexo = document.getElementsByName("sexo")//no html os botoes de marcação "radio" tem os nomes iguais, onde o sexmas tá no indice 0 e o sexfem tá no indice 1
        var idade = ano - Number(fano.value);
        var genero = "" //variavel começando vazia, ou seja, começou como uma string vazia
        var img = document.createElement("img")//criando img dinamicamente pelo JAVASCRIPT
        img.setAttribute("id", "foto");//criando um id para o img que criamos logo acima
        //isso no HTML SERIA ASSIM ---> <img id:"foto">

        if(formularioSexo[0].checked){
            genero = "Homem";
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute("src", "criançagaroto.png")
            }else if(idade < 21){
                //jovem
                img.setAttribute("src", "homemadulto.png")
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute("src", "homemadulto.png")
            }else{
                img.setAttribute("src", "homemidoso.png")
                //idoso
            }
        }else if(formularioSexo[1].checked){
            genero = "Mulher";
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute("src", "criançamenina.png")
            }else if(idade < 21){
                //jovem
                img.setAttribute("src", "mulheradulta.png")
            }else if(idade >=21 && idade < 50){
                //adulta
                img.setAttribute("src", "mulheradulta.png")
            }else{
                //idosa
                img.setAttribute("src", "mulheridosa.png")
            }
        }
        res.style.textAlign = "center"//comando pra linha de baixo ficar centralizada
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)
    }
}
