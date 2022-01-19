// Closure -> escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis extenar à função

// Contexto léxico em ação:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
// Ao receber uma função se transforma numa função
const minhaFuncao = fora()
console.log(minhaFuncao())