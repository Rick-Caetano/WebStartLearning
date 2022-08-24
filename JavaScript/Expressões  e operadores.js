/*
    * Expressão
        Toda expressão no JS pode terminar com ";" no final, não é obrigatorio, mas em alguns casos resolve alguns problemas
    * Operators
        Unary
            ++ (incremento) ou -- (decremento)
        Binary
            dois ou mais numeros fazendo a operação
        Ternary
            condição ? "valor1" : "valor 2"
    * Operadores aritméticos 
        resto da divisão %
        incremento ++
        decremento --
        exponecial **
        multiplicação *
        divisão /
        soma +
        adição -
        
*/


//Função auto executavel precisa de ";" na expressão anterior
let number = 2; // se não colocar o ; ele vai entender que essa expressão faz parte da função autoexecutavel abaixo (um dos poucos casos em que ";" deve ser usado)


(function() {
    console.log('alo')
})

// NEW
// Cria um novo objeto

let name = new String('rick')
let date = new Date('2002-12-01')
name.surName = "caetano" //adiciona uma propriadade ao name
name.age = 18
console.log(name, name.age, name.surName)
console.log(date)

/*Operadores unários
    typeof // mostra o tipo de dado
    delete // deleta uma propriedade de person
*/

const person = {
    name: "Mayk",
    age: 30
}

delete person.age
console.log(person,typeof "mayk")

// ##Operadores de comparação
// == igual a
// != diferente de
// === estritamente igua a 
// !== estritamente diferente de
// > maior que
// >= maior igua a
// < menor 
// <= menor igua a

let one = 1
let two = 1

console.log(one != two)
console.log(one != 1)
console.log(one == '1') // o "==" aceita tipos de dados diferentes para comparar. O mesmo para o "==="
console.log(one === '1') // o "===" não aceita tipos de dados diferentes para comparação. O mesmo para "!=="
console.log(two !== "2")
console.log(two !== 2)

// ##Operadores de atribuição (Assignment)
/*
São as melhores formas de fazer conta e já colocar o valor em uma var, não precisando ficar repetindo muitas vezes o nome da variavel na expressão
atribuição (assigment) =
soma +=
subtração -=
multiplicação *=
divisão /=
resto da divisão %=
exponenciação **=

*/

// ## Operadores lógicos (logical operators)
/* 

AND &&

OR ||

NOT !

- 2 Valores booleanos, quando verificados, resultura em verdeiro ou falso
 */

let pao = true
let queijo = false

console.log(pao && queijo)
console.log(pao || queijo)
console.log(!pao)

// Operador Condicional (Ternário)

let niceBreakfast = pao && queijo ? 'café top' : 'café ruim'
console.log(niceBreakfast)

// ##Operadores para strings

//concatenação

word = "alpha"
word += "bet"
console.log(word + 123)

 
// ##Falsy e truthy
/* São conceitos que se aplicam quando um valor é considerado false ou verdeiro em contextos onde um booleano é obrigatorio (condicionais e loops)

FALSY (não confiavel, algo que sempre da falso)

false
0
-0
""
null
undefined
NaN

TRUTHY (confiavel)

true 
{}
[]
1
3.25
"0"
"false"
-1
Infinity
-Infinity

*/

comparasionFalsy = "" ? "verdadeiro" : "falso" 
comparasionThuthy = "0" ? "verdadeiro" : "falso" 
console.log(comparasionFalsy)
console.log(comparasionThuthy)

/*
Operator precedence

    * Grouping ()
    * negação e incremento ! ++ --
    * multiplicação e divisão * /
    * adição e subtração + -
    * relacional < <= > >=
    * igualdade &&
    * AND &&
    * OR ||
    * condicional ?:
    * atribuição = += -= *= %=
*/