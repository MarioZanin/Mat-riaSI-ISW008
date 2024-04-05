document.getElementById('formCor').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do campo de entrada
    var corInput = document.getElementById('corInput').value;

    // Verifica se a cor é válida
    if (validarCorHexadecimal(corInput)) {
        // Define a cor da div
        document.getElementById('divColorida').style.backgroundColor = corInput;
    } else {
        alert('Por favor, insira um endereço hexadecimal de cor válido na forma #rrggbb.');
    }
});

function validarCorHexadecimal(cor) {
    // Expressão regular para verificar se a cor está no formato correto
    var regex = /^#[0-9A-Fa-f]{6}$/;

    // Retorna true se a cor corresponde ao padrão
    return regex.test(cor);
}
