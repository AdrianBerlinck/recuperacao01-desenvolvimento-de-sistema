import leia from 'readline-sync';


export default function atividade03() {
  console.log('Atividade 03');

  const numeros: number[] = [];
  let numero_digitado;
  while (numero_digitado != 0) {
    numero_digitado = leia.questionInt('Informe um numero (0 ira parar a execucao): ');
    if (numero_digitado != 0) {
      numeros.push(numero_digitado);
    }

  }
  let soma = 0;
  let media = 0;
  for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  media = soma / numeros.length;
  console.log(numeros);
  console.log(`Soma dos numeros: ${soma}`);
  console.log(`Media dos numeros: ${media}`);
}

// Questão 03
// Crie um algoritmo que leia uma quantidade n de números inteiros fornecida
// pelo usuário e armazene esses números em um vetor. O algoritmo deve parar
//  de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo
//   deve calcular e imprimir a média desses números, a soma de todos os números
//   o maior e menor digitado. (Desconsiderar o 0).