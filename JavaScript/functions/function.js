/*
function anonymous
*/

// ## Parâmentros
const sum = function(number1, number2){
    let total = number1 + number2
    return total //retornar o total
}

let number1 = 34
let number2 = 25

 console.log(`a soma é ${sum(number1, number2)}`)  //argumentos

 // ## Escopo da função

 let subject = "eu sou unico nesse codigo"

 function createThink(subject) {
     subject = "study"
     return subject //os subject são diferentes, o fora do scopo é uma variavel e esse um parametro 
 }

 console.log(subject)
 createThink(subject)
 console.log(subject)

 // ##Hoisting de função

 sayMyName() // Aqui o JS faz o hoisting (elevação), a funçao sobe pra cima por debaixo dos panos, fazendo a chamada ocorrer normalmente

 function sayMyName() {
     console.log('rick')
 }

 /*sayYourName() // Nesse caso não ira funcionar pois sayYourName (declarado a baixo) vai  sofrer o hoisting, mas como é uma var que armazena uma função e não uma função propriamente dita, ele recebe undefined */

 var sayYourName = function() {
     console.log('merlin')
 }

 // ## arrow function
 // geralmente é atribuida para constantes

 const sayElogio = () =>{
    console.log('lindão')
 }

 console.log(sayElogio())

 // ## Callback
 // Básicamente é chamar um função dentro de outra função

 function callBackPhaser(myCallback){
     console.log('antes de executar a função callback')
     myCallback() //executa a função passada
     console.log('saimos da call back')
 }

 callBackPhaser(
     () => {
         console.log('Executando a callback')
     }
 )