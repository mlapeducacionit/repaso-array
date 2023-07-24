/* CRUD */

let datos = [] /* base de datos */

/* C -> CREATE */
function agregarElemento(elemento) {
    datos.push(elemento)
}

/* R -> READ ALL */
function leerElementos() {
    console.log(datos) 
}

/* R -> READ ONE */
function leerElemento(indice) {
    if(indice >= 0 && indice < datos.length ) {
        console.log(datos[indice])
    } else {
        console.error('Índice inválido')
    }
}

/* U - UPDATE */

function actualizarElemento(indice, nuevoElemento) {
    if(indice >= 0 && indice < datos.length) {
        datos[indice] = nuevoElemento
    } else {
        console.error('Índice inválido')
    }
}

/* D -> DELETE */

function eliminarElemento(indice) {
    if(indice >= 0 && indice < datos.length) {
        datos.splice(indice, 1) 
    } else {
        console.error('Índice inválido')
    }
}