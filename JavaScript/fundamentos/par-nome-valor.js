// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1 -> Em qual contexto/escopo/bloco se encontra

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Doze de Julho',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec()) // Nomes iguais porém contextos léxicos diferentes
console.log(cliente)