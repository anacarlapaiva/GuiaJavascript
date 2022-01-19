//01

const calcValores = (x, y) => {
  console.log(x + y, x - y, x * y, x / y);
};

calcValores(1, 2);

//2

function ladoTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
  } else if (lado1 === lado2) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

//3

function params(base, expoente) {
  return base ** expoente;
}

console.log(params(2, 3));

//4

function divisao(dividendo, divisor) {
  console.log("Resultado: " + Math.floor(dividendo / divisor));
  console.log(`Resto: ${dividendo % divisor}`);
}

divisao(11, 4);

//5

function retornaValorDecimal(valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`;
  console.log(valorEmReais);
}

formatarValorDecimal(0.1 + 0.2);

//6
function contaUm(capitalInicial, taxa, tempo) {
  return capitalInicial + capitalInicial * taxa * tempo;
}

function contaDois(capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo;
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));

//7

function bhaskara(ax2, bx, c) {
  let resultados = [];
  let delta = bx ** 2 - 4 * ax2 * c;

  if (delta < 0) {
    return "Delta é negativo";
  }
  let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
  resultados.push(x1);
  resultados.push(x2);
  return resultados;
}

//A função Math.sqrt() retorna a raiz quadrada de um número

console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));

//8
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function avaliaPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(", ");
  let qtdQuebraDeRecords = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacoes[0];
  let menorPontuacao = pontuacoes[0];

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i];
      qtdQuebraDeRecords++;
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraDeRecords, piorJogo];
}

console.log(avaliaPontuacoes(stringPontuacoes));

//9
function classificaAluno(nota) {
  let notaCorrigida = arredondar(nota);

  if (notaCorrigida >= 40) {
    console.log(`Aprovado com nota ${notaCorrigida}`);
  } else {
    console.log(`Reprovado com nota ${notaCorrigida}`);
  }
}

function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5));
  } else {
    return nota;
  }
}

classificaAluno(100);
classificaAluno(30);
classificaAluno(38);
classificaAluno(88);
classificaAluno(61);

//10
function verificaNumero(n) {
  if (n % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaNumero(3));

//11
function anoBissexto(ano) {
    let bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
    console.log(bissexto)
}
