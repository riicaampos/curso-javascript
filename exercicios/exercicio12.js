/**
 Faça um algoritmo que calcule o fatorial de um número.
 */


 function fatorial (numero) {
  if(numero == 0){
      return 1
  } else {
      return numero * fatorial(numero - 1)
  }
}

//console.log(fatorial(6))

function calculaFat(num){
    resultado = 0
   for(i = num; i > 0; i--){
         if(i == num){
           resultado = num*(i-1)
           i = i-1
         }else{
           resultado = (resultado*i)
         }

   } console.log(resultado)

}

calculaFat(6)
calculaFat(7)
calculaFat(5)

