/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

const entrada = require('prompt-sync')({ sigint: false });

let condicao = true;
let opcaoMenu;



do {
    console.log("Escolha uma das opções:");
    console.log("1: Soma");
    console.log("2: Subtração");
    console.log("3: Multiplicação");
    console.log("4: Divisão");
    console.log("0: Sair");
    opcaoMenu = parseInt(entrada());

    switch (opcaoMenu) {
        case 0:
            condicao = false;
            break;

        case 1:
            calculadora("+");
            break;

        case 2:
            calculadora("-");
            break;

        case 3:
            calculadora("*");
            break;

        case 4:
            calculadora("/");
            break;

        default:
            console.log("Digite uma opção válida! tente novamente!")
            break;
    }

} while (condicao == true);

function calculadora(operador) {
    let num1 = parseInt(entrada("Digite o 1º numero: "));
    let num2 = parseInt(entrada("Digite o 2º numero: "));
    let resultado;

    if (operador == "+") {
        resultado = num1 + num2;
    } else if (operador == "-") {
        resultado = parseFloat(num1) - parseFloat(num2);
    } else if (operador == "*") {
        resultado = parseFloat(num1) * parseFloat(num2);
    } else if (operador == "/") {
        resultado = parseFloat(num1) / parseFloat(num2);
    }

    console.log("Resultad0: ", resultado);
    //return resultado;
}





