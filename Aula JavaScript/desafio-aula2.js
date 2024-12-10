function escreverMeuNome(nome) {
    return `Meu nome é ${nome}`;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escreverMeuNome("Fabrício") + " sou menor de idade");
    } else {
        console.log(escreverMeuNome("Fabrício") + " sou maior de idade");
    }
}

function calcularPrecoFinalProduto(preco, formaPagamento, quantidadeParcelas) {
    let precoFinal = 0;

    if (formaPagamento === "PIX" || formaPagamento === "Dinheiro") {
        precoFinal = aplicarDesconto(preco, 15);

    } else if (formaPagamento === "Debito" && quantidadeParcelas === 1) {
        precoFinal = aplicarDesconto(preco, 10);

    } else if (formaPagamento === "Debito" && quantidadeParcelas === 2) {
        precoFinal = preco;

    } else {
        precoFinal = aplicaJuros(preco, 10);
    }

    return precoFinal;
}

function aplicarDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100));
}

function aplicaJuros(preco, juros) {
    return preco + (preco * (juros / 100));
}

let formaPagamento = "PIX"
let parcelas = 1
let precoFinal = calcularPrecoFinalProduto(1000, formaPagamento, parcelas);

console.log(`O Produto usando a forma de pagamento ${formaPagamento} ficou com o preço final de R$ ${precoFinal.toFixed(2)}`);