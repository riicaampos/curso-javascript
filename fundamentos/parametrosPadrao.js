/**
 * Um dos jeitos de setar um valor padrão
 * usando o operador || (ou), quando o valor de uma variavel é null ou undefinded,
 * ele vai para um segundo operando de uma operação || e retorna o segundo operando caso a
 * primeira parte seja falsa.
 * ATENÇÃO!!!!
 * caso você tenta passar 0 ele vai resolver para false e vai usar o valor default
 */
function soma(a,b,c){
    a = a || 1 //a recebe a ou 1
    b = b || 1
    c = c || 1

    console.log(a+b+c)
}

//Aqui no caso o resultado esperado seria 10, mas como foi passado 0 ele resolveu para falso e caiu no valor padrão
soma(5,5,0)


/**
 * Segundo jeito
 * a  = verifica se é diferente de undefined se for retorna o argumento se não retorna o padrão 1
 * b = pega a segunda posição no arguments no caso o b se tive preenchido retorna o valor se não retorna 1
 * c = verifica se o parametro é realmente um numero, se não for retorna 1 e se for um numero retorna ele msm
 */
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    console.log(a+b+c)
}

soma2(1,2,3)
soma2(1,2,"teste")

/**
 * Jeito mais moderno no ecmascript 2015
 */
function soma3(a = 1, b = 1, c = 1){
    console.log(a+b+c)
}
