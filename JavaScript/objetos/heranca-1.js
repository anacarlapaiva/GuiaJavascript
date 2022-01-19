// Criar mecânismos para reuso de código mais eficaz
const ferrari = {
    modelo:'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
// __proto__-> consegue-se acessar quem é o protótipo deste objeto
// __proto__-> consegue-se acessar objeto pai se não encontrar atributo dentro de ferrari
// __proto__-> procura em toda cadeia de protótipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// Object.prototype -> protótipo de mais alto nível
console.log(Object.prototype.__proto__) // null

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)