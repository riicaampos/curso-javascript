/**
 * Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */


const calcula = (base = 0, exp = 0) => {
    return base ** exp
    //pou pode ser usado Math.pow(base,exp)
}

console.log(calcula(2,3))