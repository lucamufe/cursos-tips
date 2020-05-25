$(function(){
    agregarMenu();
    agregarFooter();
});

function agregarMenu(){
    var menu = document.getElementById("menu");
    menu.innerHTML = 
    '<div class="Sup">'+
        '<div class="Logo">'+
            '<img src="../../imagenes/Logo1.PNG" alt="Cursos y Tips" width="80" height="50" class="imgLogo">'+
        '</div>'+
        '<div class="Nave">'+
            '<ul class="VerNav">'+
                '<li style="float:right"><a href="#">Contacto</a></li>'+
                '<li style="float:right"><a href="#">Python</a></li>'+
                '<li style="float:right"><a href="#">Power BI</a></li>'+
                '<li style="float:right"><a href="./temas/excel/excel.html">Excel</a></li>'+
                '<li style="float:right"><a href="/">Home</a></li>'+
            '</ul>'+
        '</div>'+
    '</div>'
}

function agregarFooter(){
    var footer = document.getElementById("footer");
    footer.innerHTML = 'Cursos y Tips<br>2020';
}
