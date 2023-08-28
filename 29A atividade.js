const entrada = require('prompt-sync')({ sigint: false });

console.log("Calculadora")
let nota1 = parseFloat(entrada("Digite o 1º nota: "));
let nota2 = parseFloat(entrada("Digite o 2º nota: "));
let nota3 = parseFloat(entrada("Digite o 2º nota: "));

console.log((nota1 + nota2 + nota3)/3 >= 7 ? "Aprovado" : "Reprovado") 
