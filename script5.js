// 1) Função para capturar dois números de parágrafos em HTML e retornar a soma de ambos caso sejam maiores que zero.
function somaDeParagrafos() {
    let paragrafo1 = document.getElementById('a1').textContent;
    let paragrafo2 = document.getElementById('a2').textContent;

    let num1 = parseInt(paragrafo1);
    let num2 = parseInt(paragrafo2);

    if (!isNaN(num1) && !isNaN(num2) && num1 > 0 && num2 > 0) {
        return num1 + num2;
    } else {
        return "Números inválidos ou não positivos.";
    }
}

// 2) Função que recebe um vetor de números e retorna a quantidade de pares.
function quantidadeDePares(vetor) {
    let count = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// 3) Função que recebe um vetor de inteiros e retorna a porcentagem de números negativos em relação ao total.
function porcentagemNegativos(vetor) {
    let total = vetor.length;
    if (total === 0) return 0;

    let negativos = 0;
    for (let i = 0; i < total; i++) {
        if (vetor[i] < 0) {
            negativos++;
        }
    }
    return (negativos / total) * 100;
}

// 4) Função que recebe uma string e a retorna em ordem inversa.
function stringInvertida(str) {
    return str.split('').reverse().join('');
}

// Gerar vetor de números aleatórios entre 1 e 100 (10 elementos)
//let vetorAleatorio = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Vetor de inteiros para teste
let vetorInteiros = [-5, 5, 10, -15, 15, 20, -25, 25, 30, -35, 35, 40, -45, 45, 50];



// Chama as funções e atualiza o HTML com os resultados
document.getElementById('resultadoSoma').textContent = somaDeParagrafos();
//document.getElementById('quantidadePares').textContent = quantidadeDePares(vetorAleatorio);
document.getElementById('quantidadePares').textContent = quantidadeDePares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 18, 20]);
//document.getElementById('porcentagemNegativos').textContent = porcentagemNegativos([-5, 10, -15, 20, -25, 30, -35, 40, -45, 50]);
document.getElementById('porcentagemNegativos').textContent = porcentagemNegativos(vetorInteiros);
document.getElementById('stringInvertida').textContent = stringInvertida('INCONSTITUCIONALICIMAMENTE');
