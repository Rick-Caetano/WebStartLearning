class Messages{ //SuperClass

    name;
    menssage;
    random;

    constructor(name){
        this.name = name
        this.message = []
    }

    get showMessage(){
            this.#randomMessage()
            return `${this.name}, ` + this.message[this.random]
        }

    #randomMessage(){
        this.random = Math.floor(Math.random() * this.message.length )
    }

    
}

class BomDia extends Messages{
    constructor(name){
        super(name)
        this.message = [
            'Que sua manha seja abençoada e cheia de energia posistiva',
            'Bom dia a todos',
            'Que dia incrivel!!! Um bom dia a todos',
            'Nada melhor do que um cafezinho de manhã, bom dia!!!'
        ]
    }
}

//class BoaTarde
let message = new BomDia('mariana')

console.log(message.showMessage)
