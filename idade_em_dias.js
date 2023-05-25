DESAFIO

Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias.

Obs: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma 
situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 

ENTRADA

O arquivo de entrada contém um valor inteiro.

SAÍDA 

Imprima a saída conforme exemplo fornecido.

-------------------------------------------
| Exemplo de Entrada |  Exemplo de Saída  |
-------------------------------------------
|         400        |      1 ano(s)      | 
|                    |      1 mes(s)      | 
|                    |      5 dia(s)      | 
-------------------------------------------
|         800        |      2 ano(s)      | 
|                    |      2 mes(s)      | 
|                    |      10 dia(s)     | 
-------------------------------------------
|         30         |      0 ano(s)      | 
|                    |      1 mes(s)      | 
|                    |      0 dia(s)      | 
-------------------------------------------

SOLUÇÃO DE CÓDIGO

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let totalDeDias = parseInt(gets());
let meses = parseInt((totalDeDias%365) / 30);
let anos = parseInt(totalDeDias / 365);
let dias = parseInt((totalDeDias%365)%30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");