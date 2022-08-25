const myModule = require('./usando node') //Chama o modulo que criamos no arquivo anterior

console.log(myModule) //executa

//Processos no node

console.log(process.argv) //Ele é um array que guarda todos os processos executados desde o node e a abertura do arquivo

//Se colocarmos mais argumentos na hora de executar o arquivo no console então ele os salvara como processos no array
let firstName = process.argv[2] // pega o que vier depois do nome do arquivo na hora de digitar no console
let lastName = process.argv[3] // pegar o proximo espaço, ou seja, nesse caso o segundo nome
console.log('Seu nome é ' + firstName + ' ' + lastName)

//Melhorando esse processo
function getFlag(flag){
    const flagValueIndex= process.argv.indexOf(flag) + 1
    return process.argv[flagValueIndex]
}

module.exports = getFlag;