const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar array apenas com os preços

// Transformar JSON em objeto
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
// Transforma em objeto e retira apenas o preço
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
