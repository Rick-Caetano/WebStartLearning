<?php
require_once ('classFoo.php');

$foo = new foo();
$bar = new bar();

//aqui temos o reuso da função printPHP sem precisar se feita novamente na classe bar
$foo->printItem('baz');
$foo->printPHP();
$bar->printItem('baz');
$bar->printPHP();


?>