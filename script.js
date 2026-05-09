const data = {

michael:{
titulo:"Michael",
imagen:"michael.jpg",
duracion:"2h 8m",
genero:"Musical / Drama",
sinopsis:"Esta película narra la vida del legendario cantante Michael Jackson, mostrando su ascenso a la fama y su impacto en la música."
},

prada:{
titulo:"El Diablo viste a la moda",
imagen:"diablo.webp",
duracion:"2h",
genero:"Comedia / Moda",
sinopsis:"Andrea Sachs entra al mundo de la moda trabajando para una poderosa editora y enfrenta grandes retos personales."
},

mario:{
titulo:"Super Mario Bros",
imagen:"https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
duracion:"1h 39m",
genero:"Aventura / Infantil",
sinopsis:"Mario y Luigi deben salvar el Reino Champiñón enfrentando grandes peligros."
}

};

let peliculaActual = "";


/* ABRIR DETALLE */

function ver(p){

peliculaActual = p;

document.getElementById("detalle").style.display = "flex";

document.body.style.overflow = "hidden";

document.getElementById("titulo").innerText = data[p].titulo;
document.getElementById("imagen").src = data[p].imagen;
document.getElementById("duracion").innerText = data[p].duracion;
document.getElementById("genero").innerText = data[p].genero;
document.getElementById("sinopsis").innerText = data[p].sinopsis;

cargarEstrellas();
cargarComentarios();

window.scrollTo(0,0);
}


/* CERRAR DETALLE */

function cerrar(){

document.getElementById("detalle").style.display = "none";

document.body.style.overflow = "auto";
}


/* CERRAR CON ESC */

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){

cerrar();

}

});


/* BUSCADOR */

document.getElementById("buscador").addEventListener("keyup", function(){

let filtro = this.value.toLowerCase();

let peliculas = document.querySelectorAll(".pelicula");

peliculas.forEach(p => {

let texto = p.innerText.toLowerCase();

p.style.display = texto.includes(filtro) ? "" : "none";

});

});


/* ESTRELLAS */

const estrellas = document.querySelectorAll(".estrella");

const resultado = document.getElementById("resultado");

estrellas.forEach(e => {

e.onclick = function(){

let v = this.getAttribute("data");

localStorage.setItem("rating_" + peliculaActual, v);

pintarEstrellas(v);

resultado.innerText = "Le diste " + v + " de 5 estrellas ⭐";

}

});


function pintarEstrellas(v){

estrellas.forEach(s => s.classList.remove("activa"));

for(let i = 0; i < v; i++){

estrellas[i].classList.add("activa");

}

}


function cargarEstrellas(){

let guardado = localStorage.getItem("rating_" + peliculaActual);

if(guardado){

pintarEstrellas(guardado);

resultado.innerText = "Le diste " + guardado + " de 5 estrellas ⭐";

}else{

resultado.innerText = "";

estrellas.forEach(s => s.classList.remove("activa"));

}

}


/* COMENTARIOS */

function agregarComentario(){

let texto = document.getElementById("comentario").value;

if(texto.trim() != ""){

let comentarios = JSON.parse(localStorage.getItem("coment_" + peliculaActual)) || [];

comentarios.push(texto);

localStorage.setItem("coment_" + peliculaActual, JSON.stringify(comentarios));

document.getElementById("comentario").value = "";

cargarComentarios();

}

}


function cargarComentarios(){

let lista = document.getElementById("listaComentarios");

lista.innerHTML = "";

let comentarios = JSON.parse(localStorage.getItem("coment_" + peliculaActual)) || [];

comentarios.forEach(c => {

let p = document.createElement("p");

p.classList.add("comentario-item");

p.innerText = "🗨️ " + c;

lista.appendChild(p);

});

}