// Aula 01

var nome = document.querySelector('#name')

var cotacaoDolar = 4.9;
var cotacaoEthereum = 10197.89;

var anosLuz = 9460000000000
var metros = 2

var valorParaConverter = 30;

export function converteDolar() {
    var valorConvertido = valorParaConverter * cotacaoDolar;
    alert(`Olá ${nome.value}. Esse é o valor convertido - R$ ${valorConvertido.toFixed(2)}`);
}

export function converteEthereum() {
    var valorConvertido = valorParaConverter * cotacaoEthereum;
    alert(`Olá ${nome.value}. 1 Ethereum equivale a R$ ${cotacaoEthereum} e ETH ${valorParaConverter} equivale a R$ ${valorConvertido.toFixed(2)}`)
}

export function converteAnosLuz() {
    var valorConvertido = metros * anosLuz;
    alert(`Olá ${nome.value}. Em metros 1 ano luz equivale a ${anosLuz}m e ${metros}m equivale a ${valorConvertido.toFixed(2)}m`)
}

// Aula 02

function numberRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var numeroSecreto = numberRandom(1, 1001);



for (var i = 1; i <= 10; i++) {
    var chute = prompt("Digite um número entre 1 e 1000: ")
    if (chute === numeroSecreto) {
        alert(`Parabéns você acerto. O número é ${numeroSecreto} \nQuantidade de chutes: ${i}`)
        break;
    } else if (chute > numeroSecreto) {
        alert(`Errou... o número é menor que ${chute} \nQuantidade de chutes: ${i}`)
    } else if (chute < numeroSecreto) {
        alert(`Errou... o número é maior que ${chute} \nQuantidade de chutes: ${i}`)
    }
}

alert(`Você perdeu todas tentativas - O número era ${numeroSecreto}`)

// Aula 03
var nomesFilmes = ["Jujutsu Kaisen", "Nartuo", "Tokyo Revengers"]

var listaFilmes = [
    'https://www.animeclick.it/immagini/anime/Jujutsu_Kaisen/cover/Jujutsu_Kaisen-cover.jpg',
    'https://pbs.twimg.com/media/F2smbR9WwAA40Ly.jpg',
    'https://m.media-amazon.com/images/M/MV5BYzk4NDc5MTAtZGQzOC00Y2MyLThkMGEtOGRkMzliOGNlYjkwXkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_.jpg'
]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write(`<img src=${listaFilmes[i]}>`)
    document.write(`<p>${nomesFilmes[i]}</p>`)
}