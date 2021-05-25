/**
break -> não influencia em um bloco do tipo if/else, funciona no switch, for e tambem while
continue -> funciona dentro de um laço for e while

no caso do break ele sai do laço e executa a próxima instrução fora do laço, o continue, ele igonra
a instrução mas continua no laço
**/

const nums = [1,2,3,4,5,6,7,8,9,10]


for(let x in nums){
    if(x == 5){
        break
    }

    //console.log(`Indice: ${x} valor: ${nums[x]}`)
}

for(let x in nums){
    if(x == 5){
        continue
    }

    //console.log(`Indice: ${x} valor: ${nums[x]}`)
}

/**
 * ROTULO
 * quando você tem um for dentro de um for, voce pode associar o for externo a um rotulo
 * caso você queira sair dele quando atingir uma determinada condição, você usa o break e o
 * nome do rotulo conforme o exemplo abaixo, caso ão tivesse usado o rotulo ele sairia apenas do
 * for mais interno e continuaria executando o for externo, entrando novamente no for.
 * EVITAR USAR ROLTULOS
 */

externo:
for(a in nums){
   for(b in nums){
       if(a == 2 && b == 3){
           break externo
       }
     
       console.log(`a = ${a} e b = ${b}`)
    }
}

