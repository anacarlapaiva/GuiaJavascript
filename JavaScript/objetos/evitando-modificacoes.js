// Object.preventExtension -> não pode adicionar novos atributos ao objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Pode ser alterado
produto.descricao = 'Borracha escolar branca' // Não é permitido
delete produto.tag // Pode ser excluído
console.log(produto)

// Object.seal -> não pode adicionar nem excluir atributos, apenas alterar

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome // Não é possivel
pessoa.idade = 29 // Pode ser executado
console.log(pessoa)

// Object.freeze = selado + valores constantes
// writable: false