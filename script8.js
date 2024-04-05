function validarEmail() {
    // Obtém o valor do campo de entrada de e-mail
    var email = document.getElementById('emailInput').value;

    // Verifica se o e-mail contém o caractere "@"
    if (email.includes('@')) {
        document.getElementById('resultadoValidacao').innerText = 'E-mail válido.';
    } else {
        document.getElementById('resultadoValidacao').innerText = 'E-mail inválido. Certifique-se de incluir "@" no endereço de e-mail.';
    }
}