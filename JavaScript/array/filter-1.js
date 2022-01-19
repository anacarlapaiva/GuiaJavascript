// Filter -> filtrar um array para ter um sub-array baseado num critério de filtro
// Elementos filtrados representam novo array

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

// (p) -> representa cada um dos produtos no array
console.log(produtos.filter(function(p) {
    return false // Resultado true ou false
}))

// ARROW TEM RETORNO IMPLICITO
const ehCaro = produtos => produtos.preco >= 500 
const ehFragil = produtos => produtos.fragil

console.log(produtos.filter(ehCaro).filter(ehFragil))