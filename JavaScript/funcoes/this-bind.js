// This é uma forma de referenciar o proprio objeto em execução
// Depende do contexto léxico
// This varia em um function
// Em arrow function não varia

const pessoa = {
    saudacao:'Bom dia!',
    falar() {
        console.log(this.saudacao) // Saudação do objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Saudacao não aponta mais para o objeto, por isso undefined
// Não estou chamando mais diretamente do objeto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // This será resolvido para pessoa
// Bind retorna um objeto/função
// Pessoa.falar nao foi alterado
falarDePessoa()