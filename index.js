var listaFilmes = []

function adicionarFilme() {
    var urlImagem = document.getElementById("filme").value;
    var urlTrailer = document.querySelector("#trailer").value;
    var divListaFilmes = document.getElementById("listaFilmes");
   
    var jpg = ".jpg"
    var png = ".png"

    if (urlImagem.includes(jpg) || urlImagem.includes(png)) {
        listaFilmes.push({ imagem: urlImagem, trailer: urlTrailer });

        divListaFilmes.innerHTML = "";

        for (var i = 0; i < listaFilmes.length; i++) {
            divListaFilmes.innerHTML += `
                <a href="${listaFilmes[i].trailer}" target="_blank">
                    <img src="${listaFilmes[i].imagem}">
                </a>
            `;
        } 
    }else {
        alert("Digite uma opção valida")
    }

    document.getElementById("filme").value = "";
    document.querySelector("#trailer").value = "";
}