// step 1 - modelagem

//O JS ja implementa as stacks no proprio array, ja temos metodos prontos que as utilizam, como push, pop, top e etc... Vamos ver nesse caso uma representação de como seria se essas estruturas já não tivessem prontas, para podermos entender melhor como funcionam

class Stack{
    constructor() { //Criamos o construtor
        this.data = [] //This é a referenciado objeto que sera criado mais tarde, é como se depois substitui-se o this por ele
        this.top = -1
    }

    push(value){ //colocar um valor dentro do data
        this.top++ //acrescenta uma posição para colocarmos os nossos dados
        this.data[this.top] = value //coloca o dado
        return this.data
    }

    pop(){ //tira o ultimo elemento da nossa stack
        if(this.top < 0) return undefined //se for menor que zero não tem elemento 
        const poppedTop = this.data[this.top] //Monstra o index do ultimo elemento
        delete this.data[this.top] //remove o ultimo elemento
        this.top-- //volta uma posição
        return poppedTop //retorna o elemento tirado
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }//se o valor for maior que zero, retorna o ultimo dado
}

// step 2 - Utilizando
const stack = new Stack() //instancia um novo objeto

// adicionando dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

// remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())