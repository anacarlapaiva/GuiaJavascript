function Pessoa(nome) {
    // Utilizando o this tenho acesso para alterar essa variável em outros escopos
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()