// ------------------------- 1° op ----- 2° op ----- 3° op
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// - ? - estabelece a relação de que, se for verdadeiro, retorna o primeiro resultado antes do - : -, se não, o segundo
// 1° op -> condição

console.log(resultado(7.1))
console.log(resultado(6.9))