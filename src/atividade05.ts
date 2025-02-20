export default function atividade05() {
  console.log('Atividade 05');

  let numeros_sorteados: number[] = [];
  let verde = 0;
  let vermelho = 0;
  let preto = 0;
  let valor_percentual = 37 * 0.4;
  for (var i = 0; i < 37; i++) {
    let aux = Math.floor(Math.random() * 36);
    numeros_sorteados.push(aux);

  }
  for (var i = 0; i < numeros_sorteados.length; i++) {
    if (numeros_sorteados[i] === 0) {
      verde++;
    }
    if (numeros_sorteados[i] % 2 === 1) {
      vermelho++;
    }
    if (numeros_sorteados[i] % 2 === 0) {
      preto++;
    }
  }
  console.log('Repeticao de cada cor');
  console.log(`Verde: ${verde}`);
  console.log(`Vermelho: ${vermelho}`);
  console.log(`Verde: ${preto}`);
  if (verde > valor_percentual || vermelho > valor_percentual || preto > valor_percentual) {
    console.log('Roleta viciada');
  } else {
    console.log('Roleta Ok');
  }
  console.log(numeros_sorteados)
}


// Questão 05
// Escreva um algoritmo para verificar se uma roleta de cassino é viciada.
//  A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os
//  demais são divididos igualmente entre vermelho e preto
//  (impares são vermelho, pares são pretos). O programa deve contar quantas
//   vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma
//   cor tem uma frequência maior que 40%. Se houver, o programa deve indicar
//   que a roleta pode estar viciada.