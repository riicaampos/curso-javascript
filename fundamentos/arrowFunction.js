let dobro = function(a){
     return 2*a
}

dobro = (a) =>{
    return 2*a 
}

/**
 * a é o parametro
 */
dobro = a => 2*a
dobro = _ => 2*_

console.log(dobro(2))

/**
 * O returne é implicito
 * porem se você optar por usar o {} você deve colocar o return
 */
ola = () => 'Olá'

/**
 * Quando usado uma arrow function o this não varia, ele continua no contexto da função Pessoa aqui
 * no caso.
 */
function Pessoa(){
    this.idade = 0

    setInterval(() =>{
       this.idade++
       console.log(this.idade)
    },1000)
}

new Pessoa()