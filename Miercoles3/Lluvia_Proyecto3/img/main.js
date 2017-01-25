
/*
if(jQuery){
  alert("Si tenemos jQuery");
}
*/

//aceder al elemento  document.getElementById("cuadrado").onclick
//acceder desde jQuery se usa $
/*
$(".circulo").click(function(){
  alert("Soy un circulo");
});
$("#cuadrado").click(function(){
  alert("Soy un cuadrado");
})
;
*/
/*
//otra referencia para etiquetas
$("div").click(function(){
  alert("Soy un div");
}) ///si es una linea dentro no lleva ;

$("p").click(function(){
  alert("Soy p");
})
*/
/*
$("*").click(function(){
  alert("Soy algo");
})
*/
//anidar cosas//pideindo que regrese lo que hay dentro de circulo
$(".circulo").click(function(){

  $("p").html("Texto reemplazado");//obtener lo que hay dentro de las etiquetas
});

//iFRame aggragr pedazo de otra pagina
/*
$(".circulo").click(function(){
//alert($("iframe").attr("src"));
$("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
});
*/
//3 paginas
/*
var cont = 0;
$(".circulo").click(function(){//activar funcion con clik
//alert($("iframe").attr("src"));
cont++;
if(cont == 1)
  $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
else
  $("iframe").attr("src","http://www.bbc.com/mundo/topics/31684f19-84d6-41f6-b033-7ae08098572a");
});
*/
/*
$("button").click(function(){
  $(".circulo").css("width", "400px");//referncia circulo
});
*/
/*
$("button").click(function(){
  $(".circulo").css({
    'width':'300px',
    'height':'300px'
  });//referncia circulo
});
*/
/*
$("button").click(function(){//agregar mas atributos a esa clase
  $(".circulo").addClass("circulo2");
  });
  */

  //ocultar eelemnto  Z<NIMACION
  /*
  $("button").click(function(){//agregar mas atributos a esa clase
    $(".circulo").hide();
    });
    */
/*
    $("button").click(function(){//desaparece por default mas lento
      $(".circulo").fadeOut("slow");
      });
*/
/*
      $("button").click(function(){//desaparece lento
        $(".circulo").fadeOut(4000);
        });

        */
        /*
$(".circulo").click(function(){//alterar el circulo
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000)//yo cilk en el circulo y voy A HACER ALGO
})*/
/*
$(".circulo").hover(function(){//alterar el circulo
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000)//yo cilk en el circulo y voy A HACER ALGO
})
*/
$(".circulo").dblclick(function(){//alterar el circulo
  $(this).animate({
    width:"300px",
    height:"300px"
  //  backgroundColor: "#F84562" //nofunciono
  },4000)//yo cilk en el circulo y voy A HACER ALGO
})
