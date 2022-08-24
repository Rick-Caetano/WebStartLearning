/*
Function() constructor

    * expressão new
    * cria um novo objeto
    * this -> keyword("palavra chave")
        - Sempre referencia a palavra que está la fora, no exemplo: mayk
    * É interessante criar a função com uma letra maiscula
 */

function Person(name) {
    this.name  = name //mayk agora tem uma propriedade chamada name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person('mayk') //aqui a função se tornou construtora
const rick = new Person('rick')

//Como rick e mayk estão usando a mesma função construtora eles tem que ter os mesmos atributos e funcionalidades
console.log(mayk.name)
console.log(rick.walk())
console.log(mayk.walk())

//Existem funções contrutoras já prontas no JS, como:

let names = new String("Rick e morthy") //mostra a cadeia de caracteres da string
console.log(names)

let date = new Date("2022-05-17") //mostra o data
console.log(date)