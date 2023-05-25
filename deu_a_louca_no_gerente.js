DESAFIO

O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na promoção com 70% de 
desconto. Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente calculado e 
repassado para os vendedores. Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse 
desconto.

-------------------------------------------
| Exemplo de Entrada |  Exemplo de Saída  |
-------------------------------------------
|          2         |         196        | 
|         200        |                    | 
-------------------------------------------
|          7         |         744        | 
|         800        |                    | 
-------------------------------------------
-------------------------------------------
|         70         |         300        | 
|         1000       |                    | 
-------------------------------------------

SOLUÇÃO DE CÓDIGO

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let input = gets();
let desconto = parseInt(input) ;

input = gets();

let precoAntigo = parseInt(input);

let precoNovo = parseInt(precoAntigo * (1 - desconto / 100));    

print(precoNovo);