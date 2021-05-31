function Carro(velocidadeMax = 200, delta = 5){

    //Atributo privado, pertence somente ao escopo da função, quando a função é instanciada
    //não se tem acesso direto a esse atributo, para criar atributo privado use let, const ou var
    let velocidadeAtual = 0;

    //Metodo publico, para criar um atributo ou metodo publico, use o this
    //tudo que estiver com this se torna visivel fora da função
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
           velocidadeAtual += delta
        }else{
           velocidadeAtual = velocidadeMax
        }
    }

    //Esse metodo é publico, ele apenas retorna o valor da velocidadeAtual
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
    
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())