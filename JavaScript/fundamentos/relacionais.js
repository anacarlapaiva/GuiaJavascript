// Ao fazer relação sempre sera boolean -> Sim ou não, verdadeiro ou falso
console.log('01)', '1' == 1) // Compara igualdade entre '1' e 1 sem levar em conta a tipagem
console.log('02)', '1' === 1) // Compara levando em conta tipagem
console.log('03)', '3' != 3) // Compara sem levar em conta tipagem
console.log('03)', '3' !== 3) // Compara sem levar em conta tipagem

console.log('O5)', 3 < 2)
console.log('O6)', 3 > 2)
console.log('O7)', 3 <= 2)
console.log('O8)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) // Os dois falsos pois são referencias de memória

console.log('11)', d1.getTime() === d2.getTime()) // Verdadeiro pois está tratando do valor númerico
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// == sem levar em conta tipagem
// === estritamente igual, levando em conta tipagem