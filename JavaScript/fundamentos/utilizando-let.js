let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) // Let tem escopo por bloco, mesmo não sendo função
}
console.log('fora = ', numero)

// Imprime valores diferentes pois estão em escopos diferentes

let numero = 1
{
    let numero2 = 2
    console.log('dentro = ', numero) // Como numero não está definido neste escopo, procura em outro
}
console.log('fora = ', numero)

// Imprime valores iguais pois numero não existe no escopo do bloco


// Let tem escopo global, em função e em bloco
// 
// Var tem escopo global e de função
