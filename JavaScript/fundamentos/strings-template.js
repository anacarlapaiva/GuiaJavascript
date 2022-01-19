const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' // Sem utilizar template
const template = `
    Olá
    ${nome}!` // Interpolação a partir de crase

console.log(concatenacao, template)

/* Expressões
----------------- */
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função arrow atribuída a up
console.log(`Ei... ${up('cuidado')}!`) // Interpolado e passando pela função up
