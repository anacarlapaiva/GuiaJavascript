const notas = [6.7, 7.4, 9.8, 8.1, 3.3]

for(let i in notas) { // Recebe o indice
   console.log(i, notas[i]) 
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {  // Recebe atributos de algum objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
