const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

// Média das notas

// Imperativo -> processamento tudo ao mesmo tempo
// Forma mais detalhada dos processos -> COMO deve ser feito

let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo -> possibilita maior reúso com funções especialistas
// O QUE deve ser feito -> passando os critérios necessários
// Detalhes resolvidos internamente

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

// Abordagem declarativa -> select codigo, nome, email from clientes where ativo = 1
 // SQL é uma linguagem declarativa