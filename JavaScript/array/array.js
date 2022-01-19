// É um objeto
// Não necessita ser homogênea
// Estrutura indexada

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // Mais indicado para substituir indice
aprovados.push('Abia') // Adiciona no final do array
console.log(aprovados.length) // Tamanho array

aprovados[9] = 'Rafael' // Indices anteriores passam a ser undefined
console.log(aprovados)
// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort() // Ordena array
console.log(aprovados)

delete aprovados[1] // Exclui elemento, valor indice se torna undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']

// ------- splice -> elemento em que se inicia, quantos elementos a partir dele
// Adiciona, remove ou adiciona e remove elementos ao mesmo tempos

aprovados.splice(1, 1) // Exclui 1 a partir do indice 1
// aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Exclui 2 elementos a partir do indice 1 e adiciona a partir deles outros 2
// aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // A partir do indice 1 adiciona 2 elementos, sem excluir

console.log(aprovados)