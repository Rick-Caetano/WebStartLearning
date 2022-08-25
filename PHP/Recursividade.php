<?php

function recursiva($n){

    if ($n == 1) {
        return -$n;

    } else{

        return -5 * recursiva($n -1) + $n;
    }
}

echo recursiva(4);

?>