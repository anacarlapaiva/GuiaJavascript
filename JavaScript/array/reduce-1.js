// Reduce -> transforma um array em outro elemento
// Interações acumulativas

// Sintaxe (callback, valorInicial)
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
// MAP RECEBE ALUNO
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // Defino 10 como valor atual

// ---01--------02--------02+01-----03--------
// Acumulador + atual - acumulador + atual ...

console.log(resultado)