/*

    - setTimeout()
    - clearTimeout()
    - setInterval()
    - clearInterval()
 */

//configGlobal
    const timeOut = 3000
    const myFunction = () => console.log('done script!')

// TimeOut
    const timer = setTimeout(myFunction, timeOut)
    console.log('eu apareço primeiro') 
    //clearTimeout(timer) limpa o timer da aplicação

// Interval
    const interval = setInterval(myFunction, timeOut)
    clearInterval(interval) //antes mesmo de começar o set interval já é cancelado kkkk