/*
// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt('Qual é o dia da semana?');

if (diaSemana == 'Sábado') {
    alert('Bom fim de semana');
} else 
    if (diaSemana == 'Domingo'){
    alert('Bom fim de semana!');
} else 
    alert('Boa semana!');
*/

/*
// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite qualquer número: ');

if (numero > 0) {
    alert(`O número digitado "${numero}" é positivo.`);
} else if (numero < 0) {
    alert(`O número digitado "${numero}" é negativo.`);
} else if (numero = 0) {
    alert(`O número digitado "${numero}" é neutro.`);
} else {
    alert(`O número digitado "${numero}" é decimal ou não-numérico.`);
}
*/

/*
// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let valor = prompt('Digite um número qualquer:');
let pontuacao = 100;


if (valor >= pontuacao) {
    alert('Parabéns, você ganhou.');
} else {
    alert('Tente novamente para ganhar.');
}
*/

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Digite o seu nome: ');
let saldoInicial = prompt(`Bom dia ${nome}. Por favor, digite um valor monetário para abertura de conta.`);

alert(`${nome}, o valor inicial a ser depositado é: R$${saldoInicial},00.`);
