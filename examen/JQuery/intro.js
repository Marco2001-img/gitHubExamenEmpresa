$(document).ready(function(){
  var titulo = $('#titulo');
  var informacion = $('#info');

  informacion.append('ancho ' + titulo.width() + '<br/>' );
  informacion.append('Ancho ' + titulo.innerWidth() + '<br/>');
  informacion.append('Ancho ' + titulo.outerWidth() + '<br/>');
  informacion.append('Ancho ' + titulo.outerWidth(true) + '<br/>') 

  informacion.append('Alto ' + titulo.height() + '<br/>');
  informacion.append('Ancho ' + titulo.innerHeight() + '<br/>');
});