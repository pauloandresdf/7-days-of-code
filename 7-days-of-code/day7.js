function calculadora() {
  let opcao;
  do {
      opcao = prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
      
      if (opcao === "5") {
          console.log("Até a próxima!");
          break;
      }
      
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      let resultado;

      switch (opcao) {
          case "1":
              resultado = soma(num1, num2);
              console.log(`Resultado: ${resultado}`);
              break;
          case "2":
              resultado = subtracao(num1, num2);
              console.log(`Resultado: ${resultado}`);
              break;
          case "3":
              resultado = multiplicacao(num1, num2);
              console.log(`Resultado: ${resultado}`);
              break;
          case "4":
              resultado = divisao(num1, num2);
              console.log(`Resultado: ${resultado}`);
              break;
          default:
              console.log("Opção inválida! Tente novamente.");
      }
  } while (opcao !== "5");
}

calculadora();



