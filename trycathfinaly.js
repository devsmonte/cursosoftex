//SOMA 2 NUMERO, VALIDA SE SÃO NUMEROS E EXIBE A ENTRADA NO FINAL

const entrada = require('prompt-sync')({ sigint: false });
let num1 = parseFloat(entrada("Digite o 1º número: "));
let num2 = parseFloat(entrada("Digite o 2º número: "));

try {
    if (!isNaN(num1) | !isNaN(num2)) {
        console.log(num1 + num2)
      }
    
} catch (error) {

    console.log(error)

} finally{

    console.log(`Você digitou em n 1º número: ${num1} e no 2º número: ${num2}` )
}