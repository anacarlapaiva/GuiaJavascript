// Faça um algoritmo que calcule o fatorial de um número.
// Multiplicação desse número por todos os seus antecessores até chegar ao número 1.

function calcularFatorial(numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

