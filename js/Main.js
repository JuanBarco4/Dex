//Etiquetas del index
var menu = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');
var ventana = document.getElementById('ventana');
var ico_ventana = document.getElementById('ico_ventana')

//FUNCION
function activar(){
    menu.classList.add("activar");
}

function activacion() {
    ventana.classList.add("activacion");
}

//Evento
ico_menu.addEventListener('click',activar);
ico_ventana.addEventListener('click',activacion);