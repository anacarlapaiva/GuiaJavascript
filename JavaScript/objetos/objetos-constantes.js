// Pessoa aponta para um endereço de memória -> 123 -> {...} 
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
// Pessoa continua apontando para o endereço, porém o {...} pode ser alterado
console.log(pessoa)

// Pessoa -> 456 -> {...}

//pessoa = { nome: 'Ana' }

// Criei um novo objeto em outro endereço
// Não poderá apontar para outro endereço, pois pessoa é constante

Object.freeze(pessoa) // Congelando objeto pessoa
// Não se pode mais mexer no objeto

pessoa.nome = 'Maria' 
// Nome objeto continua sendo Pedro
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
// Nem endereço nem conteúdo do objeto podem ser alterados
