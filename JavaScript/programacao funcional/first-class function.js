const sayMyName = () => console.log('rick')
const runFunction = fn => fn() //recebe uma função como argumento e a executa, chamamos ela de first-class function

runFunction(sayMyName) //passamos a função como argumento
runFunction (() => console.log('JSLove')) // podemos escrever uma função ao passar como argumento

console.log(runFunction(Math.random)) //podemos ver o retorno de uma função ao passa-la como argumento