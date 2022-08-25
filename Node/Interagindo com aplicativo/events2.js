//Como esse events é a base para outros modulos, como http, stream, file system e etc..? Vamos entender a fundo
//modulos dentro do core do JS
const {inherits} = require('util')
const {EventEmitter} = require('events')

//personagem
function Character(name){
    this.name = name
}

//queremos que ele traga as opções que tem dentro do emitter pra essa função, para isso usaremos inherits. Assim ele herdara as funções do EventEmitter

inherits(Character, EventEmitter)

//Agora ja vai possuir o emit, o once e por ai vai...
const chapolin = new Character('chapolin');

chapolin.once('help', () => console.log('Eu! o ' + chapolin.name + ' colorado')) //O chapolin está escutando o help

console.log('OH! E agora quem poderá me defender?')
chapolin.emit('help')

