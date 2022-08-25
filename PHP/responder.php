<?php

$alternative;
$andamento = true;

while($andamento == true){

    $codQuest = readline('codigo: ');

    if($codQuest == 'exit'){
        // $andamento = false;
        echo "saindo do programa";
        break;
    }

    $numQuest = readline('numero: ');
    $resp = readline('Resposta: ');
    $correct = readline('Acertou? ');

    if ($correct == 'n'){
        $alternative = readline('alternativa correta é: ');
    }

    $cmd = "echo " . $codQuest . " - " . $numQuest . " (" . $resp . ") " . " -> " . $alternative . " >> /home/rickbobcs/Documentos/resp.txt";

    shell_exec($cmd);

}

?>