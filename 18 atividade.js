/*
Instruções do projeto

Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um   e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/


//você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.
let animal = [
    ["manga larga", "equino", 8 ],
    ["nelore", "bovino", 2],
    ["caninde", "caprino", 1]
]

//exibir conteudo da matriz
ExibirMatriz();

//caso deseje adicionar mais linhas...
animal.push(["pastor alemao", "canina", 5]);

//exibir conteudo da matriz com linha adicionada
ExibirMatriz();



//função para exibir matriz atual
function ExibirMatriz(){
    animal.forEach(row => {
        row.forEach(element => {
            console.log(element);
        });
    });
}

