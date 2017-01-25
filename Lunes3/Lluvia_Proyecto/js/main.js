/*
alert("También funciona aqu'i JS!S");
document.write("Podemos mostrar algo");
console.log("Aquí abajo también se ve");
document.getElementById("texto").innerHTML="ESte es el segundo texto";
*/

//solo una linea
//VARIABLES
/*
var x,y,z;//toipado dinamico tipaado debil

x = 5;
y = 6.3;

z = x+y;

z = number();//asignar valor a la variable --no se inicializa al inicio
alert(z);
*/
//FUNCIONES
/*
function tunNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre + " " + apellido;
//  document.write(nombreCompleto);
  return nombreCompleto;
}
var alumno = tunNombreCompleto("Lluvia", "Manilla");

alert(alumno);
*/

//OBJETOS
//esqueleto objeto
/*
var miPrimerObjeto = {nombre:"Isela", apellido:"García"};
alert(miPrimerObjeto.nombre);
*/
/*
var persona = "JOrge";
var otraPersona = persona;
persona = "Amanda";

document.write(persona);
document.write(otraPersona);
*/
/*
//-------------
var persona = {nombre:"Jorje"};
var otraPersona2 = persona;

persona.nombre = "Amanda";
alert(persona.nombre);
alert(otraPersona2.nombre); //muestra Amanda
*/
/*
var fruta = {
  nombre:"mango",
  color:"Amarillo",
  dulce:8,

  queDulceSOy:function(){
    alert("Soy muuuuy dulce");
  }
}
  fruta.queDulceSOy();
  /*
  */
  //reemplazo de texto
  /*
alert("Retardo");///deja ver el prir algo
//document.getElementById("primero").innerHTML = "Aqui hay otro algo"
//concatenamos
document.getElementById("primero").innerHTML += "Lluvi MAnilla"
*/
/*
document.getElementById("botonConClick").onclick=function(){
//  alert("No me clickes, me haces cosquillas");
//document.getElementById("aparecerTexto").innerHTML="Este es un texto fantasma";
document.getElementById("aparecerTexto").innerHTML="<p class="etijs">LLuvia</p>"";
document.getElementById("aparecerTexto").style.color = "blue";
document.getElementById("aparecerTexto").style.cssText = "colo:blue;background-color:red;"
}


//aparecerTexCSS
*/
/*
var nombre = "primero";
document.getElementById('priboton').onclick=function(){

  document.getElementById(nombre).innerHTML="Si resulto!!";
}
*/

document.getElementById("btnInput").onclick=function(){
  var valor = document.getElementById("miInput").value;
  document.getElementById("vacio").innerHTML=valor;
}
