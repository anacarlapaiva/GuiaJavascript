function MeuObjeto() {}
// Existe e é um objeto
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// Objetos instanciados a partir da mesma função construtora apontam
// para o mesmo protótipo 
console.log(obj1.__proto__ === obj2.__proto__)
// Apontam para a função construtora .prototype
console.log(MeuObjeto.prototype === obj1.__proto__)

// Qualquer objeto criado a partir desta função tera atributo nome
MeuObjeto.prototype.nome = 'Anônimo' 
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

// Assume atributo nome do protótipo, já que neste objeto não criei atributo
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ = Object.prototype)
console.log(Object.prototype.__proto__ === null)

// New MeuObjeto -> MeuObjeto.prototype -> Function.prototype -> Object.prototype  