// JSON -> formato textual de objeto
// Interoperabilidade entre sistemas com tecnologias diferentes
// Formato genérico que não carrega nada específico de uma linguagem
// JSON é formato de dados portanto não passa funções

const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c }}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
// Objeto gerado a partir de texto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d":{}, "e": [] }'))