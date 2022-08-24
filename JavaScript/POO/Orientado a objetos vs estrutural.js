/*
    // Estrutural 

    let altura = 50
    let largura = 60

    function calcularArea(){
        return altura * largura
    }

    let area = calcularArea()
 */

    //Orientado a objetos

class Poligono{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    #calcularArea(){ //perceba que a # representa que esse metodo está encapsulado
        return this.altura * this.largura
    }
}

let retangulo = new Poligono(50, 60)

console.log(retangulo.area)
console.log(retangulo)