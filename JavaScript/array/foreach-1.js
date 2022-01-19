const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorre array e retorna indice + elemento
// Sempre que passa para novo elemento chama o callback - function
// Indice sempre passado como 2° parâmetro
// O próprio array é passado como 3° parâmetro no forEach
aprovados.forEach( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)