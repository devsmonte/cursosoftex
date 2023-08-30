let banco = {
conta: 123,
saldo: 2000,
tipoConta: "corrente",
agencia: 456,

buscarSaldo: function(){
return this.saldo
},

deposito: function(valor){
this.saldo += valor
},

saque: function (valor){
    this.saldo -= valor
},

numeroConta: function(){
return this.conta
}

}

banco.deposito(500)
saldo = banco.buscarSaldo()
console.log(saldo)

banco.saque(300)
saque = banco.buscarSaldo()
console.log(saque)

conta = banco.numeroConta()
console.log(conta)

