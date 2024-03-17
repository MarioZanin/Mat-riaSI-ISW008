// Lista de alunos
const alunos = [
    { nome: "João", ra: "0050832311001", notaP1: 7, notaP2: 8 },
    { nome: "Maria", ra: "0050832311002", notaP1: 6, notaP2: 5 },
    { nome: "Pedro", ra: "0050832311003", notaP1: 5, notaP2: 6 },
    { nome: "Ana", ra: "0050832311004", notaP1: 8, notaP2: 7 },
    { nome: "Mario", ra: "0050832311005", notaP1: 7, notaP2: 6},
    { nome: "Claudia", ra: "0050832311006", notaP1: 7, notaP2: 7},
    { nome: "Lucia", ra: "0050832311007", notaP1: 9, notaP2: 6.5},
    { nome: "Andreia", ra: "0050832311008", notaP1:8.5, notaP2: 6},
    { nome: "Suzy", ra: "0050832311009", notaP1: 5, notaP2: 5},
    {nome: "Claudi", ra: "0050832311010", notaP1: 5, notaP2: 5},
];
  // Função para mostrar a tabela de alunos
function mostrarTabelaAlunos() {
    let tabela = '<table>';
    tabela += '<tr><th>Nome</th><th>RA</th><th>Nota P1</th><th>Nota P2</th></tr>';
    alunos.forEach(aluno => {
    tabela += `<tr><td>${aluno.nome}</td><td>${aluno.ra}</td><td>${aluno.notaP1}</td><td>${aluno.notaP2}</td></tr>`;
    });
    tabela += '</table>';
    document.getElementById('tabelaAlunos').innerHTML = tabela;
}
// Função para calcular a média das notas de todos os alunos na P1
function calcularMediaP1() {
    let somaP1 = 0;
    alunos.forEach(aluno => {
    somaP1 += aluno.notaP1;
    });
    return somaP1 / alunos.length;
}
// Função para calcular a média das notas de todos os alunos na P2
function calcularMediaP2() {
    let somaP2 = 0;
    alunos.forEach(aluno => {
    somaP2 += aluno.notaP2;
    });
    return somaP2 / alunos.length;
}
function mostrarInfoAlunos() {
    let info = '<h3>Informações adicionais:</h3>';
    let naoreprovados = 0;
    let reprovados = 0;
    alunos.forEach(aluno => {
    let media = (aluno.notaP1 + aluno.notaP2) / 2;
    if (media >= 6) {
        info += `<p>${aluno.nome} está <span class="azul">aprovado</span> com média ${media.toFixed(2)}</p>`;
    } else {
        info += `<p>${aluno.nome} está <span style="color: red;">reprovado</span> com média ${media.toFixed(2)}</p>`;
        reprovados++; // Conta alunos reprovados
    }
    });
    let aprovados = alunos.length - reprovados;
    info += `<p>Quantidade de alunos aprovados (média > 6): ${aprovados}</p>`;
    info += `<p>Quantidade de alunos reprovados (média <= 6): ${reprovados}</p>`;
    info += `<p>Média das notas na P1 da classe é: ${calcularMediaP1().toFixed(2)}</p>`;
    info += `<p>Média das notas na P2 da classe é: ${calcularMediaP2().toFixed(2)}</p>`;
    document.getElementById('infoAlunos').innerHTML = info;
}
// Chamada das funções para exibir os resultados
mostrarTabelaAlunos();
mostrarInfoAlunos();