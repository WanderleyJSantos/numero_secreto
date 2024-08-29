alert('Você está no desafio 4 de JavaScript.');
let nome = prompt('Por favor, digite o seu nome: ');
console.log(`Bem vindo ao desafio 4, ${nome}.`);
alert(`Olá, ${nome}.`);

let linguagem = prompt('Qual a linguagem de programação você mais gosta?');
console.log(`linguagem: ${linguagem}`);

let valor1 = 56;
let valor2 = 46;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

resultado = 0;
resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`);

let numero = prompt(`${nome}, por favor, digite um número:`);

if (numero > 0) {
    alert('O número digitado é positivo.');
} else 
    if (numero < 0) {
        alert('O número digitado é negativo.');
    } else {
        alert('O valor digitado é neutro, decimal ou não numérico.');
    }


let listaLoop = 1;

while (listaLoop <= 10) {
    console.log(listaLoop);
    listaLoop ++;
}


let nota = prompt(`${nome}, por favor, digite uma nota entre 1 e 10.`);

if (nota >= 7) {
    console.log(`A nota é: ${nota}. Aprovado.`);
} else {
    console.log(`A nota é: ${nota}. Reprovado.`);
}


let numeroAleatorio = Math.random();
console.log(`O número gerado aleatoriamente é: ${numeroAleatorio}`);

let numeroMinimo = 1;
let numeroMaximo = 10;

let numeroAleatorioAux =0;

numeroAleatorioAux = parseInt(numeroAleatorio * numeroMaximo) + numeroMinimo;
console.log(`O número gerado aleatoriamente, entre ${numeroMinimo} e ${numeroMaximo}, é: ${numeroAleatorioAux}`);

numeroMinimo = 1;
numeroMaximo = 1000;

numeroAleatorioAux = parseInt(numeroAleatorio * numeroMaximo) + numeroMinimo;
console.log(`O número gerado aleatoriamente, entre ${numeroMinimo} e ${numeroMaximo}, é: ${numeroAleatorioAux}`);