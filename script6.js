// 1. Uma função que capture todos os parágrafos de um documento HTML e mostre o conteúdo deles no próprio documento.
function mostrarConteudoDosParagrafos() {
    let paragrafos = document.getElementsByTagName('p');

    for (let i = 0; i < paragrafos.length; i++) {
        document.write(paragrafos[i].textContent + "<br>");
    }
}

// 2. Uma função que deixe em cor azul a fonte de todos os parágrafos de um documento.
function alterarCorFonteParagrafos() {
    let paragrafos = document.getElementsByTagName('p');

    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = 'blue';
    }
}

// Chamada das funções
mostrarConteudoDosParagrafos();
alterarCorFonteParagrafos();
