// Paso a jQuery septiembre 2016

// ejemplos de control de flujo en javascript
// Implatación de Apliaciones Web de 2º ASIR IES Virgen del Carmen de Jaén
// a partir del tutorial http://www.w3schools.com/js

// El saludo vendrá dado por la hora del sistema o bien por la introducida en campo_hora  

// Función con ámbito global
// validar el campo de texto hora para que admita solamente valores del 0 al 24

function validarHora() {
    var valor = $("#campo_hora").val();
    if (valor !== "") {
        if (isNaN(valor) || valor < 0 || valor > 24 || valor === "-0") {
            $("#campo_hora").val("");
            return false;
        } else {
            return true;
        }
    }
}

// Al  cargar página mostrar fecha - hora y borrar el text del input
// http://api.jquery.com/ready/

$(function () {
    $("#fecha_hora").html(Date()); // http://api.jquery.com/html/
    $("#campo_hora").val(""); // http://api.jquery.com/val/
    $("#campo_hora").change(validarHora); // http://api.jquery.com/change/

    // hora del sistema o bien hora del input campo_hora
    function dimeHora() {
        // variable local con la hora del sistema
        var h = new Date().getHours();

        // Si se ha introducido un valor válido en campo_hora
        if (validarHora()) {
            h = $("#campo_hora").val();
        }
        return h;
    }

    // http://api.jquery.com/click/

    // condicional if simple
    $("#if_simple").click(function () {
        var saludo = "";
        var hora = dimeHora();

        if (hora < 12) {
            saludo = "¡Buenos días!";
        }
        $("#saludar").html(saludo + "<br />hora = " + hora);
    });

    // condicional if...else
    $("#if_else").click(function () {
        var saludo = "";
        var hora = dimeHora();

        if (hora < 12) {
            saludo = "¡Buenos días!";
        } else {
            saludo = "¡Buenas tardes!";
        }
        $("#saludar").html(saludo + "<br />hora = " + hora);
    });

    // condicional if anidados
    $("#if_anidados").click(function () {
        var saludo = "";
        var hora = dimeHora();

        if (hora < 12) {
            saludo = "¡Buenos días!";
        } else if (hora < 20) {
            saludo = "¡Buenas tardes!";
        } else {
            saludo = "¡Buenas noches!";
        }
        $("#saludar").html(saludo + "<br />hora = " + hora);
    });

    // condicional switch
    $("#switch").click(function () {
        var saludo = "";
        // No se llama a dimeHora() porque no se desea que se valide el input campo_hora
        // Fíjese que si se deja campo_hora vacío, la variable hora será la cadena vacía
        // La función Number convierte la cadena vacía en el número 0
        var hora = $("#campo_hora").val();

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
        $("#saludar").html(saludo + "<br />hora = " + hora);
    });

}); // fin ready
