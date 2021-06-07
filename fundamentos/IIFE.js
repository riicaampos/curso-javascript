/**IIFE -> Immediatly Invoke Function Expression
 * um bom uso para isso, é quando você está usando o browser e quer fugir do escopo global, quando você
 * cria uma função auto invocada, quando o seu script é lido, aquele trecho de codigo que está dentro
 * da função ja vai ser chamado, ja vai ser executado, só que tudo que você criar dentro da função, vai ser 
 * escopo local da função e não escopo global, é isso pode ajudar a evitar manipular coisas diretmanete
 * no escopo global
 * 
**/

(function(){
   console.log('Executando imediatamente')
})()