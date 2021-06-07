/**
 Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const dias = dia => {

    switch(dia){

    case 1:
        return 'Final de Semana'
    case 2:
        return 'Dia útil'
    case 3:
        return 'Dia útil'
    case 4:
        return 'Dia útil'
    case 5:
         return 'Dia útil'
     case 6:
        return 'Dia útil'
    case 7:
        return 'Final de Semana' 
    default:
        return 'Dia inválido'
    
}

}

console.log(dias(10))

//Ou de forma resuminda

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}