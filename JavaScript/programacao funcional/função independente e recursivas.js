const random = (number, Math) => Math.floor(Math.random() * number);

//recursiva
// find the factorial of a number
const factorial = x => { 

    // essa função ira parar quando entrar no if, ja que é uma função recursiva, como um loop...
    if(x === 0){
        return 1;
    }

    // o numero que for passado para x vai ser subtraido por 1 quando a função reexecutar ate chegar a 0 e entrar no if que sai da função e retorna 1
    //console.log(x) -> para ver o valor de x a cada chamada
    return x * factorial(x - 1); //recursividade
}

console.log(factorial(6)) 