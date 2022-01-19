// Técnicas para nivel maior de encapsulamento
// Forma mais controlada, aplicando validações
// Get -> ler valor variável
// Set -> alterar valor variável

const sequencia = {
    // Convenção, variável pretentida para ser acessada apenas intermante no Objeto
    _valor: 1,
    // Pode fazer algum tipo de processamento através da função, antes de retornar Objeto
    get valor() { return this._valor++ },
    // Parâmetro representa o valor recebido
    set valor(valor) {
        if(valor > this._valor){ // Sequencia vai sempre para a frente, incrementando
            this._valor = valor
        }
    }
}
// No 1° caso entende que você esta lendo, e após faz a alterações
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
// Ignora pois está tentando trazendo para um valor menor que o anterior
// Funcionalidade definida através do método set
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)