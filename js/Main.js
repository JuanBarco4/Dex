//FUNCION
function activar(){
    var ico_menu2 = document.getElementById('ico_menu2');
    var menu = document.getElementById('menu');
    var apple = document.getElementById('ico_menu');

    ico_menu2.classList.add("activar");
    menu.classList.add("activar");
    apple.classList.remove("activar");
}

function desactivar(){
    var ico_menu2 = document.getElementById('ico_menu2');
    var menu = document.getElementById('menu');
    var apple = document.getElementById('ico_menu');

    ico_menu2.classList.remove("activar");
    menu.classList.remove("activar");
    apple.classList.add("activar");
}

function activacion() {
    var ventana = document.getElementById('ventana');
    var ico_ventana = document.getElementById('ico_ventana');
    var note = document.getElementById('note');

    ventana.classList.add("activacion");
    ico_ventana.classList.add("activacion");
    note.classList.remove("note");
}

function desactivacion(){
    var ventana = document.getElementById('ventana');
    var ico_ventana = document.getElementById('ico_ventana');

    ventana.classList.remove('activacion');
    ico_ventana.classList.remove('activacion');
}

function noteActive(){
    var ventana = document.getElementById('ventana');
    var ico_ventana = document.getElementById('ico_ventana');

    ventana.classList.add("activacion");
    ico_ventana.classList.add("activacion");
}

function maxi(){
    var ventana_container = document.getElementById('ventana_container');
    var ico_maxi = document.getElementById('maximize');
    var mini = document.getElementById('minimize');

    ventana_container.classList.add("maximizar");
    ico_maxi.classList.remove('maxi');
    mini.classList.remove('mini');
}

function mini(){
    var ventana_container = document.getElementById('ventana_container');
    var ico_maxi = document.getElementById('maximize');
    var mini = document.getElementById('minimize');

    ventana_container.classList.remove("maximizar");
    ico_maxi.classList.add('maxi');
    mini.classList.add('mini');
}

function cerrar(){
    var ventana = document.getElementById('ventana');
    var ico_ventana = document.getElementById('ico_ventana');
    var note = document.getElementById('note');

    ventana.classList.remove("activacion");
    ico_ventana.classList.remove("activacion");
    note.classList.add("note");
}