<?php

   define(“extra”, “super”);

    $palavra = “teste”;

    /* quando temos aspas simples, mesmo se colocarmos variaveis dentro não será
     * indentificada como uma, diferente do caso com aspas normais 
     */
    $frase = 'Isto é um $palavra '.extra;

    echo $frase;

?>