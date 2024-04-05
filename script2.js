function alterarCor() {
    let corInput = document.getElementById('corInput').value;
    let header = document.getElementById('h1');

    if (header) {
        if (corInput === "1") {
            header.style.color = 'blue';
        } else if (corInput === "2") {
            header.style.color = 'red';
        } else if (corInput === "3") {
            header.style.color = 'yellow';
        } else if (corInput === "4") {
                header.style.color = 'black';
        } else {
            header.innerHTML = 'Erro';
        }
    } else {
        console.log('Header não encontrado');
    }
}
