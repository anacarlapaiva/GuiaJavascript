function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

// Instancinado objetos a partir da função
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// Simular o new

// ...params -> recebe conjunto de parametros variáveis e concatena num array
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype // Associando função que foi passada como parâmetro como prototipo do objeto
    // Executa função f passando parâmetros
    f.apply(obj, params)
    return obj
    // New retorna objeto criado a partir de função
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)