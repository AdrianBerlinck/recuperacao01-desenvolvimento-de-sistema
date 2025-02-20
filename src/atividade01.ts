import leia from 'readline-sync';


export default function atividade01() {
  console.log('Atividade 01');
  let dias = leia.questionInt('Informe a quantidade de dias hopspedado: ');
  let diaria = 0;

  if (dias <= 5) {
    diaria = 100;
  } else if (dias >= 6 && dias <= 10) {
    diaria = 90;
  } else {
    diaria = 80;
  }
  console.log(`Valor total: ${(diaria*dias)}`);
  console.log(`Valor diaria: ${diaria}`);
}


// Questão 01
// Crie um algoritmo para um calcular o valor de uma hospedagem. Você deve solicitar ao usuário a quantidade de diárias e também a idade do hospede. Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. Ao final o algoritmo deve informar o valor total da hospedagem.

// Menor ou igual a 5 dias - R$100,00 a diária
// De 6 até 10 dias - R$90,00 a diária
// A partir de 11 dias - R$80,00 a diária