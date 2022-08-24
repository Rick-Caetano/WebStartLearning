//No JS não precisamos de modelar uma fila do zero, pois já vem pronto para gente nos metodos do array... Nesse caso iremos ver a fundo como funciona uma queue (fila) 

class queue{
    constructor(){
        this.data = [] //Cria nosso array
    }

    enqueue(item){ 
        this.data.push(item) //coloca um dado na fila
        console.log(`${item} entrou na fila!!!`)
    }

    dequeue(){
        const item = this.data.shift() //tira um dado da fila
        console.log(`${item} saiu da fila!!!`)
    }
}

const fila = new Queue() //instancia nosso objeto

//adiciondo dados a fila
fila.enqueue('Mariana')
fila.enqueue('joao')
fila.enqueue('ariel')

//saindo da fila
fila.dequeue()
fila.dequeue()
fila.dequeue()