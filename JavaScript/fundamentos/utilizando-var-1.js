{{{{ var sera = 'Será???' }}}}

console.log(sera) // Acessa pois não está dentro de uma função

function teste(){
    var local = 123
}

teste()
console.log(local) // Local não definida pois está no escopo de uma função

// Var tem escopo global e de função
// Let tem escopo global, em função e em bloco

