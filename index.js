var lista = []
var elementoTabela = document.getElementById("tabelaJogadores")

function addPlayer() {

    var name = document.getElementById("namePlayer").value;

    const obj = {
        nome: name,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    }

    lista.push(obj)
    console.log(lista);

    elementoTabela.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        elementoTabela.innerHTML += `
            <tr>
                <td>${lista[i].nome}</td>
                <td>${lista[i].vitoria}</td>
                <td>${lista[i].empate}</td>
                <td>${lista[i].derrota}</td>
                <td>${lista[i].pontos}</td>
                <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            </tr>
        `
    }
}

function showMe(){
    var tabelaHTML = "";  // Cria uma string vazia para acumular o HTML da tabela

    for (var i = 0; i < lista.length; i++) {
        tabelaHTML += `
            <tr>
                <td>${lista[i].nome}</td>
                <td>${lista[i].vitoria}</td>
                <td>${lista[i].empate}</td>
                <td>${lista[i].derrota}</td>
                <td>${lista[i].pontos}</td>
                <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            </tr>
        `;
    }

    // Atribui a string HTML à tabela uma vez, após o loop
    elementoTabela.innerHTML = tabelaHTML;
}

function adicionarVitoria(i) {
    var jogador = lista[i]
    jogador.vitoria++;
    jogador.pontos += 3;
    showMe();
}

function adicionarEmpate(i) {
    var jogador = lista[i];
    jogador.empate++;
    jogador.pontos++;
    showMe();
}

function adicionarDerrota(i) {
    var jogador = lista[i]
    jogador.derrota++;
    showMe();
}
