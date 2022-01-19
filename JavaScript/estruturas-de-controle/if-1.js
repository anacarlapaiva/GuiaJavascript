function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '  + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){ // Converter para boolean -> verdadeiro ou false
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN) // Retornam falso
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo({}) // Retornam verdadeiro
seForVerdadeEuFalo(' ')