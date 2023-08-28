const entrada = require('prompt-sync')({ sigint: false });

let nota1 = parseFloat(entrada("Digite a 1ª nota: "))
let nota2 = parseFloat(entrada("Digite a 2ª nota: "))
let nota3 = parseFloat(entrada("Digite a 3ª nota: "))

console.log(`Sua média é: ${((nota1 + nota2 + nota3) / 3)}`)
