$(document).ready(function(){
    $("#content").load("views/inicio.html");

    $("#inicio").click(function(){
        $("#content").load("views/inicio.html");
    });

    $("#soybutton").click(function(){
        $("#content").load("views/soy.html");
    });

    $("#forbutton").click(function(){
        $("#content").load("views/formacion.html");
    });

    $("#expbutton").click(function(){
        $("#content").load("views/experiencia.html");
    });

    $("#porbutton").click(function(){
        $("#content").load("views/portafolio.html");
    });

    $("#contButton").click(function(){
        $("#content").load("views/contact.html");
    });

    mostrarFooter();
});


/**
 * Muestra el contenido del footer
 */
function mostrarFooter(){
//Se obtiene año actual
    let fecha = new Date();
    let anio = fecha.getFullYear();

    let footer = document.getElementById("footer");
    footer.textContent = "Todos los derechos Reservados - Copyright © "+anio+" - @juan23davila";
}