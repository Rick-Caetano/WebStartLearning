/*
Boas praticas para if e else

    * Salvar as comparações da condicionais em variaveis
    * colocar sempre dentro de blocos
    * se entrar na primeira condição as outras são desconsideradas
    * em vez de varios if's, pode-se ter varios else if's...
*/

let temperatureNow = -19;
let heighTemperature = temperatureNow > 30
let mediumTemperature = temperatureNow >= 16 && temperatureNow <= 30
let lowTemperature = temperatureNow < 16 && temperatureNow > 0

if (heighTemperature) {
    console.log("ta calor")
} else if (mediumTemperature) {
    console.log("nem calor e nem frio ")
} else if (lowTemperature) {
    console.log("ta frio")
} else {
    console.log("ovô morrer de frio")
}

// switch
// abaixo está uma função que é uma calculadora para o entedermos o switch

function calculator(number1, operator, number2) {
    
    let result = 0;

switch (operator) {
    case '+':
        result = number1 + number2    
        break;

    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break
    case '/':
        result = number1 / number2
        break

    default:
        console.log('operação não permitida')
        break;
}

return result

}

console.log(calculator(2,'%',2))

// ##Throw, try...catch
/*
Tenta executar um bloco de codigo e se der algum erro vai ser disparado esse erro e então podemos capturar esse erro na aplicação

    throw -> lançar
    try -> tentar
    catch -> pegar

    
*/ 

// throw

function sayMyName(name = '') {
    if (name === ''){
        throw new Error('nome é obrigatorio') // o throw para a execução da função ao encontrar erro

        //throw 'Nome é obrigatorio' -> pode-se colocar dessa forma também
    }

    console.log(name) // caso seja passado um nome que não é vazio, ele aparecerá
}

//sayMyName('') -> se rodarmos a função fora do try...catch o erro será uncaught(contrario de catch), ou seja, não pego. A aplicação também vai parar e não vai continuar, por isso precisamos do try...catch
// console.log('Apos a função de erro')


// try... catch

try {
    sayMyName('') // se passarmos um nome, não dará erro
} catch (error) {
    console.log(error) //mostra o erro
}

console.log('Após a função de erro')