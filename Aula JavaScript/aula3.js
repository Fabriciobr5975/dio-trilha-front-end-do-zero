const numerosPares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

class Carro {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }

    imprimirCarro(){
        console.log(`O carro ${this.nome} tem a cor ${this.cor}`)
    }
}

let carro = new Carro("Peugeot 206", "Cinza");

carro.imprimirCarro();
