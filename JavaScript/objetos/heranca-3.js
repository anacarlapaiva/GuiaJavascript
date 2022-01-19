const pai = { nome: 'Pedro', corCabelo: 'preto' }
// Cria objeto filha1 apontando para objeto pai - protótipo -
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
// Acessa atributo a partir de protótipo
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não altera, segue Bia
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Chaves de atributos recebidos por herança não são listados
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    // Para processar apenas atributos do próprio objeto
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}