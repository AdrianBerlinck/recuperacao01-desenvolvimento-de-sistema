import leia from 'readline-sync';


export default function atividade02() {
  console.log('Atividade 02');
  var temperatura = leia.questionInt('Informe a Temperatura: ');
  console.log('Informe a Unidade da Temperatura informada: ');
  var unidade_de_medida = leia.keyInSelect(['Celsius', 'Kelvin', 'Fahrenheit']) + 1;
  var unidade_conversao;
  var temperatura_convertida = 0;
  switch (unidade_de_medida) {
      case 1:
          console.log('Unidades Disponiveis para Conversao: ');
          unidade_conversao = leia.keyInSelect(['Kelvin', 'Fahrenheit']) + 1;
          break;

      case 2:
      case 1:
          console.log('Unidades Disponiveis para Conversao: ');
          unidade_conversao = leia.keyInSelect(['Celsius', 'Fahrenheit']) + 1;
          break;

      case 3:
      case 1:
          console.log('Unidades Disponiveis para Conversao: ');
          unidade_conversao = leia.keyInSelect(['Celsius', 'Kelvin']) + 1;
          break;

  }

  if (unidade_de_medida === 1 && unidade_conversao === 1) {
      temperatura_convertida = temperatura + 273;
  }
  if (unidade_de_medida === 1 && unidade_conversao === 2) {
      temperatura_convertida = (temperatura * (9 / 5)) + 32
  }
  if (unidade_de_medida === 2 && unidade_conversao === 1) {
      temperatura_convertida = temperatura - 273;
  }
  if (unidade_de_medida === 2 && unidade_conversao === 2) {
      temperatura_convertida = (temperatura - 273.15) * (9 / 5) + 32
  }
  if (unidade_de_medida === 3 && unidade_conversao === 1) {
      temperatura_convertida = (temperatura - 32) * (5 / 9)
  }
  if (unidade_de_medida === 3 && unidade_conversao === 2) {
      temperatura_convertida = (temperatura - 32) * (5 / 9) + 273.15
  }

  temperatura_convertida = Number(temperatura_convertida.toFixed(0));
  console.log('Temperatura Convertida: '+ temperatura_convertida + ' Graus' );

}


// Questão 02
// Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

// Celsius para Fahrenheit = F = (C * 1.8) + 32 Fahrenheit para Celsius = C = (F - 32) * (5/9)

// Celsius para Kelvin = K = C + 273.15 Kelvin para Celsius = C = K - 273.15

// Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32