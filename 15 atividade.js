/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/
const entrada = require('prompt-sync')({ sigint: false });

let condicao = true

let nome = entrada("Digite seu nome completo: ");
do {

    try {
            
        console.log("Digite o ano de nascimento. entre 1922 e 2023");
        let nascimento = parseInt(entrada());

        if(nascimento >= 1922 && nascimento <= 2023){
            let idade = 2023 - nascimento;
            console.log(nome, " Idade que completou com completará: ", idade);
            condicao = false;
        }else {
            console.log("Digite uma valor correto!")
        }

    } catch (error) {
        console.log(error.message)
    }
    
} while (condicao == true);



