function adicionarFilme() {
    var urlImagem = document.getElementById("filme").value;
    var urlTrailer = document.querySelector("#trailer").value;
    var divListaFilmes = document.getElementById("listaFilmes");
    var jpg = ".jpg"
    var png = ".png"

    if (urlImagem.includes(jpg) || urlImagem.includes(png)) {
        divListaFilmes.innerHTML += `
            <a href="${urlTrailer}" target="_blank">
                <img src="${urlImagem}">
            </a>
        `;
    } else {
        alert("Digite uma opção valida")
    }

    document.getElementById("filme").value = "";
    document.querySelector("#trailer").value = "";
}