/**
 * Quando o JavaScript carrega ele carrega todas as funções primeiro, então usando uma 
 * function declaration, você pode chamar ela antes mesmo da declaração, pois o interpretador
 * do JavaScript já carregou as funções, isso não acontece com as demais pois as constantes
 * que armazena a função ainda não foram declaradas
 */

//function declaration
function soma(a, b){
    return a+b
}

//function expression
const sub = function(c,d){
    return c-d
}

//named function expression
const mult = function mult(e, f){
    return e*f
}