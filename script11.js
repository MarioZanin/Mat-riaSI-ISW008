function alternarCores() {
    var div = document.getElementById('dv1');

    // Obtém a cor atual da div
    var corAtual = div.style.backgroundColor;

    // Alterna entre amarelo e vermelho
    if (corAtual === 'yellow') {
        div.style.backgroundColor = 'red';
    } else{
        div.style.backgroundColor = 'yellow';
    }
}

// Alterna as cores a cada 400 milissegundos
setInterval(alternarCores, 400);
