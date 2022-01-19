var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) 

// Mesmo resultado, pois mesmo escopo (global), já que não está dentro de outra função

// Var tem escopo global e de função
// Let tem escopo global, em função e em bloco
