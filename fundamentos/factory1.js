/**
 * Função factory, uma função que retorna um objeto.
 * 
 */

//Função factory simples
function criarPessoa(){
    return{
        nome: 'Ricardo',
        sobrenome: 'Campos'
    }
}

console.log(criarPessoa())

/**Função factory com parametros
 * se o nome dos atributos do objeto, for igual o nome dos parametros recebidos,
 * nao precisa fazer nome: nome pode usar simplesmente nome como feito abaixo
**/
function criarPessoa2(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa2('Nicolas','Tretel'))

const p1 = criarPessoa2('Suelen', 'Moretti')
const p2 = criarPessoa2('Adriana', 'Peres')

console.log(p1,p2)