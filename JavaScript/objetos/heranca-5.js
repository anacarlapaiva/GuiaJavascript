console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Todos tem atributo .prototype pois todos são funções

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    // Quebra todas os caracteres da String e transformar em Array
    // para depois transformar novamente em String com o join
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Não sobreescrever métodos disponíveis no protótipo
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())