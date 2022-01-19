// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // Evitar este tipo de manipulação
const avo = { attr1: 'A' } // Aponta para Object.prototype
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()} `
        // super -> para chamar método do protótipo
    }
}

// Estabelecida conexão entre ferrari e carro
// carro como protótipo de ferrari
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
// Consigo acessar atributos tanto do objeto (ferrari, volvo) quanto do protótipo

console.log(ferrari)
// Imprime apenas atributos declarados no objeto ferrari,
// portanto não imprime a função

console.log(volvo)
// Imprime também a função pois a mesma foi declarada no objeto volvo
// Porém não possui velMax

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
// Chama próprio método direto do protótipo
console.log(ferrari.status())