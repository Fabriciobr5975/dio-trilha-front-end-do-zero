class Pessoa {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    descrever() {
        console.log(`Nome: ${this.name} Idade: ${this.age}`);
    }

    teste(pessoa2) {
        if (this.age > pessoa2.getAge()) {
            console.log(`${this.name} é mais velho/a que ${pessoa2.getName()}`)

        } else if (this.age === pessoa2.getAge()) {
            console.log(`${pessoa1.getName()} têm a mesma idade que ${pessoa2.getName()}`)

        } else {
            console.log(`${this.name} é mais novo/a que ${pessoa2.getName()}`)
        }
    }
}


new Pessoa("Teste", 10).descrever();

let pessoa1 = new Pessoa("Fabrício", 6);
let pessoa2 = new Pessoa("Lucas", 6);
let pessoa3 = new Pessoa("Elizandra", 49);
let pessoa4 = new Pessoa("Juraci", 55);

console.log(pessoa1.getAge());

pessoa1.descrever();
pessoa2.descrever();
pessoa3.descrever();
pessoa4.descrever();

pessoa1.teste(pessoa2);

