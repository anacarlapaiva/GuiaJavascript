function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'

    throw { // Lançando erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // Pode gerar um erro, potencialmente perigosos
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Se ocorreu erro no try, tratar erro
        tratarErroELancar(e)
    } finally { // Será executada mesmo que não ocorra erro
        console.log('Final')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)