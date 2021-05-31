const pessoa ={
   saudacao: "Bom dia",
   
   falar(){
     console.log(this.saudacao)
   }

}

pessoa.falar()

const teste = pessoa.falar
/**
 * Isso gera um conflito, pois saudacao está apontando para um this diferente
 * que não é mais o objeto pessoa, e esse objeto que é apontado a partir da chamada
 * dessa função não tem saudacao e da undefined, ai é chamado falar diretamente do contexto do
 * node e nao do contexto pessoa
 */
teste()

/**
 * Quando você usa o bind, quer dizer que quando você chamar a constante, o contexto sempre
 * será resolvido para o contexto passado no bind, no caso aqui pessoa.
 * O bind ele amarra um determinado objeto para ser o dono da execução daquele metodo
 * sempre que ele for chamado, a função bind retorna uma outra função com o contexto passado
 */
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()


//THIS E BIND AULA 2

/**
 * 2 formas de fazer, a primeira é usando o bind no metodo
 * a segunda é criando uma constante e amarrando o contexto a constante
 */
function Pessoa(){
    this.idade = 0

    const self = this //atribui o contexto a constante self

   setInterval(function () {
     self.idade++
     console.log(self.idade)
   }/** .bind(this)*/,1000)// 1000 millisegundos representa 1 segundo, a cada 1 segundo essa função é disparada

}

new Pessoa