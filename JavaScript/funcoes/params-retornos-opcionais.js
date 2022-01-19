function area(largura, altura) {
    const area = largura * altura
    if(area >20) {
        console.log(`Valor acima do permitido: ${area} m2`)
    } else {
        return area
    }
}

console.log(area(7, 12))
console.log(area(2))
console.log(area(2, 2))