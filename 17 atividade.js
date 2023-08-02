/*
Instruções do projeto
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

 
Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/


//1. para guardar os nomes de dez pessoas;
let nome = ['silvio', 'joao', 'maria', 'joaquim', 'ana', 'roberto', 'carlos', 'leal', 'canide', 'cecilia'];
//2. para guardar as suas idades;
let idade = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//3. para guardar as suas cores favoritas.
let cor = ['azul', 'preto', 'branco', 'cinza', 'amarelo', 'vermelho', 'verde', 'prata', 'lilas', 'violeta'];

// imprima essas listas
for (let i = 0; i < nome.length; i++) {
console.log("nome: ", nome[i], " , idade: ", idade[i], " cor: ", cor[i]);
}

//faça algumas modificações, alterando uma cor e uma idade
cor[0] = "caramelo";
idade[0] = 120;

//imprima novamente todas as informações das três listas.
for (let i = 0; i < nome.length; i++) {
    console.log("nome: ", nome[i], " , idade: ", idade[i], " cor: ", cor[i]);
    }

    