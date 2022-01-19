// Tira da estrutura, extrai elementos de array, por exemplo
// Objeto {}  Chave []

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Operação de desestruturação
const { nome, idade } = pessoa // Tire de dentro de pessoa o nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Tire de dentro de pessoa o nome e idade e atribua identificadores aos mesmos
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Se variável bemHumorada não existe no objeto, retorna como true
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero } } = pessoa // Extrai variáveis de endereço dentro do objeto
console.log(logradouro, nome)