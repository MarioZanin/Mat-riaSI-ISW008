function escreverConteudoElementosClasse1() {
    // Seleciona todos os elementos <li> com a classe "classe1"
    let elementosClasse1 = document.querySelectorAll('li.classe1');

    // Mensagem inicial
    let mensagem = "Os elementos li que possuem a classe 'classe1' são: ";

    // Verifica se foram encontrados elementos
    if (elementosClasse1.length > 0) {
        // Itera sobre os elementos encontrados e adiciona seus conteúdos à mensagem
        elementosClasse1.forEach(function(elemento, index) {
            // Adiciona o conteúdo do elemento à mensagem
            mensagem += elemento.innerHTML;

            // Adiciona uma vírgula e um espaço após o conteúdo, se não for o último elemento
            if (index < elementosClasse1.length - 1) {
                mensagem += ", ";
            }
        });
    } else {
        // Se nenhum elemento com a classe "classe1" foi encontrado, atualiza a mensagem
        mensagem = "Nenhum elemento com a classe 'classe1' encontrado.";
    }

    // Escreve a mensagem no documento
    document.write(mensagem);
}

// Chama a função para escrever o conteúdo dos elementos com a classe "classe1" no documento
escreverConteudoElementosClasse1();
