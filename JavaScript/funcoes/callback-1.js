// Chamar novamente a função
// Callback ocorre após um evento

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// forEach -> função disponível em array - recebe outra função ()
fabricantes.forEach(imprimir)
// Para cada elemento que encontrar vai chamar a função
fabricantes.forEach(fabricante => console.log(fabricante)) 
// Imprime apenas o nome