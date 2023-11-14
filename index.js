function numberRandom(min, max){
    return parseInt(Math.random() * (max - min) + min);
}

var numeroSecreto = numberRandom(1, 1001);

for(var i = 1; i<=10; i++){
    var chute = prompt("Digite um número entre 1 e 1000: ")
    if(chute == numeroSecreto){
        alert(`Parabéns você acerto. O número é ${numeroSecreto} \nQuantidade de chutes: ${i}`)
    }else if(chute > numeroSecreto){
        alert(`Errou... o número é menor que ${chute} \nQuantidade de chutes: ${i}`)
    }else if(chute < numeroSecreto){
        alert(`Errou... o número é maior que ${chute} \nQuantidade de chutes: ${i}`)
    } 
}

alert(`Você perdeu todas tentativas - O número era ${numeroSecreto}`)