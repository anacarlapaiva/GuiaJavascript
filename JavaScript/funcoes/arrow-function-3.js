let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) 
// A partir de agora função aponta para o objeto
comparaComThis(global)
comparaComThis(obj)

// Arrow
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// This segue apontando para objeto na qual a função foi escrita
comparaComThisArrow(module.exports)
// Continua apontando para o objeto em que foi originalmente escrito