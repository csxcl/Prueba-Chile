//envia mensajes de alerta al clicar
$("#enviarMensaje").click(function () {
    alert("El mensaje fue enviado correctamente...");
});

$(".fa-plane").click(function () {
    alert("Viajes");
});

$(".fa-mountain").click(function () {
    alert("Montaña");
});

$(".fa-route").click(function () {
    alert("Rutas");
});


$(".p3").ready(function(){
    $('[data-toggle="popover"]').popover();
  });

