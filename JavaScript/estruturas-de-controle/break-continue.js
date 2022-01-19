// Estruturas de desvio de fluxo
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break // Age sobre o bloco for
    }
    console.log(`x = ${nums[x]}`)
}

for(y in nums) {
    if (y == 5) {
        continue // Age sobre o laço for interrompendo a repetição atual e parte para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums) { // Rótulo para for
    for(b in nums) {
        if( a== 2 && b == 3) break externo // Para agir sobre laço mais externo
        console.log(`Par = ${a}, ${b}`)
    }
}

