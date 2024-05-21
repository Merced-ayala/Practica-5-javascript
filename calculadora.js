// ------ ejercicio de lectura y escritura -----
const mostrarValor = () => {
    // getElementById = obtener Elemento por el ID
    const input1 = document.getElementById('valor1')

    let valor1 = input1.value
    console.log(valor1)
    console.log("mostrando valor")

    const span = document.getElementById('input-valor')
    console.log(span)
    console.log(span.innerHTML)
    span.innerHTML = valor1
}

// ------ Calculadora ---------

// leerInputs debe leer dos inputs, validarlos
// y devolver estos valores
const leerInputs = () => {
    console.log("leyendo inputs...")
    // obtenemos las etiquetas inputs
    let inputNumero1 = document.getElementById('input-numero-1')
    let inputNumero2 = document.getElementById('input-numero-2')

    // obtenemos los valores de los inputs
    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    console.log("valores desde el input", numero1, numero2)

  }



