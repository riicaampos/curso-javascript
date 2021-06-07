/**
 Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */

const listPontos = "10 20 20 8 25 3 0 30 1"
//                   0 1  2  3 4  5 6  7 8
 
function calcula(pontos){

    let splitPontos = []
    let pos;
    let records = 0;
    splitPontos = pontos.split(" ")

     let menor = splitPontos[0]

     for(i in splitPontos){
      if(parseInt(splitPontos[i]) < parseInt(menor)){
           menor = splitPontos[i]
           pos = i;
         }if(i != 0 && parseInt(splitPontos[i]) > parseInt(splitPontos[i-1])){
          console.log('Entrou')
          records ++
         }
         //console.log(`Posição: ${i} Valor: ${splitPontos[i]}`)
     }
       console.log(menor, pos, records)
}

calcula(listPontos)