// Pode-se utilizar função da mesma maneira que a classe em Java
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado, pertence apenas ao escopo da função Carro
    let velocidadeAtual = 0

    // método público
    // this -> para utilizar fora da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Objetos diferentes instanciados a partir da mesma função

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

