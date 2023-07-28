/*
Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

const entrada = require('prompt-sync')({ sigint: false });


console.log("Calculadora")
let num1 = entrada("Digite o 1º número: ");
let num2 = entrada("Digite o 2º número: ");
let operador = entrada("Digite a operação, ex.: + - / * ");

console.log(calculadora(num1, num2, operador));

function calculadora(num1, num2, operador) {
    let resultado;
    if (operador == "+") {
        resultado = parseFloat(num1) + parseFloat(num2);
    } else if (operador == "-") {
        resultado = parseFloat(num1) - parseFloat(num2);
    } else if (operador == "*") {
        resultado = parseFloat(num1) * parseFloat(num2);
    } else if (operador == "/") {
        resultado = parseFloat(num1) / parseFloat(num2);
    }
    return resultado;
}