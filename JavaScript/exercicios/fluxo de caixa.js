// Sistema de gastos familiar

/**
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    receitas: []
    despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas e ira mostrar uma mensagem se a família está com saldo positivo ou negativo, seguindo do valor do saldo
 */

    /* Interessante ressaltar sobre o return. Ele manda para outros funções um valor, pois quando executamos uma função que esta dentro de variavel, é o valor do return que ficara salvo. Ele não escreve nada na tela, so retorna valores*/

    let economy = {
        income: [100, 200, 300, 400],
        expenses: [200, 700, 800, 100]
    }

    function sum(array) {
        let total = 0;

        for(let values of array) {
            total += values
        }

        return total // manda o resultado para as constantes abaixo
    }

    function calculateBalance() {
        const calculateIncomes = sum(economy.income)
        const calculateExpenses = sum(economy.expenses)
        const total = calculateIncomes - calculateExpenses

        // Em vez de fazer a função situation, pode ter continuado aqui o codigo, mas ta valendo...
        return total
    }

    function situation() {
        const total = calculateBalance()
        let monthInRed = total < 0

        if (monthInRed) {
            console.log(`vish! ficou no vermelho esse mês, você gastou a mais ${total}`)
        } else {
            console.log(`Legal! O lhe restaram ${total} esse mês. Parabens!!!`)
        }
    }

    situation() 

/* Forma mais complicada de pensar com um erro
    let tamanho = economia.income.length

    for (let i = 0; i <= tamanho; i++) {
        let totalIncome = 0; // erro: não se deve declarar variaveis dentro de loops, pois se não ela será declarada toda hora
        income = economia.income[i]
        totalIncome = totalIncome + income
        console.log(totalIncome)
    }
*/
    


