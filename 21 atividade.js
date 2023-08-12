/*
Instruções do projeto

OBS: FIZ O CÓDIGO PARA LOCALIZAR E RETORNAR O INDICE DE UM VALOR DIGITADO PELO USUÁRIO.

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/


const entrada = require('prompt-sync')({ sigint: false });

let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

let numero = parseInt(entrada("Qual número deseja encontrar:  "));


if (BuscaLinear(array, numero) !== 0) {
    console.log('Elemento encontrado! Posiçao: ' + BuscaLinear(array, numero));
} else {
    console.log('Elemento não encontrado.')
}


function BuscaLinear(array, numero) {

    if (array.indexOf(numero) >= 0) {
        return (array.indexOf(numero));
    }
    else {
        return 0;
    }

}



