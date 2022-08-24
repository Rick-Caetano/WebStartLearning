/*
string
float
int
NaN -> not a number
Infinity -> infinito
boolean
Undefined 
    * indefenido. Não existe
null
    *  nulo. Existe, mas é um objeto que não possui nada dentro.
    *  É diferente de undefined
object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
     
{Propriedade : "valor"}

Array (vetores)
    * Uma lista, agrupamento de dados

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types
    * Primitive /primitive value
    * Structural
    * Structural Primitive
    
## Primitivos

    * String
    * Number
    * Boolean
    * Undefined
    * Symbol
    * BigInt
    * 

## Estruturais

    * Object
        * Array
        * Map
        * Set
        * Date
        * ... (existem muitos. Consulte mais no MDN)
        
## Primitivo Estrutural / Structural Root Primitive

    * null
*/

//objet
console.log({
    nome: "rick",
    idade: 19,
    andar: function() {
        console.log('andando')
    }
})

const person = {
    name: 'John',
    age: 20,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name, person.isAdmin)

// array
console.log([
    "leite",
    "ovos",
    "bolo"
])

const animals = [
    'lion',
    'monkey',
    'tiger'
]

const caracter = [
    'animals',
    {
        name: 'lion',
        paws: 4,
        tail: true
    },
    {
        name: 'monkey',
        paws: 2,
        tail: true
    },
    {
        name: 'tiger',
        paws: 4,
        tail: true
    }

]

console.log(animals[2])
console.log(caracter[0])
console.log(caracter[1].name,caracter[1].tail)

