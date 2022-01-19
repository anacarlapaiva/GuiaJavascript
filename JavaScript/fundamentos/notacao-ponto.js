console.log(Math.ceil(6.1)) // Arredondamento para cima

const objt1 = {}
objt1.nome = 'Bola'
// objt1['nome'] = 'Bola2' // Equivalentes
console.log(objt1.nome)

function Obj(nome) {
    this.nome = nome // Recebe o nome e torna o mesmo público para utilizar após
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()