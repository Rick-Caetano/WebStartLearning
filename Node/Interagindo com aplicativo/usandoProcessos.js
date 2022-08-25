const questions = [
    'estou satisfeito com o meu eu de hoje?',
    'o que posso fazer para melhorar?',
    'o que me deixou estressado?',
]

let ask = (index = 0) => {
    process.stdout.write(questions[index] + ' > ')
}

ask(); //Perceba que ate aqui temos o JS sincrono. Ele segue uma ordem de logica linha a linha e encerra o programa quando finalizado.

//Aqui entramos no assincronismo. Uma parte do codigo que fica ativa o tempo todo. Por isso criamos a logica do exit()
let answers = []
process.stdin.on("data", data => { //O process.stdin.on fica ouvindo a entrada de dados, e sempre quando há entrada ele executa a função.
   
    answers.push(data.toString().trim()) // trim remove os espaços do começo e do fim.
    if(answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit(); //finaliza o processo
    }
    
})

process.on('exit', () =>{
    console.log(`
        Legal!!! Acamos por hoje.

        você está satisfeito com o seu eu de hoje:
        ${answers[0]}

        Você pode melhor fazendo:
        ${answers[1]}

        Você ficou estressado com:
        ${answers[2]}
            `)
})