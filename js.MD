1- evitar comentários, comentar só o essencial

2- dados são organizados em estrutura de dados 

3- algoritmo: sequencia de dados executados 

4- var: pode ser redeclarada no mesmo escopo; let: DEVE SER USADA, é maleavel mas menos maleavel que o VAR; const é constante, não pode ser modificada.

5- o Number('string aqui') -> transforma string em tipo number
isInteger verifica se o valor é inteiro ou float 
toFixed arredonda um numero com dízima
toString transforma em binário.

6- o Math: é um objeto que tem propriedades para constantes e funções matemáticas

---------------------------------------------------------------------------------------------------------------------

7- tipos em String; metodos:
charAt(numerodaletra) - mostra a letra; 
charCodeAt(numerodoindice) - mostra onde esta na tabela unicode
indexOf('o que voce quer saber se tem') - verifica se existe o indice na variavel
subString(0, 3) - tira alguma letra da sentença
replace() - substitui - (o que voce quer subtituir, pelo que voce quer substituir)
split(',') - transforma um código em array

8- template string: `texto aqui ${variavelaqui}`

----------------------------------------------------------------------------------------------------------------------
9- tipo boolean; metodos:
!! duas exclamações é um não + não que gera um true
! negação - false 

----------------------------------------------------------------------------------------------------------------------
10- tipo array; metodos: 
É um vetor - agrupa variáveis e multiplos valores [] - pode misturar tipos de dados
.length diz quantos elementos tem no array
.push() adiciona algo no array 
.pop() || delete[0] - tira o ultimo valor do array 

----------------------------------------------------------------------------------------------------------------------
11- tipo Object; metodos: 
*não é a mesma coisa que um JSON*
chave e valor o define -> nome: valor 
{
    camisa: 'polo',
    preco: 71.00,
    obj2{
        desconto: 10,
    }
}
pode ter um objeto dentro de outro 

----------------------------------------------------------------------------------------------------------------------
12- tipo NULL e UNDEFINED; 
tipos primitivos não são afetados caso haja mudanças

undefined -> valor que ainda nao foi inicializado -- não usar, deixar para o proprio js apontar e usar
null -> não tem nenhum valor dentro da variável - ausencia de valor - não aponta para nada - zera a variável

----------------------------------------------------------------------------------------------------------------------
13- quase TUDO É FUNÇÃO - é um verbo ou ação - excuta uma sentença de código

exemplos básicos de funções #01: 
*função sem retorno*
function imprimirSoma(a, b){
    console.log( a + b )
}

imprimeSoma(2,3) --> executa a func

*função com retorno*
function soma(a, b=1){
    return a + b
}
tem que colocar num console.log pq tem return e ai nao pegaria fora 
console.log(soma(2,3))


*exemplos básicos de funções #02*: 
armazenando uma função dentro de uma variável

const imprimirSoma = function (a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

*com arrow*:
const imprimirSoma2 = (a, b) => {
    return a + b
}
console.log(soma(2,3))

*retorno implícito*:
const subtracao = (a,b) => a-b ---> se nao tem chaves o js entende q o retorno é a - b

----------------------------------------------------------------------------------------------------------------------
14- Hoisting 
var pode ser modificada & acessada globalmente, fora do escopo da função 
let pode  ser modificada mas não é globalmente acessivel (tem escopo de bloco)
const não pode  ser modificada e não possui escopo global

----------------------------------------------------------------------------------------------------------------------
15- Função vs Objeto 
--> com a palavra new --> typeof é object
--> objetos são grupos aninhados de chave/valor 
----------------------------------------------------------------------------------------------------------------------
16- Notação ponto
acesssar membros de uma função. Exemplo: objeto.nome
this.nome = nome
this é a assoaciação que recebe o nome por parametro -> cria atributo publico e fica visivel para fora da func
----------------------------------------------------------------------------------------------------------------------
17- Operadores de atribuição 
= --> atribui
+= --> atribuição aditiva 
-= --> atribuição subtrativa
*= = multiplicativa
/= divisiva etc...
----------------------------------------------------------------------------------------------------------------------
18 - Destructuring 
Desestruturação -> tira da estrutura alguma coisa; forma de extrair os atributos de seu objeto;
Em ambito de objeto usa-se as {} e em array usa-se[]

const pessoa ={
    nome: 'ana',
    idade: 5,
    endereco {
        logradouro: 'rua abc',
        numero: 10000
    }
}

*usar o {} no lugar do nome da variável. Colcoar o que voce quer TIRAR de dentro da estrutura*
const { nome, idade } = pessoa --> *recebe o nome do objeto, no caso, pessoa*
console.log(nome, idade)

*Muda o nome do atributo dentro do obj*
const { nome: n, idade: i } = pessoa

*Pegando um objeto dentro do objeto*
const { endereco: {logradouro, numero, cep }} = pessoa

-Usando a estrutura de um array - 

const [a] = [10] || const [n1, n2, n3, n4] = [1, 2 , 3 , 4]
*aninhada*
array pode ter outros elementos do tipo array 

----------------------------------------------------------------------------------------------------------------------
OPERADORES LÓGICOS:
--> && e || 
operação do tipo & só ocorre quando TODAS as condições são verdadeiras
operação do tipo || ocorre quando UMA ou mais condições forem verdadeiras
! -> nega uma operação 
!! desnega uma operação converte para boolean
!= OU exclusivo / difrença 

OPERADORES UNÁRIOS: 
++ ; -- ; 

OPERADORES  TERNÁRIOS:
operador q tem três partes

const resultado = (nota) => >=7 ? 'aprovado' : 'reprovado'
             se for verdadeiro retorna isso  se for falso retorna isso
 
----------------------------------------------------------------------------------------------------------------------
TRATAMENTO DE ERRO: TRY/CATCH/THROW
try: trata o primeiro erro que poderia ser gerado
catch(e): se gerar um erro, ele cai dentro do catch --> tratarErro(e)
throw: new Error('Ocorreu um erro')
finally: sempre será executado ('final') 
----------------------------------------------------------------------------------------------------------------------
Estruturas de controle ou condicional/ IF ELSE SWITCH WHILE FOR FOR IN 
--> IF: 
exemplos:

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }

}

