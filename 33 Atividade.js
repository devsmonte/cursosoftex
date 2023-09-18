
class Carro {
    constructor(marca, modelo, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }
    acelerar(){
        this.velocidade +=10;
    }

    desacelerar(){
        this.velocidade -= 10;
    } 

    parar(){
        this.velocidade = 0;
    }

}

class Cachorro {
    constructor(raca, idade) {
        this.raca = raca;
        this.idade = idade;

    }
    andar(){
        console.log("Andando!");
    }

    correr(){
        console.log("Correndo!");
    } 

    latir(){
        console.log("Latindo!");
    }

}

class Estudante {
    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;

    }
    alterarNome(novoNome){
        this.nome = nome;
    }

    alterarMatricula(novaMatricula){
        this.matricula = matricula;
    } 

    alterarCurso(novoCurso){
       this.curso = novoCurso;
    }

}

class Conta {
    constructor(nome, conta, saldo) {
        this.nome = nome;
        this.conta = conta;
        this.saldo = saldo;

    }
    alterarNome(novoNome){
        this.nome = novoNome;
    }

    alterarConta(novaConta){
        this.conta = novaConta;
    } 

    deposito(deposito){
       this.saldo += deposito;
    }

}

let carro1 = new Carro("toyota", "corolla", 2024, 0);
carro1.acelerar;
carro1.desacelerar;
carro1.parar;

let cachorro1 = new Cachorro("Pastor", 10);
cachorro1.andar();
cachorro1.latir();
cachorro1.correr();

let conta1 = new Conta("Joao", 123, 300);
conta1.alterarConta(456);
conta1.alterarNome("Jose");
conta1.deposito(200);
