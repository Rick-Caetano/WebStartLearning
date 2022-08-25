<?php
/* este arquivo terá as funções auxiliares do codigo como escolha da musica, 
 * redução de repetição de linhas do codigo e etc */

global $line;
function selectLinha($num){
    //criar uma função para chamar o fopen
    $arq = fopen('caminho.txt','a+');
    if ($arq == false) die ("\nnão foi possível criar o arquivo\n");
    $test = fgets($arq);
    if ($test == null){
        regsTemp();
        //esse if fará a apresentação do programa e será a primeira configuração do user
        print("
        Bem vindo ao funcRegs! Vamos aos primeiros passos?

        É simples, você precisa informar caminho da pasta e da musica junto

        * para que o sistema possa ajudar, use TAB para completar o caminho e
        listar tanto as musicas como os diretórios

        * Para facilitar, você pode colocar apenas o nome da musica entre 
        parênteses (isso possivelmente impossibilitará de usar o TAB). \n\n");
        $music = readline("CAMINHO: ");
        fwrite ($arq, $music); 
 }

//para tornar interativo poderia passar um valor por referencia para a função
//ou menor igual a 1
for($x=0;$x<$num;$x++){
    $arq = fopen('caminho.txt','a+');
    global $line;
    $line = fgets($arq);
    }
}
selectLinha(1);

?>