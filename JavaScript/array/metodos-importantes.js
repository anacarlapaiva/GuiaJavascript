const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Não posso atribuir mais nada para a constante piloto
// Conteúdo do array continua passivel de alteração

pilotos.pop() // Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no início do array
console.log(pilotos)

// splice -> pode adicionar ou remover elementos do array

// splice adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa') // No indice 2 adicionar 2 novos elementos
console.log(pilotos)

// splice removendo
pilotos.splice(3, 1) // Removendo 1 elemento a partir indice 3
console.log(pilotos)

// slice -> novo array gerado a partir deste método

const algunsPilotos1 = pilotos.slice(2) // Constrói novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Constrói array do indice 1 até < 4
console.log(algunsPilotos2)