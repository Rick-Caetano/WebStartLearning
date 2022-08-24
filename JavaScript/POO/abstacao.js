class Parafuso{
    constructor(){
        if(this.constructor == Parafuso){
            throw new Error('Classe abstrata não pode ser instanciada')
        }
    }

    get tipo(){
        throw new Error('Método "get tipo()" precisa ser implementado')
        }
}

class Fenda extends Parafuso{
    constructor(){
        super()
    }

    get tipo(){
        return 'fenda'
    }
}

class Philips extends Parafuso{
    constructor(){ super() }

    get tipo(){
        return 'Philips'
    }
}

class Allen extends Parafuso{

}

let fenda = new Fenda
let philips = new Philips
let allen = new Allen

console.log(fenda.tipo, philips.tipo)

//Erros
//console.log(allen.tipo) -> Como não definimos nenhum metodo, tipo não foi implementdo e portanto ele ainda não existe na classe
//let parafuso = new Parafuso -> essa classe não pode ser usado, ou seja instanciada, pois ela é abstrata. Usamos esse recurso para que a super classe seja apenas a base para outras classes

//O importante aqui é perceber que só existe parafuso se ele for algum tipo especifico de parafuso, como: fenda, philips ou allens
