let valor // Não inicializada
console.log(valor) // Undefined, pois variável foi declarada mas não foi inicializada
// console.log(valor2) // Is not defined, pois variável não foi declarada

valor = null 
// Foi inicializada porém não possui nenhum valor e nenhum endereço que aponte para algum lugar da memória
// Quando você quer por exemplo zerar o valor de uma variável já utilizada no código
console.log(valor)
// console.log(valor.toString()) // Erro pois não pode ler a variável nula

const produto = {}
console.log(produto.preco) // Undefined, pois produto existe mas não esta definido o preco
console.log(produto) // {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco) // Ao converter para Boolean retorna false pois preco esta undefined
// delete produto.preco // Retonar objeto vazio pois tira atributo
console.log(produto) // Retorna o preco com undefined

produto.preco = null // Sem preço, definindo por exemplo um PDF online
console.log(!!produto.preco) // Retorna false
console.log(produto) // Objeto com preco nulo