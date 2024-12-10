function desafio() {

    let precoEtanol = Number(5.79);
    let precoGasolina = Number(6.66);
    let tipoCombustivel = "Gasolina"

    let gastoComsutivel = Number(10);
    let distanciaPercorrida = Number(100);
    let precoTotalViagem = Number(0);


    if (tipoCombustivel === "Gasolina") {
        precoTotalViagem = (distanciaPercorrida / gastoComsutivel) * precoGasolina;

    } else {
        precoTotalViagem = (distanciaPercorrida / gastoComsutivel) * precoEtanol;
    }

    console.log(`O preço total da viagem foi de ${precoTotalViagem.toFixed(2)}`);
}

exercicio3();

function calculoMedia() {
    let nota1 = 6;
    let nota2 = 7;
    let nota3 = 9;
    let media = ((nota1 + nota2 + nota3) / 3);
    let mensagem;

    if (media < 5) {
        mensagem = "Reprovado";
    } else if (media <= 7) {
        mensagem = "Recuperação";
    } else {
        mensagem = "Passou de semestre";
    }

    console.log(mensagem);
}

function calculoIMC() {
    let peso = 60;
    let altura = 1.80
    let imc = (peso / (Math.pow(altura, 2)));
    let mensagem;

    if (imc <= 18.5) {
        mensagem = `IMC:${imc.toFixed(3)} Classificação: Abaixo do peso`
    } else if (imc <= 25) {
        mensagem = `IMC:${imc.toFixed(3)} Classificação: Peso Normal`
    } else if (imc <= 30) {
        mensagem = `IMC:${imc.toFixed(3)} Classificação: Acima do Peso`
    } else if (imc <= 40) {
        mensagem = `IMC:${imc.toFixed(3)} Classificação: Obeso`
    } else {
        mensagem = `IMC:${imc.toFixed(3)} Classificação: Obesidade Grave`
    }

    console.log(mensagem);
}

function exercicio3() {
    let precoNormal = 1000;
    let formaPagamento = "Debito";
    let quantidadeParcelas = 3;
    let descontoAVistaDebito = 10;
    let descontoPixDinherio = 15;
    let precoFinal;
    let juros = 10;

    if (formaPagamento === "PIX" || formaPagamento === "Dinheiro") {
        precoFinal = precoNormal - (precoNormal * (descontoPixDinherio / 100));

    } else if (formaPagamento === "Debito" && quantidadeParcelas === 1) {
        precoFinal = precoNormal - (precoNormal * (descontoAVistaDebito / 100));

    } else if (formaPagamento === "Debito" && quantidadeParcelas === 2) {
        precoFinal = precoNormal;

    } else {
        precoFinal = precoNormal + (precoNormal * (juros / 100));
    }

    console.log(`O Produto usando a forma de pagamento ${formaPagamento} ficou com o preço final de R$ ${precoFinal}`)
}