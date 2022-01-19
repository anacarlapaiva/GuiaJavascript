const filhas = ['Valeska', 'Cibalena']
const filhos = ['Washington', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano') // Concateno arrays e adiciono mais um elemento
console.log(todos)
console.log(filhas, filhos)
// Arrays originais seguem com os mesmos dados

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))