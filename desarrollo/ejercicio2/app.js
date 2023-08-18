
// Se Valida si los numeros ingresados corresponen o no a una secuencia valida de fibonnaci
function validarSecuencia(numeros) {
    for (let i = 2; i < numeros.length; i++) {
        if(numeros[i] === numeros[i - 1] + numeros[i - 2]) {
            return false;
        }
    }
    return true;
}

function tribonacci(numeros) {
    if(validarSecuencia(numeros)){
        return "Los numeros ingresados no son validos en la secuencia fibonacci";
    }

    let secuencia = [...numeros];

    for (let i = 3; i < 6; i++) {
        const siguiente = secuencia[i-3] + secuencia[i-2] + secuencia[i-1];
        secuencia.push(siguiente);
    }

    return secuencia
}


let secuencia = [];
let cont=0, num=0;

alert("Ingrese 3 numeros de la secuencia fibonacci ejm. 0 - 1 - 1");
while (cont < 3) {
    num = parseInt(prompt(`ingrese el numero ${cont+1}`));
    secuencia.push(num);
    cont++;
}

const respuesta = tribonacci(secuencia);

const resultado = document.querySelector('#resultado');
const h2Element = document.createElement("H2");

if(!validarSecuencia(secuencia)) {
    h2Element.textContent = "la secuencia es: " + respuesta.join(" - ");
} else {
    h2Element.textContent = respuesta + ": " + secuencia.join(" - ");
}

resultado.appendChild(h2Element);