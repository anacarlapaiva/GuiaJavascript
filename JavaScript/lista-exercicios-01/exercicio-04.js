// Crie uma função que irá receber dois valores, o dividendo e o divisor. 
//A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const resultadoDivisao = (dividendo, divisor) => {
        console.log("Resultado: " + Math.floor(dividendo/divisor));
        console.log(`Resto: ${dividendo % divisor}`)
}

