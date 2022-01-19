let num1 = 1
let num2 = 2

num1++ // Forma pós fixada, acrescenta uma unidade ao valor da variável
console.log(num1)
--num1 // Forma pré fixada, subtrai uma unidade do valor da variável
console.log(num1)

// Pré fixada tem precedencia à pós fixada

console.log(++num1 === num2--) // ++ executado antes da operação, enquanto -- executado depois de comparar
console.log(num1 === num2) // Agora valores diferentes 
