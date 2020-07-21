$(function(){
    agregarHeader();
    agregarFooter();
});

function agregarHeader(){
    var menu = document.getElementById("header");
    menu.innerHTML = 
        '<nav>'+
        '<ul>'+
          '<li class="logo"><a href="/"><img src="/imagenes/Logo1.PNG" alt="Cursos y Tips" width="80" height="47"'+ 'class="imgLogo"></a></i>'+
          '<li><a href="/">Excel</a></li>'+
          '<li><a href="/temas/powerbi/powerbi.html">PowerBI</a></li>'+
          '<li><a href="/temas/python/python.html">Data Science</a></li>'+
        '</ul>'+
      '</nav>'+
      '<button><a href="/temas/contacto/contacto.html">Contacto</a></button>'
}

function agregarFooter(){
    var footer = document.getElementById("footer");
    footer.innerHTML = 
        '<h4>Cursos y Tips</h4>'+
        '<p>Si no encuentra el tema que está buscando, solicitarlo a través de la sección <a href="/temas/contacto/contacto.html"><u>CONTACTO</u></a>.</p>'
}
