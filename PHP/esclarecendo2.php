<?php
$x=20.1;
$y=2.2;
function provaEAGS($a, $b){
    /* Perceba que o (int) vem antes do 2, logo não altera em nada já que dois ja é inteiro, diferente de: 
     * return $b + (int)$a*2; ->  isso retornaria 42.2
     */
return $b + $a*(int)2;
}
$resultado = provaEAGS($x, $y);
echo $resultado;
?>