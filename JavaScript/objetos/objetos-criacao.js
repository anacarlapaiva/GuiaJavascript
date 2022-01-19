// Notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    // Preco e Desc não disponíveis fora da função
    this.nome = nome // Fica visível externamente -> público
    this.getPrecoComDesconto= () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2899.99, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2).replace('.', ','), p2.getPrecoComDesconto().toFixed(2).replace('.', ','))

// Função Factory
function criarFuncionario(nome, salarioBase, qntFaltas) {
    return { // Retornando um objeto literal
        nome,
        salarioBase,
        qntFaltas,
        getSalario() {
            return (salarioBase / 30) * (30 - qntFaltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
