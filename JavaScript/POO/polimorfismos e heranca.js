class Atleta{ //Classe pai
    peso;
    categoria;

    constructor(peso){
        this.peso = peso
    }

    definirCategoria(){ //metodo não encapsulado, não precisamos do "get" para chama-lo
        if(this.peso <= 50){
            this.categoria = 'infantil'
        } else if (this.peso <= 65){
            this.categoria = 'juvenil'
        } else {
            this.categoria = 'adulto'
        }
        return this.categoria
    }
}

class Lutador extends Atleta{ //Classe filho, herda as caracteristicas de atleta
    constructor(peso){ 
        super(peso) //puxa atributos e metodos do pai
    }

    definirCategoria(){ // aqui ocorre o polimorfismo, esse metodo é herdado do pai mas foi alterado de acordo com o uso da classe. Com o polimorfismo podemos mudar as caracteriscas que precisamos ao serem herdadas
        if(this.peso <= 54){
            this.categoria = 'pluma'
        } else if(this.peso <= 60){
            this.categoria = 'leve'
        } else if(this.peso <=75){
            this.categoria = 'meio-leve'
        } else{
            this.categoria = 'pesado'
        }
        return this.categoria
    }
}
//Criamos dois atletas
let willian = new Atleta(50)
let marcao = new Lutador(100)

//Usamos o metodo que define a categoria já que este metodo não está encapsulado
console.log(marcao.definirCategoria()) 
console.log(willian.definirCategoria())