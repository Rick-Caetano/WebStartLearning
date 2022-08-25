<?php
/* XOR
 * Um exemplo prático é quando você precisa que um campo precise ser selecionado, mas nunca dois ao mesmo tempo, como no caso do
 * sexo: O usuário precisa selecionar um sexo, e nunca mais de um (pelo menos na maioria dos casos). Um exemplo em PHP:  
 */

 //se deixarmos "false, false" ou "verdadeiro, verdadeiro" teremos que ele retornará o resultado como falso
$xbox = true; 
$playstation = false;

if ($xbox xor $playstation){
    print ('um console foi selecionado');
} else{
    print ('selecione apenas um console');
}

//faça o teste
$a = 11;
$b = 15;
$c = 5;
$d = 10;

if (($a > $b) && ($d/3 <> $c)){
    $result1 = "true";
} else {
    $result1 = "false";
}

if(($d < $b) || ($c/3 != $d)){
    $result2 = "true";
} else {
    $result2 = "false";
}

//perceba o '!' nos dois IFs abaixo
if(($c != $d*$d) && !($a < $b)){
    $result3 = "true";
} else {
    $result3 = "false";
}

if(($a%$b <> 0) || !($d%3 == $c/$d)){
    $result4 = "true";
} else {
    $result4 = "false";
}
echo "\n| $result1 | $result2 | $result3 | $result4 |\n";

?>