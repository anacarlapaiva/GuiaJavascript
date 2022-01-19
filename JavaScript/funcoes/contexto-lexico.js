const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // Já que dentro da função não tenho essa variavel ele procurar num escopo maior
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
    // Assim que executar, minhaFuncao ira procurar 'valor' em sua função
}

exec() // Retornará Global, pois função carrega consigo o contexto em que foi declarada
