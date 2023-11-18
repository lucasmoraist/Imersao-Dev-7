// Aula 01

var nome = document.querySelector('#name')

var cotacaoDolar = 4.9;
var cotacaoEthereum = 10197.89;

var anosLuz = 9460000000000
var metros = 2

var valorParaConverter = 30;

function converteDolar() {
    var valorConvertido = valorParaConverter * cotacaoDolar;
    return alert(`Olá ${nome.value}. Esse é o valor convertido - R$ ${valorConvertido.toFixed(2)}`);
}

function converteEthereum() {
    var valorConvertido = valorParaConverter * cotacaoEthereum;
    alert(`Olá ${nome.value}. 1 Ethereum equivale a R$ ${cotacaoEthereum} e ETH ${valorParaConverter} equivale a R$ ${valorConvertido.toFixed(2)}`)
}

function converteAnosLuz() {
    var valorConvertido = metros * anosLuz;
    alert(`Olá ${nome.value}. Em metros 1 ano luz equivale a ${anosLuz}m e ${metros}m equivale a ${valorConvertido.toFixed(2)}m`)
}