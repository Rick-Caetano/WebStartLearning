/*

    Conceitos
        - Local: funciona apenas no escopo onde foi criada
        - Global: funciona em qualquer região do codigo
        - Escopo: é um bloco 

## Variaveis

    - var
        * É global (mesmo dentro de um block statemente)
    - let
        * Mesma coisa que var, podem ser variadas
        * É local
    - cont
        * deve ser constante, um pouco diferente de var e let, mas ainda armazena algo
        * é local

## scope

    - Determina a visibilidade de alguma variável no JS

    # block statement (declaração de bloco)

    - Basicamente é abrir um bloco em que tudo dentro se torna local (de menos atributos globais) da seguinte forma:

        {
            //aqui vai o codigo    
        }   

## Nome das variaveis

    - JS é case-sensitive, ou seja maisculo e minusculo fazem muita diferença
    - Não se pode iniciar com numeros e colocar espaços vazios no nome
    - ideal:
        * Criar nomes que façam sentido
        * Que explique o que a variável é ou faz
        * CamelCase (alterar a primeira letra para maisculo ao juntar nomes)
        * Snake_case (colocar _ entre os nomes)        
        * Escrever em ingles


*/

//##Variables
var clima = "quente"
clima = "frio"

console.log(clima)

const climao = "quente"
// climao = "frio" --> isso vai dar erro

console.log(climao)

//##block statement
/*
Por debaixo dos panos ele vai mandar a variavel x que está dentro do bloco para a parte superior do codigo, ja que var é global, dessa forma o JS considerará que x ja existe (foi declarado) mas tem valor undefined, já ques está dentro do bloco
 */
console.log('existe x antes do bloco?', x)

{
    var x = 0 //se colocarmos um let aqui ou um const, será considerado como inexeistente fora do bloco. Nesse eles teriam que ser declarados antes para serem globais
}

{
    let y = 0
    console.log("existe y no bloco?")
}
console.log("exite y?")