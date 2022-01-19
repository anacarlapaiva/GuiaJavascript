function criarProduto(nome, preco, percDesconto) {
    return {
        nome,
        preco: preco - (preco * percDesconto / 100 ),
        percDesconto
    }
}

console.log(criarProduto('Produto teste', 54.99, 10))
console.log(criarProduto('iPad', 1250.5, 20))