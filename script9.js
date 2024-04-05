function ehPalindromo(str) {
    // Remove espaços em branco e converte para minúsculas
    str = str.replace(/\s/g, '').toLowerCase();
    // Verifica se a string é igual à sua reversa
    return str === str.split('').reverse().join('');
}

function encontrarEExibirPalindromos(vetor) {
    // Vetor de strings de exemplo
    var vetorDeStrings = ['ovo', 'arara', 'banana', 'radar', 'aibohphobia', 'subi no onibus'];

    // Filtra apenas as strings que são palíndromos
    var palindromos = vetorDeStrings.filter(ehPalindromo);

    // Exibe os palíndromos encontrados na página
    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Palíndromos encontrados: ' + palindromos.join(', ');
}
