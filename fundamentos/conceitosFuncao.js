/**
 * Função em JavaScrip é First Class Object (Citizen) (é quando a linguagem trata a função como dado)
 * tambem chamado de Higher Order Function
 * uma função em JS é um dado também, pode ser amrmazeado em uma variavel, pode ser passado
 * como parametro, pode ser retornada, pode ter uma função com outra função dentro
 */


//Função literal, pode ou não receber parametro, pode ou não retornar
function func1(){

}

//Armazenando em uma constante
const func2 = function funcConst(){ 
    console.log("Testando")
}
//fazendo a chamada da função pela constante
func2()

//armazenando a função no array
//pode amarazenar uma função, ou pode declarar uma função dentro do array
const funcArray = [function(a,b){return a+b},func2, func1]

//acessando a função no array
console.log(funcArray[0](1,3))
console.log(funcArray[1]())

//Armazenar a função em um abtributo de objeto
const pessoa = {}
pessoa.falar = function() {console.log("oi")}
pessoa.falar()

//Passando função como parametro
//lembrando que, se oq for passado não for uma função vai dar erro
function fun4(fun){
    fun()
}

//Pode tanto chamar uma função que ja existe como criar uma como parametro
fun4(function(){console.log("Executando função 4")})
fun4(funcArray[1])


//Função dentro de outra função
function fun5(a,b){
    return function(c){
         console.log(a+b+c)
    }
}

//chamada, passa os parametros da primeira função, e depois da segunda
fun5(5,5)(2)

//Outra forma, armazena a funçao de retorno em uma constante, e depois usa a função armazenada a partir da constante
const res = fun5(5,5)
res(3)


const funcArray = [(a, b) => console.log(a + b)];
 
/**
 * 
 * @param {*} fun 
 * @param  {...any} params 
 *
 * Outro jeito de passar a função armazenada em um array
 * nessa caso a função recebe parametros
 * então é usado ...params para ser passado qualquer quantiade de parametros
 * é ai verifica se a função passada recebe ou não parametros.
 * */
function fun4(fun, ...params) {
  if (params) fun(...params)
  else fun();
}
 
fun4(function () {
  console.log('Executando função 4');
});
 
fun4(funcArray[0], 3, 2);

