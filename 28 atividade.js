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
        if ((num1 % num2) > 0){
            return(`Divisao: ${num1 / num2} Resto da divisão: ${num1 % num2}`)
        }else{
            return(`Divisao: ${num1 / num2}`)
        }

    }
    return resultado;
}
