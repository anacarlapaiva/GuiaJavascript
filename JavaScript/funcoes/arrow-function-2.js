function Pessoa() {
    this.idade = 0 

    const self = this
    setInterval(() => {
        this.idade++
        // This aponta para a função Pessoa pois foi escrito dentro dela
        // Não varia de acordo com quem tá chamando
        console.log(this.idade)
    }, 1000) 
} 

new Pessoa // Instaciar objeto a partir de função