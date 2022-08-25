<?php

$ola = 'logo serei apagada';

echo "antes de fazermos qualquer coisa, aqui vai um número aleatorio para você: ". rand('1','50') . "\n";

echo "o conteudo de \$ola é: $ola \n";
echo "seu tipo é: " . gettype($ola) . "\n\n\n";

unset($ola);

echo "o conteudo de ola agora é: " . $ola . "\n\n\n";
echo "seu tipo é: " . gettype($ola) . "\n\n\n";

?>