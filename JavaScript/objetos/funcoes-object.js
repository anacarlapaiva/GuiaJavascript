const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Pega todas as chaves -> nome, idade e peso
console.log(Object.keys(pessoa))
// Pega todos os valores -> 'Rebeca', 2 e 13
console.log(Object.values(pessoa))
// Array composto de sub-arrays com chave e valor
console.log(Object.entries(pessoa))

// Percorrendo sub-arrays e pegando os elementos 0 e 1
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// Destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Pode definri características da propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Vai ser listado
    writable: false, // Não permite ser alterado a propriedade
    value: '01/01/2017'
})

pessoa.dataNascimento = '01/01/2019' // Não irá trocar valor da propriedade
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015) -> concatenar objetos num só
// Os últimos vão sobrescrevendo


const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, d:4 }
// Todos objetos que passar após 1° param serão concatenados dentro do obj de destino
const obj = Object.assign(dest, o1, o2)
// Objeto dest não sera alterado, será gerado um novo objeto
console.log(obj)

Object.freeze(obj)
obj.c = 1234
// Não sofre alterações
console.log(obj)