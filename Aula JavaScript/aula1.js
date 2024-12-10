const numero = Number(3);
const eNumeroPar = (numero % 2) === 0;

if(eNumeroPar){
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} não é par`);
}

switch(eNumeroPar){
    case true:
        console.log(`O número ${numero} é par`);
    break;

    default:
        console.log(`O número ${numero} não é par`);
    break;

}