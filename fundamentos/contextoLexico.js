/**
 * O contexto lexico que a função foi declarada é dentro do proprio arquivo.
 * 
 */
const valor = 'Global'

function imprimir(){
    console.log(valor)
}

function imprimir2(){
    const valor = 'Interno'
    imprimir()
}

/**
 * Quando a chamada da função for feita, ele vai entrar na função imprimir2(), vai criar a constante
 * valor valendo 'Interno', e vai chamar a função imprimir(), como função imprimir() nao tem
 * uma declaração de valor dentro dela, é esperado que ela busque no escopo mais externo,
 * que no caso é o escopo da função imprimir2() que chamou ela e então imprimiria 'Interno', porem
 * isso não ocorre, porque a função não tem apenas o seu conteudo, ela tem consciência da onde ela
 * foi definida, como a função imprimir() foi chamada, passa a valer o escopo dela, e quem está
 * no escopo mais externo é a declaração const valor = 'Global' por isso é impresso 'Global' no console,
 * a função sempre carrega com ela o local onde ela foi definido, e busca o local onde ela foi definida e nao
 * onde ela está sendo executada
 */
imprimir2()