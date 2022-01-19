// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
function jurosSimples(capitalInicial, taxaJuros, temploAplicacao) {
    return capitalInicial + (capitalInicial * taxaJuros * temploAplicacao)
}

function jurosCompostos(capitalInicial, taxaJuros, temploAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** temploAplicacao
}

