function Pessoa(nome,idade){
    this.next = null;
    this.nome = nome;
    this.idade = idade;
}

function LinkedListPessoa(){
this.root = null;
this.tail = null;

this.add = (nome, idade) =>{
    const newData  = new Pessoa(nome, idade);
    if (!this.root){
        this.root = newData;
        this.tail = newData;
    }else {
        this.tail.next = newData;
        this.tail = this.tail.next;
    }
};

this.print = (separator = '->') =>{
    const result = [];
    let temp = this.root;
    while(temp){
        result.push(temp.nome, temp.idade);
        temp = temp.next;
    }
    return result.join(separator);
};

}

const list = new LinkedListPessoa();

list.add("Silvio", 30);
list.add("joao", 50);
list.add("maria",200);
console.log(list.print());