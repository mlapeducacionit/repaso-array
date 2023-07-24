/* 
CRUD => Create, Read, Update, Delete 
ABM => Alta, Baja, Modificación...
Vamos a realizar pequeñas funciones que me permitan leer (read) el array, guardar (create) elementos dentro del array, actualizar (update) elementos dentro del array y eliminar (delete) elementos dentro del array.
*/

let datos = []

function validarIndice(indice) { /* ¿Qué retorna? */
    return indice >= 0 && indice < datos.length 
}

function agregarElemento(elemento) {
    datos.push(elemento)
}

function leerElementos() {
    console.log(datos) 
}

function leerElementoSinValidacion(indice) {
    console.log(datos[indice])
}

function leerElementoConValidacion(indice) {
    if(validarIndice(indice)) {
        console.log(datos[indice])
    } else {
        console.error('Índice inválido')
    }
}

function leerElemento(indice) {
    if(indice >= 0 && indice < datos.length ) {
        console.log(datos[indice])
    } else {
        console.error('Índice inválido')
    }
}

function eliminarElementoSinValidacion(indice) {
    datos.splice(indice, 1) 
}

function eliminarElementoConValidacion(indice) {
    if(validarIndice(indice)) {
        datos.splice(indice, 1) 
    } else {
        console.error('Índice inválido')
    }
}
function eliminarElemento(indice) {
    if(indice >= 0 && indice < datos.length) {
        datos.splice(indice, 1) 
    } else {
        console.error('Índice inválido')
    }
}

function actualizarElementoSinValicacion(indice, nuevoElemento) {
    datos[indice] = nuevoElemento
}

function actualizarElementoConValidacion(indice, nuevoElemento) {
    if(validarIndice(indice)) {
        datos[indice] = nuevoElemento
    } else {
        console.error('Índice inválido')
    }
}

function actualizarElemento(indice, nuevoElemento) {
    if(indice >= 0 && indice < datos.length) {
        datos[indice] = nuevoElemento
    } else {
        console.error('Índice inválido')
    }
}




agregarElemento('rojo')
leerElementos()
agregarElemento('verde')
leerElementos()
agregarElemento('azul')
leerElementos()
agregarElemento('rosa')
leerElementos()
console.log('--------------------------------------')
// debugger
// leerElemento(4)
// debugger
// leerElemento(5)
// debugger
// leerElemento(-1)
// debugger
// leerElemento(0)



eliminarElemento(2)
leerElementos()
eliminarElemento(0)
leerElementos()



agregarElemento('violeta')
agregarElemento('azul')
agregarElemento('rojo')
agregarElemento('amarillo')
agregarElemento('negro')
agregarElemento('gris')
leerElementos()



actualizarElemento(-2, 'Maxi')
actualizarElemento(5, 'Luis')
leerElementos()





