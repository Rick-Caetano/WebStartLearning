<?php

$arqname = readline ('digite o nome do seu arquivo: ');

//trasnformar em array para as permissões padrões
(int) $perm = readline ('digite o inteiro para a permissão desejada');

//os padrões são diferentes do chmod normal
chmod( $arqname, $perm);

echo "arquivo " . $arqname . " alterado" . " com permissão" . $perm;
?>