document.getElementById("inicia").onclick=function(){
//  alert("ESto si sirvio?");
function colorRandom(){
  var posibilidades ="0123456789ABCDEF";//arr d e15 3l3mtos
  var color ="#"; //color que va a regresar
  for (var i = 0; i < 6; i++) { //6 elemnetos para color
    color += posibilidades[Math.floor(Math.random()*15)];//math devuelve entre 0 y 1 --4.5
  }
  return color;
}

function alturaRandom(){
  var resultado = Math.floor(Math.random()*600);

  return resultado;

}

function largoRandom(){
  var resultado = Math.floor(Math.random()*95);//0a 100

  return resultado;

}

var altura = alturaRandom();
var largo = largoRandom();


var randomColor = colorRandom();

//alert(randomColor);
//document.getElementById("objetivo").style.cssText="display:none;"
document.getElementById("objetivo").style.cssText="background-color:"+randomColor+";top:"+altura+"px; left:"+largo+"%;";
//dar clic sale
document.getElementById("objetivo").onclick=function(){
alert("Me haces cosquillas");
}
}
