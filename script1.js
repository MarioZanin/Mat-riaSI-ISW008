function contarCaracteresNumericosEVogais(string) {
    // Inicializa contadores
    let numCaracteresNumericos = 0;
    let numVogais = 0;
    
    // Expressão regular para verificar vogais (incluindo acentuadas)
    const vogaisRegex = /[aeiouáéíóúãẽĩõũâêîôûàèìòùäëïöü]/i;

    // Percorre a string
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase(); // Converte o caractere para minúsculo para comparar vogais
        
        // Verifica se o caractere é um número
        if (!isNaN(parseInt(char))) {
            numCaracteresNumericos++;
        }
        
        // Verifica se o caractere é uma vogal
        //if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        //    numVogais++;
        if (vogaisRegex.test(char)) {
            numVogais++;
        }
    }
    
    // Retorna o resultado como um objeto
    return {
        caracteresNumericos: numCaracteresNumericos,
        vogais: numVogais
    };
}

// Exemplo de uso
let resultado = contarCaracteresNumericosEVogais("Olá mundo maluco da porra! 123456");
console.log("Quantidade de caracteres numéricos:", resultado.caracteresNumericos);
console.log("Quantidade de vogais:", resultado.vogais);
