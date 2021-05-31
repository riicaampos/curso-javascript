/**
 * A ideia do callback é, você passar uma função, para uma outra função e quando um determinado evento
 * acontecer, essa função que você passou vai ser chamada de volta.
 */
const fabricante = ["Mercedez","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice} - ${nome}`)
}

/**
 * para cada elemento que ele encontrar dentro do array, ele vai chamar de volta a função, para
 * cada elemento que ele encontrar, e ai ele vai passar os parametros corretos e imprimir no console
 */
fabricante.forEach(imprimir)
fabricante.forEach(a => console.log(a))


/**
 * CALLBACK AULA 2
 */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Extraindo notas menores que 7 sem o callback
let notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7)
    notasBaixas1.push(notas[i])
}

console.log(notasBaixas1)

//Usando o callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


document.getElementsByTagName('body')[0].onclick = e => console.log('O Evento ocorreu')

