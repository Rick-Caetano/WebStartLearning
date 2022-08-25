/*
    //Programação imperativa

    . É um passo a passo, como uma receita de bolo. É a forma como aprendemos a programar normalmente
 
*/

let number = 2

//stateful function
function square(){
    return number * number //ela guarda o estado anterior de 2 sempre que é chamada, pois está usando dados fora do escopo dela
}

number = square()

/*
    //Declarativa

    . Diz o que fazer não como fazer
    
*/

//stateless function
const square = n => n * n //Essa função não guardar estado algum, o valor de 'n' tem que ser passado antes 