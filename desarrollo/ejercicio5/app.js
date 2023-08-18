
document.querySelector('#calcular').addEventListener('click', () => {
    const numeroVacas = parseInt(document.querySelector('#numeroVacas').value);
    const numeroDias = 7;

    function calcularProduccion(numeroVacas, numeroDias) {
        let produccion = [];

        for (let i = 0; i < numeroDias; i++) {
            alert(`Ingrese la produccion de leche de las vacas para el dia ${i + 1}`);
            produccion.push([]);
            for (let j = 0; j < numeroVacas; j++) {
                let litros = 0;
                litros = parseFloat(prompt(`ingrese los litros de la vaca ${j + 1}`));
                produccion[i].push(litros);
            }
        }

        return produccion;
    }

    function totalProduccion(produccion, numeroDias, numeroVacas) {
        let totalProduccionDia = Array(numeroDias).fill(0);
        for (let i = 0; i < numeroDias; i++) {
            for (let j = 0; j < numeroVacas; j++) {
                totalProduccionDia[i] += produccion[i][j];
            }
        }
        return totalProduccionDia;
    }

    function mayorMenor(produccion, numeroDias) {
        let diaMayor = 0;
        let diaMenor = 1000;
        let indexMayor;
        let indexMenor;

        for (let i = 0; i < numeroDias; i++) {
            let total = produccion[i].reduce((acum, actual) => acum + actual, 0);
            if (total >= diaMayor) {
                diaMayor = total
                indexMayor = i + 1;
            }
            if (total < diaMenor) {
                diaMenor = total;
                indexMenor = i + 1;
            }
        }
        return [diaMayor, indexMayor, diaMenor, indexMenor];
    }

    function mayorVacaDia(produccion, dia) {
        let maximo = Math.max(...produccion[dia]);
        let mayorVaca = produccion[dia].map((vaca, indice) => (vaca >= maximo) ? indice + 1 : null).filter(indice => indice !== null);

        return mayorVaca;
    }
    
    const total = calcularProduccion(numeroVacas, numeroDias);
    const totalDia = totalProduccion(total, numeroDias, numeroVacas);

    // Agregar el total de litros por dia
    const resultados = document.querySelector("#resultados"); // seleccino el div contenedor
    const porduccionTotal = document.createElement("UL"); // creo un ul
    const tituloListrosDias = document.createElement("H3");
    tituloListrosDias.textContent = "Producción total del hato en cada uno de los siete días"

    totalDia.map((litros, index) => {
        const litrosDia = document.createElement("LI");
        litrosDia.innerHTML = `Dia ${index + 1}: ${litros} litros`;
        porduccionTotal.appendChild(litrosDia);
    });
    resultados.appendChild(tituloListrosDias);
    resultados.appendChild(porduccionTotal); 

    // Dias con mayor y menor produccion
    let [diaMayor, indexMayor, diaMenor, indexMenor] = mayorMenor(total, numeroDias);
    const tituloMayorMenor = document.createElement("H3");
    tituloMayorMenor.textContent = "Día de la semana con mayor y menor producción.";
    const parrafoMayor = document.createElement("P");
    const parrafoMenor = document.createElement("P");
    parrafoMayor.textContent = `Mayor producción: Día ${indexMayor} - ${diaMayor} Litros.`;
    parrafoMenor.textContent = `Menor Producción: Día ${indexMenor} - ${diaMenor} Litros.`;
    resultados.appendChild(tituloMayorMenor);
    resultados.appendChild(parrafoMayor);
    resultados.appendChild(parrafoMenor);

    // Vaca que dio mas leche cada dia
    const listaVacasTotal = document.createElement("UL");
    const tituloListaVacas = document.createElement("H3");
    tituloListaVacas.textContent = "El número de la vaca que dio más leche en cada día.";
    for (let i = 0; i < numeroDias; i++) {
        let mayorVaca = mayorVacaDia(total, i)
        const listaVacas = document.createElement("LI");
        listaVacas.textContent = `Dia ${i+1}: Vaca ${mayorVaca.join(" - Vaca ")}`;
        listaVacasTotal.appendChild(listaVacas);
    }
    resultados.appendChild(tituloListaVacas);
    resultados.appendChild(listaVacasTotal);

    resultados.classList.remove("none");
    resultados.classList.add("block");


    const formulario = document.querySelector("#formulario"); 
    formulario.classList.remove("block");
    formulario.classList.add("none");
});