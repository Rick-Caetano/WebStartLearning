<?php
include ("auxFunc.php");
 
global $li;
$li = $line;

//fazer com que ele anote qual o timer passando um parâmetro para a função
function temporarizador($limite, $vezes){
    $inicio = 0;
    $tocar = 20;
    global $li;

    $arquivo = fopen('regsTemp.txt', 'a+');
    if ($arquivo == false) die ("\nnão foi possível criar o arquivo\n"); 

    //padrão 2700 segundos
    while($inicio <= $limite){
        $tempRest = $limite - $inicio;
        $inicio++;
        sleep(1);
        if (($inicio % 60) == 0){
            echo $tempRest/60;
        }
        echo "\033[2J \033[1;1H";
        
    }
      
    //implementar uma função se a data for no mesmo dia, não a coloca
    fwrite($arquivo,"\nfim do tempo\n\n");
    
    /*colocar no arquivo "timerNovo" em um loop que será usado pela função temporarizador,
    e pelo código abaixo abaixo contando assim o número de vezes que foi executada a função

    $log = fopen('regslog.txt','a+');
    if ($log == false) die ("[Erro!] Não foi possivel criar o arquivo de log");
    $linha = fgets($log);
    if ($linha == null){
        fwrite($log,"linha 1");  
    }
    switch ($linha) {
        case "linha 1":
            fwrite($log,"linha 2");
            break;
        
        case "linha 2":
            fwrite($log,"linha 3");
            break;

        case "linha 3":
            fwrite($log,"linha 4");
            break;

        default: //fazer ele limpar o arquivo aqui...
            # code...
            break;
    }
*/

    //tentar fazer um player usando o html para substituir esse
    //para essa versão fazer um daemon para regular o caminho da musica
    //shell_exec("mplayer '/media/rickbobcs/E6702D06702CDF55/Users/Rick/Music/3. Norman Greenbaum - Spirit In The Sky.mp3'");
    //selectLinha(1);
    shell_exec("mplayer $li");
    sleep(5);
    echo "\033[2J \033[1;1H";
}

function despertador(){
echo date('h:i:s') . "\n"; //mostra a hora

sleep(10); //so aceita segundos

echo date('h:i:s') . "\n"; 
//botar um jeito de tocar uma musica se der
}
?>