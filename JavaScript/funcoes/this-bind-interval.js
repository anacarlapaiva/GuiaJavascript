function Pessoa() {
    this.idade = 0 // A disposição para ser manipulado

    const self = this
    setInterval(function () { // Dispara uma função em determinado intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // A cada 1000 ms a função será executada
} // Amarrar this do objeto para a função

new Pessoa // Instanciar objeto a partir de função