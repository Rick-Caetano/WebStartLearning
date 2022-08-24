// Celcius em fahenheit

/*
    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F -32) * 5/9

    F = C * 9/5 + 32

*/

// Minha forma de pensar
let degree = "fahenheit"
let temperature = 80

function conversion(degree,temperature) {
    let valueConverted = 0
    let degreeScale = degree.toUpperCase()

    if (degreeScale == "CELSIUS"){
        valueConverted = temperature * 9/5 + 32
    } else if (degreeScale == "FAHENHEIT"){
        valueConverted = (temperature - 32) * 5/9
    }

    return valueConverted.toFixed(4)
}

console.log(conversion(degree,temperature))

// solução mais elaborada

function transformDegree(degrees) {
    const fehenheitExist = degrees.toUpperCase().includes('F')
    const celciusExist = degrees.toUpperCase().includes('C')

    // fluxo de erro
    if (!fehenheitExist && !celciusExist) {
        throw new Error('O grau passado não existe')
    }

    //Fluxo padrão é o fehenheit
    let updateDegrees = Number(degrees.toUpperCase().replace('F',""));
    let formula = (fehenheit) => (fehenheit - 32) * 5/9
    degreeLetter = 'C'

    //fluxo caso seja Celcius
    if (celciusExist) {
        updateDegrees = Number(degrees.toUpperCase().replace('C',""));
        let formula = (celcius) => celcius * 9/5 + 32
        degreeLetter = 'F'
    }

    return formula(updateDegrees) + degreeLetter
}

try {
    console.log(transformDegree('10C'))
} catch (error) {
    console.log(error.message)
}