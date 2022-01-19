const prod1 = {} // {} Representa um objeto
prod1.nome = 'Celular Ultra Mega' // Criando identificado nome no objeto
prod1.preco = 4998.90
prod1['Desconto Legal:'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    // obj:{ // único dentro do prod2
    //     blablabla: 1,
    //     obj: { // Único dentro do obj
    //         blablabla: 2
    //     }
    // }
}

// JSON é texto, enquanto objeto é atributo, valor, ação

console.log(prod2)