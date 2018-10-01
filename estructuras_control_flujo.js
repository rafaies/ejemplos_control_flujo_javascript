// ejemplos de control de flujo en javascript
// Implatación de Apliaciones Web de 2º ASIR IES Virgen del Carmen de Jaén
// a partir del tutorial http://www.w3schools.com/js

// El saludo vendrá dado por la hora del sistema o bien por la introducida en campo_hora 

// Al  cargar página mostrar fecha - hora y borrar el text del input
window.onload = function () {
    document.getElementById("fecha_hora").innerHTML = new Date();
    document.getElementById("campo_hora").value = "";
};

// validar el campo de texto hora para que admita solamente valores del 0 al 24

function validarHora() {
    var valor = document.getElementById("campo_hora").value;
    if (valor !== "") {
        if (isNaN(valor) || valor < 0 || valor > 24 || valor === "-0") {
            document.getElementById("campo_hora").value = "";
            return false;
        } else {
            return true;
        }
    }
}

function dimeHora() {
  // variable local con la hora del sistema
    var h = new Date().getHours();

  // Si se ha introducido un valor válido en campo_hora
    if (validarHora()) {
        h = document.getElementById("campo_hora").value;
    }
    return h;
}


// condicional if simple

function saludo1() {
    var saludo = "";
    var hora = dimeHora();

    if (hora < 12) {
        saludo = "¡Buenos días!";
    }
    document.getElementById("saludar").innerHTML = saludo + "<br />hora = " + hora;
}


// condicional if...else

function saludo2() {
    var saludo = "";
    var hora = dimeHora();

    if (hora < 12) {
        saludo = "¡Buenos días!";
    } else {
        saludo = "¡Buenas tardes!";
    }
    document.getElementById("saludar").innerHTML = saludo + "<br />hora = " + hora;
}


// condicional if anidados

function saludo3() {
    var saludo = "";
    var hora = dimeHora();

    if (hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora < 20) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }
    document.getElementById("saludar").innerHTML = saludo + "<br />hora = " + hora;
}

// condicional switch

function saludo4() {
    var saludo = "";
  // No se llama a dimeHora() porque no se desea que se valide el input campo_hora
  // Fíjese que si se deja campo_hora vacío, la variable hora será la cadena vacía
  // La función Number convierte la cadena vacía en el número 0
    var hora = document.getElementById("campo_hora").value;

  //función Number necesaria para que la comprobación de los case se haga correctamente
  //porque hora del campo_hora es texto y hora de Date().getHours() es numérico
  // NO es lo mismo case 0: que case '0':
    switch (Number(hora)) {
        case 0:
            saludo = "¡cero: Hora bruja!";
            break;
        case 1:
        case 2:
        case 3:
            saludo = "¡Buenas noches, noches...!";
            break;
        case 4:
        case 5:
        case 6:
            saludo = "¡Buenas madrugadas...!";
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            saludo = "¡Buenos días!";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            saludo = "¡Buenas tardes!";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            saludo = "¡Buenas noches!";
            break;
        default:
            saludo = "¡No me tomes el pelo!";
    }
    document.getElementById("saludar").innerHTML = saludo + "<br />hora = " + hora;
}
