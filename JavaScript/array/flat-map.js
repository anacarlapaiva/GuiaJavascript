// Array de objetos
const escola = [{ // Primeiro objeto - turma
    nome: 'Turma M1',
    alunos: [{ // Array de objetos
        nome:  'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, { // Segundo objeto - turma
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.2
    }, {
        nome: 'Roberta',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota // Extraio nota dos alunos
const getNotasTurma = turma => turma.alunos.map(getNotaAluno) // Extraio notas das turmas

const notas1 = escola.map(getNotasTurma)
console.log(notas1) // Array com 1 array por turma

// FlatMap -> concatena arrays a partir do método map
// Achatar matriz em um unico array
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)


