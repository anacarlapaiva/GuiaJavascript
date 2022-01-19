// Funções em JS são First-Class Object (Citizens)
// Higher-order-function

// Criar de forma literal -> function - nome - parametros - bloco
function fun1() { }

// Armazenar em uma variavel -> funcao anônima
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0][2, 3])

// Armazenar em atributo de objeto
const obj = {}
obj.falar= function () { return 'Opa'}
console.log(obj.falar())

// Passar funçao como parametro
function run(fun) {
    fun()
}

run( function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(7)
const cincoMais = soma(2, 3)
cincoMais(7)