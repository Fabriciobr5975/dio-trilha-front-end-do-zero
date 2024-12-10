function calculoIMC(peso, altura) {
    return (peso / (Math.pow(altura, 2)));
}

function classificacaoIMC(classificacao) {
    let mensagem;
   
    if (classificacao <= 18.5) {
        mensagem = "Classificação: Abaixo do peso"

    } else if (classificacao <= 25) {
        mensagem = "Classificação: Peso Normal"

    } else if (classificacao <= 30) {
        mensagem = "Classificação: Acima do Peso"

    } else if (classificacao <= 40) {
        mensagem =  "Classificação: Obeso"

    } else {
        mensagem = "Classificação: Obesidade Grave"
    }

    return mensagem;
}

(function () {
    let peso = 60;
    let altura = 1.80;

    let imc = calculoIMC(peso, altura);
    let mensagem = classificacaoIMC(imc);
    
    console.log(`IMC:${imc.toFixed(3)} Classificação: ${mensagem}`);
})();