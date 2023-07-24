/* --------------------------------- */
/*         Repaso ARRAYS             */
/* --------------------------------- */
/*                    0        1       2        3        4        */
let arrayColores = ['rojo', 'verde', 'azul', 'negro', 'blanco']

console.log(arrayColores)
console.log(arrayColores.length) // Averiguar cuantos elementos tiene un array

console.log(arrayColores[0]) // rojo
console.log(arrayColores[1]) // verde
console.log(arrayColores[2]) // azul
console.log(arrayColores[3]) // negro
console.log(arrayColores[4]) // blanco

arrayColores[0] = 'violeta'
console.log(arrayColores[0]) // violeta

arrayColores[3] = 'rosa'
console.log(arrayColores[3]) // rosa

console.log(arrayColores)

/* 
for (1; 2; 3) {}

1. Inicializa la variable i. (Solo la primera vez)
2. Condición de corte.
*/

/* Prueba de escritorio */

/* Interación for | i | arrayColores.legth | i < arrayColores.length  */
/*       1        | 0 |         5          |  0 < 5 =>  true          */    
/*       2        | 1 |         5          |  1 < 5 =>  true          */
/*       3        | 2 |         5          |  2 < 5 => true           */
/*       .        | . |         .          |        .                 */
/*       6        | 5 |         5          |  5 < 5 => false          */

for (let i = 0; i < arrayColores.length; i++) {
    let color = arrayColores[i] // se guarda en color según el indice (i) el color
    console.warn('....')
    console.log(color) /* 0 => rojo | 1 => verde | 2 => azul... */
}

