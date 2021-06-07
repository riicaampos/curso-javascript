//Criando com função construtora
function Pessoa(nome){
    this.nome = nome

 this.falar = function() {
     console.log(`Meu nome é ${nome}`)
 }

}

const p1 = new Pessoa('Ricardo')
p1.falar()


//criando com classe
class Pessoas{

    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Oi eu sou ${this.nome}`)
    }

}

const p2 = new Pessoas('Goku')
p2.falar()