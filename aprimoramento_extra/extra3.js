// Importa a biblioteca 'readline' para capturar a entrada do usuário no terminal
const readline = require("readline");

// Configuração para capturar entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pede para o usuário digitar um número de 1 a 7
rl.question(
  "Digite um número de 1 a 7 para ver o dia da semana: ",
  function (dia) {
    // Converte a entrada do usuário para número inteiro
    dia = parseInt(dia);

    // Estrutura switch case
    switch (dia) {
      case 1:
        console.log("Domingo");
        break;
      case 2:
        console.log("Segunda-feira");
        break;
      case 3:
        console.log("Terça-feira");
        break;
      case 4:
        console.log("Quarta-feira");
        break;
      case 5:
        console.log("Quinta-feira");
        break;
      case 6:
        console.log("Sexta-feira");
        break;
      case 7:
        console.log("Sábado");
        break;
      default:
        console.log("Número inválido! Escolha um número de 1 a 7.");
    }

    // Fecha a interface de leitura após a execução
    rl.close();
  }
);
