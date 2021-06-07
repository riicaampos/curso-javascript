function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //como você já tem uma função com esse nome, ele cria o atributo e associa a função gePreço
}


/**Chmando diretamenta a função getPreço
 * o resultado da chama é um NaN, porque neste contexto o this do preço não está definido
**/

global.preco = 20
global.desc = 0.1
console.log(getPreco())

//Posso chamar também o getNumber a partir de um objeto
console.log(produto.getPreco())

//Outras 2 formas de executar essas funções é atraves do call e do apply

const carro = {preco: 49990, desc: 0.20}

//Oobjeto é passado como contexto para o call e o apply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//O que diferencia o call do apply é como são passado so parametros

//Call, primeiro parametro é sempre o contexto
console.log(getPreco.call(carro, 0.17, '$'))

//Apply, primeiro parametro contexto, e o restante deve estar em um array
console.log(getPreco.apply(global, [0.17, '$$']))

