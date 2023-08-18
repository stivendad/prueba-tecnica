function calcularPuntaje(array) {
    let puntaje = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            puntaje++;
        } else if (array[i] === 5) {
            puntaje += 5;
        } else {
            puntaje += 3;
        }
    }

    return puntaje;
}

// Defino las variables a utilizar 
let enteros = [];
let num = 0, cont=0;

// Solicito ingresar los numeros a evaluar y se van agregando a un array
alert("Ingrese numeros a evaluar y cuando quieras terminar de ingresarlos, ingresa un numero negativo");
while(true) {
    num = parseInt(prompt(`ingrese el numero ${cont+1}`));
    if(num < 0) {
        break;
    }
    enteros.push(num);
    cont++;
} 

// Manipulamos los elementos en el DOM
const resultado = document.querySelector('#resultado');
const h2Element = document.createElement("H2");
const ulElement = document.createElement("UL");
const h3Resultado = document.createElement("H3");

if(enteros.length > 0) {
    // Usamos la funcion para calcular el puntaje
    puntaje = calcularPuntaje(enteros);
    // Si hay elemen tos en el arreglo creamos la lista y la mostramos
    h2Element.textContent = "los numeros ingresados fueron";
    resultado.appendChild(h2Element);
    resultado.appendChild(ulElement);
    enteros.forEach(entero => {
        const liElement = document.createElement("LI");
        ulElement.appendChild(liElement);
        liElement.textContent = entero;
    })
    resultado.appendChild(h3Resultado);

    h3Resultado.textContent = `El puntaje obtenido es de: ${puntaje}`;
} else {
    // Si no existen elementos no creamos la lista
    h2Element.textContent = "No se ingreso ningun numero";
    resultado.appendChild(h2Element);
}
