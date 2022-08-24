// função impura
//exemplo 1 - depende de uma dado externo que não foi passado como parametro
function calculateCircumference(radius){
    return Math.PI * (radius + radius) //Math.PI não foi passado como argumento, logo ele está usando de forma global e pode sofrer alterações
}

//exemplo 2 - está alterando um dado externo
let person = { //deveria estar dentro da função
    name: 'rafael camarda',
    age: 'jovem'
}

function changeName(name){
    person.name = name //perceba que ele altera o nome de um objeto que está fora da função
}

//função pura
//exemplo 1
const calculateCircumference = function(pi, radius){ //Onde está o pi passariamos o 'Math.PI'
    return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)


//exemplo 2
const changePersonName = (person, name) =>  ({name: 'rafael camarda', age: 'jovem'})