//Função anonima é uma função sem nome

const soma = function(a,b){
    return a + b
}

//A constante armazena uma função que recebe 2 parametros e tambem recebe uma função
//caso não seja passada uma função, ela assume a função soma como deafault
const imprimiResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

//Não foi passado a função, entã assumiu a função soma como padrão
imprimiResultado(5,5)

//Como foi passado a função como parametro, ele assume a função passada
imprimiResultado(5,5, function(a, b){
    return a-b
})

//passando uma arrow function
imprimiResultado(5,5, (a,b) => a*b)

const pessoa = {
    falar: function(){
        console.log('Oi')
    }
}
pessoa.falar()

//ou usando arrow function
const pessoa = {
    falar: () => console.log('Oi')
}

pessoa.falar()