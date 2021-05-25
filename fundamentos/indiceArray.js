const arrayNum = [12, 15, 5.5, 10, 250]

/**Pega o indice do array usando a palavra chave in e atribui a varivel i
 * não esquecer também de usar o let, pois se não essa variavel de contador podera
 * ser usada fora do escopo
**/
for(let i in arrayNum){
    console.log(`indice ${i} valor ${arrayNum[i]}`)
}


//Cria um objeto pessoa
const pessoa = {
    nome: "Ricardo",
    sobrenome: "Campos",
    idade: 29,
    peseo: 123
}

/**percorre os atributos do objeto pessoa, atribuindo o nome a variavel atributo,
para exibir basta usar objeto[nomeVariavel]
**/
for(let atributo in pessoa){
    console.log(`Atributo: ${atributo} valor: ${pessoa[atributo]}`)
}