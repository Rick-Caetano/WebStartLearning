// exemplo com o .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square) //vai pegar cada um dos elementos do array e executar a função neles, nesse caso a square, que faz a potenciação em cada um. No final é retornado um novo array
console.log(squaredNumber)

//exemplo de um retorno de função
//currying ou aplicação parcial de função - passamos os argumentos aos poucos a medida que precisamos
const pause = wait => func => setTimeout(func, wait) // O primeiro argumento que ela aceita é o tempo de espera e depois a função que será executada

pause(600)( () => console.log('waiting 600ms')) //caso executasse ela de uma vez

//usando o currying a gente divide em partes
const wait200 = pause(200) //primeiro registramos o tempo
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms')) //e quando precisarmos passamos a função
wait1000(() => console.log('waiting 1s'))