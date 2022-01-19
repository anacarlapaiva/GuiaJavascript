// Também é uma função
class Lancamento {
    // Classe transformada em função construtora
    constructor(nome = 'Genérico', valor = 0) {
        // Adicionando atributo ao objeto que recebe o nome passado
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // ... -> recebe conjunto de parametros variáveis e concatena num array
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
// Posso agregar parametros variados por conta do (...)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