--> IF / ELSE 

const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    } else{
        console.log('reprovado')
    }
}

imprimirResultado(7)

--> ELSE IF --> encadeia condições uma atras da outra

WHILE: Não sabe-se quantos elementos prcisa inteirar. Enquanto acontecer tal coisa, faça: 
--> Adequada para quando nao sabemos quantas repetições será feita

function getInteiroAleatorioEntre(min,max){
    const valor = math.random() * (max-min) + min 
    return Math.floor(valor)
}
let opcao = 0 
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    opcao++
}


FOR: Usada quando sabemos o total de repetições que serão necessárias
 *variavel , expressão a ser efetuada e o incrimento*
for(let i = 1; i <= 10; i++){
}

FOR IN: Forma desconstrolada de for -> percorre os atributos da estrutura. Pode ser feita em cima de um objeto ou um array, porém não é o mais indicado.
----------------------------------------------------------------------------------------------------------------------
FUNÇÃO EM JAVASCRIPT: 
Função pode ser tratada como um dado, ou seja, pode ser tratado de diversas formas, como parametros, função dentro de função e etc.
Parâmetros e retornos são opcionais, vale ressaltar!! Além disso, eles são variáveis. Usa-se o ...rest / ...spread. Antes era usada o >arguments<

função de forma literal:
function teste(){  }

armazenamento de função dentro de uma variavel: 
const teste2 = function() {  }

armazenar em um array 
const array = [ function (a,b) {return a _ b}, teste]

armazenar atributos de um objeto 
const obj = {}
obj.falar = function () {return:'opa'}

passar função como parametro
function (run) {
    run()
}

run(function () { console.log('executando...')})

uma função pode retornar / conter uma função

function soma(a, b) {
 return function (c) {
     console.log(a + b + c)
     }
}

soma (2, 3)(4)
OU
const cindoMais = soma (2, 3)
cincoMais(4)
----------------------------------------------------------------------------------------------------------------------
THIS: varia de acordo como voce chama a função. É uma peculiaridade do javascript puro. Geralmente é acompanhado de uma função denominada com function.

THIS E A FUNÇÃO BIND: O método bind(argumentodeondevcquerpegar) --> cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
Direciona para o lugar certo

ex: const pessoa = {
    saudacao: 'bom dia',
        falar() {
            console.log(this.saudacao)            
        }
}

pessoa.falar() 
cria-se uma nova const
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

----------------------------------------------------------------------------------------------------------------------
ARROW FUNCTION: 
É mais curta e tem associação ao contexto em que foi escrita. 
This dentro da arrow function é FIXO, diferente em uma function normal.

----------------------------------------------------------------------------------------------------------------------
FUNÇÕES ANONIMAS: Uma função anônima é uma função sem nome e geralmente não está acessível após a sua criação.
a função anônima não tem nome entre a palavra-chave function e os parênteses (). Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável. ARROW SEMPRE É FUNÇÃO ANONIMA.

const soma = function (x, y) {
    return x + y 
}

const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimeResultado(3, 4)

