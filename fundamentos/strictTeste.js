/**
 * caso o 'use strict' seja declarado aqui no começo do script, tudo que está 
 * abaixo dele entrará no contexto do strict, caso declarado dentro de uma função,
 * apenas o que está dentro da função.
 */
function teste(){
    return this
}


function teste2(){
    return this;
}

/**Se o 'use strict' for removido a condição abaixo será true, pois o contexto da função
 * será o global, quando você adiciona o 'use strict' e compara a chamada da função com gobal
 * será false, pois o contexto da função já não é mais global
**/
console.log(teste() === global)
console.log(teste2() === global)

