let nav = document.getElementById('nav');
let background_menu = document.getElementById("back_menu");

document.getElementById('btn__menu').addEventListener('click', ()=>{
    nav.style.right = '0px';
    background_menu.style.display = "block";
});

document.getElementById('close__menu').addEventListener('click', ocultarMenu);
background_menu.addEventListener('click',ocultarMenu);

function ocultarMenu(){
    nav.style.right = '-375px';
    background_menu.style.display = "none";
}


