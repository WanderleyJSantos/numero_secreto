alert('Boas vindas ao jogo do número secreto.');
// console.log('Valor do chute:', chute);
let tentativaMax = 100;    
let numeroSecreto = parseInt(Math.random() * tentativaMax + 1);
let chute; 
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${tentativaMax}.`);
//    console.log('Resultado da comparação: ', chute == numeroSecreto);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }     
//        console.log('Valor do número secreto: ', numeroSecreto);      
    }
    tentativas++;
}

// if (tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
// }    else {
//     alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`);
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);