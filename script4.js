function ajustarFonte() {
    // Obtém os elementos de parágrafo
    let paragrafo1 = document.getElementById('a1');
    let paragrafo2 = document.getElementById('a2');

    // Verifica se os parágrafos foram encontrados
    if (paragrafo1 && paragrafo2) {
        // Compara o comprimento dos textos
        let len1 = paragrafo1.textContent.length;
        let len2 = paragrafo2.textContent.length;

        // Define a cor da fonte com base no comprimento dos textos
        if (len1 > len2) {
            paragrafo1.style.color = 'green'; // Parágrafo com mais letras fica verde
            paragrafo2.style.color = 'red'; // Parágrafo com menos letras fica vermelho
        } else {
            paragrafo1.style.color = 'red'; // Parágrafo com menos letras fica vermelho
            paragrafo2.style.color = 'green'; // Parágrafo com mais letras fica verde
        }
    } else {
        console.log('Um ou ambos os parágrafos não foram encontrados.');
    }
}

// Chama a função para ajustar a fonte dos parágrafos
ajustarFonte();
