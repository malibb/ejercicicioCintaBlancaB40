'use strict'

//Empezamos!
console.log("Si estoy jalando");

const platillos = ["Enchiladas", "Taco", "Tamal", "Pozole", "Barbacoa", "Picada"];

document.getElementById('arregloPlatillos').innerHTML = (platillos.join(", "));

function mostrarPlatillos(platillos) {
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        arregloPlatillos.push(platillos[i]);
    }
    return arregloPlatillos;

}
let listaUno = mostrarPlatillos(platillos);
console.log("Mostrando valores desde una function", listaUno);

//Mediante un ciclo FOR y condicional if, muestra solo el pozole y la barbacoa

function platilloComparacion(platillos) {
    const comparacion = [];
    for (let i = 0; i < platillos.length; i++) {
        if (platillos[i] === "Pozole" || platillos[i] === "Barbacoa") {
            comparacion.push(platillos[i]);
        }

    }
    return comparacion;
}
let listaDos = platilloComparacion(platillos);
console.log(listaDos);
document.getElementById('comparacion').innerHTML = ("comparación: " + listaDos.join(", "));

//Mediante un ciclo for y condicional IF, muestra los elementos Impares

function pares(platillos) {

    let cont = 1;
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        if (cont % 2 == 0) {
            arregloPlatillos.push(platillos[i]);
        }
        cont++;
    }
    return arregloPlatillos;
}
let listaTres = pares(platillos);
console.log(listaTres);
document.getElementById('pares').innerHTML = ("Pares: " + listaTres.join(", "));

//Mediante un ciclo for y condicional IF, muestra los elementos pares


function impares(platillos) {

    let cont = 1;
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        if (cont % 2 != 0) {
            arregloPlatillos.push(platillos[i]);
        }
        cont++;
    }
    return arregloPlatillos;
}
let listaCuatro = impares(platillos);
console.log(listaCuatro);
document.getElementById('impares').innerHTML = ("impares: " + listaCuatro.join(", "));



function reversa() {
    let valor = document.getElementById('reversa').value;
    const arregloValor = [];
    for (let i = valor; i >= 0; i--) {
        arregloValor.push(i);

    }
    document.getElementById('parrafoReversa').innerHTML = arregloValor.join(", ");
    return arregloValor;
}


document.getElementById('botonNaranja').onclick = function() {

    document.getElementById('botonNaranja').value = "Holii";
}


function media(valorMedia) {
    valorMedia = parseInt(document.getElementById('media').value);
    let valor = 0;
    let promedio;
    let suma = 0;
    for (let i = 0; i < valorMedia; i++) {
        valor = parseInt(prompt("Escribe un valor"));
        suma = valor + suma;

    }
    promedio = (suma / valorMedia);
    document.getElementById('parrafoMedia').innerHTML = promedio;
    return promedio;

}