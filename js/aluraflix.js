// Aula 03
var nomesFilmes = ["Jujutsu Kaisen", "Nartuo", "Tokyo Revengers"]

var listaFilmes = [
    'https://www.animeclick.it/immagini/anime/Jujutsu_Kaisen/cover/Jujutsu_Kaisen-cover.jpg',
    'https://pbs.twimg.com/media/F2smbR9WwAA40Ly.jpg',
    'https://m.media-amazon.com/images/M/MV5BYzk4NDc5MTAtZGQzOC00Y2MyLThkMGEtOGRkMzliOGNlYjkwXkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_.jpg'
]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write(`
        <div id="lista-filmes">
            <div id="card-filme">
                <img src=${listaFilmes[i]}>
                <p>${nomesFilmes[i]}</p>
            </div>
        <div>
    `)
}