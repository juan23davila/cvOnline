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
});