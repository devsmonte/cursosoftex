/*
Instruções do projeto
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.  
const entrada = require('prompt-sync')({ sigint: false });
*/






/*
************************************************************************************
Vou tentar comentar o que achar válido para ajudar quem estiver com dificuldades.
************************************************************************************
*/


//Declarando a constante para receber informações do usuário.
const entrada = require('prompt-sync')({ sigint: false });

//Declaração das variáveis
let candidato_X=0, candidato_Y=0, candidato_Z=0, votoBranco=0, votoNulo=0, sair;
let condicao = true;

//Início do laço de votação.
do {

//Exibição do munu dos candidatos.
console.log("Escolha seu candidato. Digite o número dele: ");
console.log("889 - candidato_X");
console.log("847 - candidato_Y");
console.log("515 - candidato_Z");
console.log("0   - branco");
console.log("");

//Recebendo voto do usuário e convertendo para inteiro.
let voto = parseInt(entrada());

//Validando se o que foi digitado pelo usuário é um número inteiro.
if (Number.isInteger(voto) == true) {
 
    //Contabilizando os votos.
    if (voto == 889){                       //candidato_X => 889
        candidato_X = candidato_X + 1;
    }else if(voto == 847){                  //candidato_Y => 847
        candidato_Y = candidato_Y + 1;
    }else if(voto == 515){                  //candidato_Z => 515
        candidato_Z = candidato_Z + 1;
    }else if(voto == 0){                    //branco => 0
        votoBranco = votoBranco + 1;
        votoNulo = votoNulo + 1;            //Um dos requisitos foi: Voto em branco deve ser tratado como nulo. Acho que foi um erro na edição da atividade porém considerei o que estava escrito.
    }else{
        votoNulo = votoNulo + 1;            //Voto nulo
    }

    //O requisito era: Após o voto perguntar se deseja finalizar. Esse bloco finaliza caso a opção seja 1.
    console.log("Deseja finalizar a votação?");
    console.log("1 - SIM    2 - NÂO");
    sair = entrada();
    if(sair == 1){
        condicao == false; //Condição de encerramento do laço.
        break;
    }

//Requisito era se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
} else {
    console.log("Escolha um dos candidatos. Vote novamente!");
}
    
} while (condicao == true);

//Verificando qual dos candidatos recebeu maior quantidade de votos.
if (candidato_X > candidato_Y && candidato_X > candidato_Z){
    console.log("O candidato_X venceu! com ", candidato_X, " votos!");
    console.log("Votos do candidato-Y ", candidato_Y, " votos.")
    console.log("Votos do candidato-Z ", candidato_Z, " votos.")
    console.log("Votos brancos: ", votoBranco, " Votos nulo: ", votoNulo)

 }else if (candidato_Y > candidato_X && candidato_Y > candidato_Z){
    console.log("O candidato_Y venceu! com ", candidato_Y, " votos!");
    console.log("Votos do candidato-X ", candidato_X, " votos.")
    console.log("Votos do candidato-Z ", candidato_Z, " votos.")
    console.log("Votos brancos: ", votoBranco, " Votos nulo: ", votoNulo)

 }else if (candidato_Z > candidato_X && candidato_Z > candidato_Y){
    console.log("O candidato_Z venceu! com ", candidato_Z, " votos!");
    console.log("Votos do candidato-X ", candidato_X, " votos.")
    console.log("Votos do candidato-Y ", candidato_Y, " votos.")
    console.log("Votos brancos: ", votoBranco, " Votos nulo: ", votoNulo)

 } else{                                         //Tratando empate.
    console.log("Houve empate em votos!");
    console.log("Votos do candidato-X ", candidato_X, " votos.")
    console.log("Votos do candidato-Y ", candidato_Y, " votos.")
    console.log("Votos do candidato-Z ", candidato_Z, " votos.")
    console.log("Votos brancos: ", votoBranco, " Votos nulo: ", votoNulo)
 }



//Autor: Silvio Monte | silvio81@gmail.com




