const valores = [7.7, 8.9, 5.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Retorna undefined

valores[4] = 10
console.log(valores)

valores[10] = 100
console.log(valores) // Retorna que possui 5 indices vazios entre o final do array e o valor inserido

console.log(valores.length) // Conta elementos

valores.push({id: 3}, false, null, 'teste') // Adicionar atributos no array
console.log(valores)

console.log(valores.pop()) // Retorna último valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores) // Array é do tipo object
