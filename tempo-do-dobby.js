DESAFIO
Para dar conta de toda a fabricação dos presentes de Natal, por várias vezes os elfos precisam ficar até tarde trabalhando para que 
tudo possa ser terminado a tempo.
Para melhor gerenciar seus cronogramas, os elfos estipularam quantos minutos são necessários para fabricar cada presente.
Já está quase no final do expediente, e um dos elfos pediu sua ajuda.
Faltam N minutos para a hora de ir embora, e restam dois presentes para o elfo Dobby fabricar. Ajude-o a descobrir se ele conseguirá 
fabricar os dois ainda hoje, ou se deve deixar o trabalho para amanhã.

ENTRADA
Cada caso de teste inicia com um inteiro N, indicando quantos minutos faltam para o final do expediente (2 <= N <= 100).
Em seguida haverá dois inteiros A e B, indicando quantos minutos são necessários para fabricar os dois presentes que Dobby precisa 
fabricar (1 <= A, B <= 100).

SAÍDA
Imprima uma linha, contendo a frase "Farei hoje!" caso seja possível fabricar os dois presentes antes do final do expediente, ou 
"Deixa para amanha!" caso contrário.

--------------------------------------------
| EXEMPLOS DE ENTRADA |  EXEMPLOS DE SAÍDA |
|         20          | Deixa para amanha! |
|         15 6        |                    |
--------------------------------------------
|         20          |     Farei hoje!    |
|         10 10       |                    |
--------------------------------------------

CÓDIGO 

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const minutosFaltantes = parseInt(gets());
const valores = gets().split(" ");

const a = parseInt(valores[0]);
const b = parseInt(valores[1]);

if (a + b <= minutosFaltantes) {
print('Farei hoje!');
} else {
print('Deixa para amanha!');
}
