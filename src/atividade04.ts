import leia from 'readline-sync';

export default function atividade04() {
  
  console.log('Atividade 04');
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  let tamanho_senha = leia.questionInt('Informe a quatidade de caracteres desejados na senha: ');
  let pass: string = '';

  for (var i = 0; i < tamanho_senha; i++) {
    let aux_random = Math.floor(Math.random() * char.length);
    pass = pass + char[aux_random];
  }
  console.log(pass);


}


// Escreva um algoritmo que gere uma senha aleatória de comprimento
// especificado pelo usuário. Você deve solicitar ao usuário o tamanho
// da senha e gerar de forma aleatório. A senha deve conter uma combinação
// de letras maiúsculas, minúsculas, números e caracteres especiais.

// var char = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&']