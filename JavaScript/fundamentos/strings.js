const escola = 'Cod3r'

console.log(escola.charAt(4)) // Retorna letra no índice 04
console.log(escola.charAt(5)) // Retorna vazio
console.log(escola.charCodeAt(3)) // Retorna valor do carecter no índice 03 na tabela ASCII
console.log(escola.indexOf('3')) // Retorna índice da letra r

console.log(escola.substring(1)) // Imprime a partir do índice 01
console.log(escola.substring(0, 3)) // Imprime do índice 0 até o índice 03 sem incluí-lo

console.log('Escola '.concat(escola).concat("!")) // Concatenar a partir de literal
console.log('Escola ' + escola + "!") // No conceito de string concatena as string
console.log(escola.replace(3, 'e')) // Substitui valor no índice por valor informado após a vírgula

console.log('Ana, Maria, Pedro'.split(',')) // Quebra string em array a partir da vírgula