nesse  caso foi passada a função anonima SOMA dentro de uma outra função IMPRIMERESULTADO.

----------------------------------------------------------------------------------------------------------------------
CALLBACK FUNCTION(chamar de volta): callback é uma função passada como parâmetro para outra função. São passadas como funções para serem executadas após um certo evento. 

const fabricantes = ["bmw", "audi", "mercedes"]

function imprimir(nome, indice) {
    console.log(`${indice _ 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

----------------------------------------------------------------------------------------------------------------------
FUNÇÕES CONSTRUTORAS:
Como usar classe em Java. As funções podem ser instânciadas. com o this no começo, é publico. Com uma variavel, é um método privado.

// Pode-se utilizar função da mesma maneira que a classe em Java
function Carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado, pertence apenas ao escopo da função Carro
    let velocidadeAtual = 0

    // método público
    // this -> para utilizar fora da função

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método público

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Objetos diferentes instanciados a partir da mesma função
ISSO SÃO INSTÂNCIAS
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

----------------------------------------------------------------------------------------------------------------------
TIPOS DE DECLARAÇÃO: 

console.log(nomeFuncaoSoma(3, 4))
// Dessa forma posso utilizar função mesmo antes de declará-la
// function declaration
function nomeFuncaoSoma(param1, param2) {
    return param1 + param2
}

// function expression
const sub = function (x, y) {
    return x - y
}
// Posso chamar apenas depois de declarar a função
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y // Consta ao debugar código
}

----------------------------------------------------------------------------------------------------------------------
CONTEXTO LÉXICO: 
é  o contexto em que a função foi escrita. O escopo léxico de uma função é definido como sua posição física na estrutura do código fonte.
ex:
const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // Já que dentro da função não tenho essa variavel ele procurar num escopo maior
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
    // Assim que executar, minhaFuncao ira procurar 'valor' em sua função
}

exec() // Retornará Global, pois função carrega consigo o contexto em que foi declarada

----------------------------------------------------------------------------------------------------------------------
CLOSURE: Uma closure é uma função interna que possui acesso a (referência) variáveis independentes da função externa. Em outras palavras, a função definida na closure se lembra do ambiente na qual foi criada.
Escopo criado quando uma função é declarada. Esse escopo permite que a função acesse e manipule variáveis externas à função

----------------------------------------------------------------------------------------------------------------------
Função autoinvocada (IIFE) - quando queremos fugir do escopo global do browser. Ajuda a evitar a manipular algo diretamente no escopo global e evita erros inesperados.

----------------------------------------------------------------------------------------------------------------------
ARRAYS: são indexados, ou seja, acessamos através do [numero aqui dentro]. É uma estrutura dinâmica
.push('Ana) adiciona um novo item ao array
nomeDoArray.length --> mostra o tamanho do array
.sort() --> ordena o array --> altera o próprio array
delete[] --> deleta o elemento mas não o reordena. Coloca undefined é colocado no lugar
.splice(1, 2, "adiciona no lugar do um", "adiciona no lugar do 2") --> remove ou adiciona elementos ao mesmo tempo
    primeiro indice: a partir de qual vc quer apagar. segundo indice QUANTOS voce quer apagar. se for 0, não tira ninguem
.pop() --> remove o ultimo elemento do array
.shift() --> remove a primeira posição   
.unshift() --> coloca um na primeira posição
.slice(aqui coloca a partir de qual indice voce quer gerar um novo array) --> retorna um NOVO array
 para criar: 
 const original = arrayCriado.slice(1,4)
Há alguns métodos que  criam um novo array, e não somente o alteram


FOREACH: recebe dois parametros na função dentro do forEach: o primeiro é o proprio elemento e o segundo é o indice do elemento q esta sendo executado

const arrayExemplo = ['ana', 'carla']

arrayExemplo.forEach(function(nome, indice) {
    console.log(${indice + 1} ${nome})
})

ou

arrayExemplo.forEach(nome => console.log(nome))


MAP: Serve para fazer uma TRANSFORMAÇÃO DO ARRAY, ou seja, o array vira um novo array. TRANSFORMA UM ARRAY EM OUTRO!
mapeia os elementos! no final os arrays possuem o mesmo tamanho
MAP É UM FOR COM PROPÓSITO- GERA UM NOVO ARRAY E NAO ALTERA O ORIGINAL. Tem q ter um retorno
sempre que precisar fazer um novo array de outro array

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e){
    return e * 2
})

FILTER: filtra um array para ter um subarray, ou seja, filtrar do array apenas valores que voce precisa na hora

REDUCE: função que serve para transformar um array em uma outra coisa.
----------------------------------------------------------------------------------------------------------------------
