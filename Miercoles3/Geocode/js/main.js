$(document).ready(function(){
  var imagenes =
  ['img/c9.jpg','img/c8.jpg','img/c7.jpg','img/c6.jpg','img/c5.jpg'];

  $(".imgFondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

$("#mandar").click(function(){
  var direccion = $("#direc").val();

//var direccion = "Tultitlan 11 Vergel del Sur";
//var direccion = "Avenida Centenario 283";
//document.write(direccion)
var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion+'&key=AIzaSyC9h6Dakpojmg7qrqhQMekVyH-QqbEk5m0';

//document.write("<br>")
//document.write(link)

//Ajax metodo para hacer consultas desde API mandar desde el codigo al navegador
$.ajax({
  dataType: "json",
  url: link,
  success: recibirDatos
});//metodo ajax recibe parametro
/**/
//funcion para saber qque funciona ajax
function recibirDatos(json){
  //alert("Lo logramos ;)");
  //
  var informacion = json;
//console.log(informacion.results[0].address_components[6].long_name);
  var codigoPostal = informacion.results[0].address_components[6].long_name;

// $("#respuesta").html(codigoPostal);

  $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-4"><h6>Tu codigo Postal es:'+codigoPostal+'</h6></div>')

}//fin function recibirDatos
});//direc
}); //fin document
