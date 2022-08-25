<?php
include("titProg.php");
include("mainFunc.php");

//transformar uma função
global $arquivo;
$arquivo = fopen('regsTemp.txt', 'a+');
if ($arquivo == false) die ("\nnão foi possível criar o arquivo\n");

//criar uma var que mostra o dia e impede que o programa anote a data do mesmo dia
$data = "--------------\n". date("l, j \of F Y \nh:i:s A") ."\n--------------";
fwrite($arquivo, $data); //não está escrevendo a data no arquivo

regsTemp();
sleep(4);
$dados = null;
$prosseg = false;

//transformar em função
while($prosseg == false){
    $dados = readline("\nqual o tempo limite(minutos)? ");
    if ($dados == null) {
        echo "OPS! Um número deve ser digitado";
        sleep(3);
    } elseif (!is_numeric($dados)) {
        echo "[ERRO] Letras não são permitidas";
        sleep(3);
    } else {
        echo "tudo certo";
        $prosseg = true;
    } 

    // o primeiro apaga(mas joga o ponteiro para baixo) o segundo joga o ponteiro para cima (COOL!)
    echo "\033[2J \033[1;1H";
    regsTemp();
}
$dados *= 60;

/* So sera possível implementar quando fizer o programa para parar o player
 * essa parte do código faz com que o programa possa ser executado mais vezes */

$executar = true;
while ($executar == true){
    
    //temporarizador($dados);

    $exec = readline("Podemos continuar? ");

    if($exec == 'N'){
        echo "n";
        //$executar = false;
        break;
            }
    elseif ($exec == 'S') {
        echo "s";
    //fazer com que o for possar ser parado
    for ($v=1;$v<=4;$v++){
    //usar o v para indicar quantos times foram concluídos (máximo de 4) que é ciclo
    echo "esse time se repetirá 4 vezes";
    echo "\033[2J \033[1;1H";
    $vezes = $v;
    echo "clico: $vezes \n";
    temporarizador($dados, $vezes);
    $pause = readline("pressione qualquer teclar para continuar\n para sair (N)");
            }
        } 
    else {
        echo "Resposta invalida, digite apenas: (S/N)";
            }
    
        }

sleep(3);
?>