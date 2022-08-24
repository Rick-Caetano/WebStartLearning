const {EventEmitter} = require('events') //É um modulo nativo do js, no qual tras eventos, ele é a base para outros modulos de evento. O que mais importa aqui é o objeto EventEmitter

const event = new EventEmitter()

//Ouvindo eventos...
//O primeiro argumento é o evento e o segundo é a ação
event.on('saySomething', (message) => { //se colocarmos o "once" ele executa apenas uma vez
    console.log('Sei que você esta ai ' + message)
})

//Emitindo eventos...
event.emit('saySomething', 'Root') //O segundo argumento da função de emitir eventos é passado para a função que está fazendo a ação.
event.emit('saySomething', 'User')