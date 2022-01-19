const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// i como tem escopo de bloco por se Let, possui memória
funcs[2]()
funcs[8]()