// Função para capturar e mostrar o conteúdo dos parágrafos
//function mostrarConteudoParagrafos() {
    // Função para mostrar o conteúdo dos parágrafos    
    // Captura todos os parágrafos do documento
//    let paragrafos = document.querySelectorAll('p');
    // Itera sobre os parágrafos e mostra o conteúdo deles no documento
//    let conteudo = '';
//    paragrafos.forEach(paragrafo => {
//        conteudo += paragrafo.textContent + '<br>';
//    });
    // Atualiza o conteúdo da div com id "paragrafos"
//    document.getElementById('paragrafos').innerHTML = conteudo;
//}

function mostrarConteudoParagrafos() {
    // Cria uma nova requisição HTTP
    var xhr = new XMLHttpRequest();
    // Define a função de callback
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Se a requisição foi bem sucedida, exibe o conteúdo dos parágrafos
                document.getElementById('conteudoParagrafos').innerHTML = xhr.responseText;
            } else {
                // Se houve um erro na requisição, exibe uma mensagem de erro
                console.error('Erro ao carregar o arquivo:', xhr.status);
            }
        }
    };
    // Abre a requisição para obter o conteúdo do arquivo paragrafos.html
    xhr.open('GET', 'paragrafos7.html', true);
    // Envia a requisição
    xhr.send();
}
// Função para alternar o texto do botão entre "OK" e "Click" ao ser clicado
function toggleButtonText() {
    let botao = document.getElementById('toggleButton');
    if (botao.textContent === "OK") {
        botao.textContent = "Click";
    } else {
        botao.textContent = "OK";
    }
}
// Chama a função para mostrar o conteúdo dos parágrafos quando a página carrega
window.onload = mostrarConteudoParagrafos;
