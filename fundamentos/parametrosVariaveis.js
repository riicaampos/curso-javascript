/**
 * arguments é um array interno de uma função, vai ter todos os argumentos passados
 * para acessar os parametros passados basta fazer um for in no arguments
 */

function soma(){
    let result = 0
    for(i in arguments){
       result += arguments[i]
    }

    return result
}


console.log(soma())
console.log(soma(10))
console.log(soma(1,2,3,4,5,6,7,8,9,10))

//No caso de passar string ele concatena
console.log(soma("Testando"," parametros"))

//Caso passado string e numeros ele soma os numeros e concatena a string
console.log(soma(1,2," String"))
