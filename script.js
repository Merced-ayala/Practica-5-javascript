/* agregar comentario: alt + shift + a */

/* 
comentar 
varias 
lineas 
*/

// comenta una linea

console.log("Hola Mundo")
console.log("aqui podemos escribir cualquier cosa")
console.log("adios")
console.log("no hay autocompletado")
console.log(12345)
console.log(-1.123)

// Tipos de datos

/* declara una variable */
let nombre = "Sebastian"
console.log(nombre)
nombre = "Juan"
console.log(nombre)

/* declara una constante */
const pi = 3.1416
console.log(pi)
/* pi = 3  no se puede sobreescribir en una constante*/

/* javascript antiguo */
var apellido = "arias"

const numero1 = 7
const numero2 = 9
const resultado = numero1 + numero2
console.log("resultado:", resultado, "algo")

// -------------- Tipos de datos ------------

// Strings - texto
const ciudad = "bogota"
const pais1 = 'colombia'
const pais2 = "argentina"
console.log(ciudad, pais1, pais2)

// lueguaje debilmente Tipado
// Int, float - numeros
const suma = 5
const edad = 20.5
const numeroNegativo = "-10"

console.log("multiplicacion:", 5 * "5")
console.log(suma, edad, numeroNegativo)

// Booleandos - Bool - verdaro o falso
let esVerde = true
let esMorado = false

// ------------- Estructuras de Datos --------

// Array - Vectores - Listas

let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

// ver un elemento de la lista
console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])

let listaCiudades = [
    "bogotá",
    "medellin",
    "cali"
]

console.log(listaCiudades)

listaCiudades[2] = "boyaca"
console.log(listaCiudades)

let listaDeListas = [listaDeNumeros, listaCiudades]
console.log(listaDeListas)

// acceder al dato "medellin"
console.log(listaDeListas[1][1])

// JSON (JavaScript Object Notation) - Objetos
// clave - valor
let usuario = {
    nombre: "sebas",
    edad: 18,
    ciudad: "bogota",
    ubicacion: {
        latitud: 1.5356564543,
        longitud: -2.3432353
    },
    amigos: ["andres", "pepito"]
}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.ubicacion.latitud)

usuario.edad = 25
console.log(usuario)

//TIpos de datos vacíos

// Null = nulo 
let espacioVacio = null 

// undefined =  indefinido
let noDefinido = undefined
console.log (usuario.apellido)
let algo
console.log (algo)

// NaN - Not a Number - No es un número
const NoEsNumero = NaN
const multiplicacion = 10 * 'Nan'
console.log = (multiplicacion)
// console.log multiplicación

//------- Estructuras de control -----
// Bucles - Un proceso que se repite
// loop - bucle infinido 

const listaAnimales = [
    "Perro",
    "gato",
    "oso",
    "gallina"
]
//Parámetro 1 = contador
//Parámetro 2 = condición para que se detenga
//Parámetro 3 = comportamiento del contador
for(let contador = 0; contador === 10; contador = contador + 1 ) {
    console.log (contador)
}




