DESAFIO
Você terá o desafio de ler um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma loja, e informe-o 
expresso no formato horas:minutos:segundos.

ENTRADA
O arquivo de entrada contém um valor inteiro N.

SAÍDA
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

-----------------------------------------
| EXEMPLO DE ENTRADA | EXEMPLO DE SAÍDA |
-----------------------------------------
|         556        |      0:9:16      |
-----------------------------------------
|          1         |       0:0:1      |
-----------------------------------------

CÓDIGO

const total = parseInt(gets());

// Cálculo das variáveis horas, minutos e segundos:
const horas = Math.trunc(total / 3600);
const minutos = Math.trunc((total - (horas * 3600)) / 60);
const segundos = total - (horas * 3600) - (minutos * 60);

// Impressão do resultado usando interpolação de strings.
print(`${horas}:${minutos}:${segundos}`);
