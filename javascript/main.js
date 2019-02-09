$(document).ready(function(){
    $("#content").load("views/soy.html");

    $("#soybutton").click(function(){
        $("#content").load("views/soy.html");
    });

    $("#expbutton").click(function(){
        $("#content").load("views/experiencia.html");
    });

    $("#porbutton").click(function(){
        $("#content").load("views/portafolio.html");
    });
});