alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

while(chute != numeroSecreto){
    if(chute > numeroSecreto){
        alert(`O número secreto é menor do que ${chute}`);
    }else{
        alert(`O número secreto é maior que ${chute}`);
    }

    tentativas++;
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
}

alert(`Excelente! você descobriu o número secreto ${numeroSecreto} na sua ${tentativas}ª tentativa!`);