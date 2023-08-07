/*
Instruções do projeto
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/


//FILA - (FIFO: First-In-First-Out)
const fila = [3, 7, 9, 1, 0];

console.log("Saída da fila: ");
while(fila.length != 0){
    console.log(fila[0]);
    fila.shift();
}
//sequencia dos removidos: 3 - 7 - 9 - 1 - 0


//PILHA - (LIFO: Last-In-First-Out)
const pilha = [3, 7, 9, 1, 0];

console.log("Saída da pilha: ");
while(pilha.length != 0){
    console.log(pilha[pilha.length - 1]);
    pilha.pop();
}
//Sequencia dos removidos: 0 - 1 - 9 - 7 - 3


//LISTA - Remoção atraves dos indices
const lista = [3, 7, 9, 1, 0];

//Declarando a constante para receber informações do usuário.
const entrada = require('prompt-sync')({ sigint: false });

//laço para exibir e remover lista
do {
    exibirLista();
    removerItemLista();
 
} while (lista.length !== 0);


//Função para remover item da lista
function removerItemLista(){
    console.log("Qual elemento deseja excluir: ");
    let elemento = parseInt(entrada());
    const indice = lista.indexOf(elemento);

    console.log(indice);

    
    if(indice !== -1){
        console.log("Elemento excluido:", lista[indice]);
        lista.splice(indice , 1);
        
    }else {
        return console.log('Elemento não encontrado na lista')
    }
    
}

//Função para exibir itens da lista
function exibirLista(){
    lista.forEach((element, index) =>  {
        console.log(`Elemento: ${element}`);
    });
}

