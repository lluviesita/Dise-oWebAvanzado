//modo sctricto de js --no poder crear una variable directa
/*
'use strict';//no tan amigable--uso como otros lenguajes
//b=10;
var b=10;
console.log(b);
*/
//Archivo de angular
(function(){
'use strict';

angular
.module("myApp",[])
.controller("movieCtrl", movieCtrl);

function movieCtrl(){
  var movie = this;
  //declarando arreglo en formato JSON
  movie.nombre = [{'nombre':'Luis','edad': 18},{'nombre':'Donaldo','edad': 20}]; //diccionarioen en json


  movie.collection = [
    {
    'img':'http://4.bp.blogspot.com/_JWt7HrYXzSE/TSO4McUbQhI/AAAAAAAAEdI/U-t0iiRCTKU/s275/megamente.jpg',
    'name':'Megamente',
    'cast':['Megamente','Reportera','Heroe'],
    'year':2010,'category':'Dibujos animados'
    },

    {
    'img':'https://upload.wikimedia.org/wikipedia/en/1/19/Sailor_moon_dvd_cover.jpg',
    'name':'Sailor Moon R',
    'cast':['Sailor moon','Sailor Mars','Sailor Mercury'],
    'year':2013,
    'category':'anime'
    },

    {
    'img':'http://www.pelismundo.com/wp-content/uploads/2015/05/Algo-pasa-en-Las-Vegas-Locura-de-amor-en-Las-Vegas.jpg',
    'name':'Locuras en las vegas',
    'cast':['Cameron Diaz',' Ashton Kutcher'],
    'year':2008,'category':'Comedia'
    }

];
}

})();//parentesis por modo estricto
