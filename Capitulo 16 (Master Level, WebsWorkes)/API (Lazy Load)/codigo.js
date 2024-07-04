"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name,content)=>{
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnComentario.classList.add("comentario");
    btnEnviar.classList.add("enviar");

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container
}

const cargarMasPublis = entry =>{
    if (entry[0].isIntersecting) cargarPublicaciones(4);
}

const observer = new IntersectionObserver(cargarMasPublis);

const cargarPublicaciones = async num =>{
    const request = await fetch("informacion.txt");
    const content = await request.json();
    const arr = content.content;
    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
        if (arr[contador] != undefined) {
            const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
        documentFragment.appendChild(newPublicacion);
        contador++;
        if (i == num-1) observer.observe(newPublicacion)
    }else {
        if (publicaciones.lastElementChild.id !== "nomore"){
            let noMore = document.createElement("h3");
            noMore.textContent = "No hay mas Publicaciones";
            noMore.id = "nomore"
            documentFragment.appendChild(noMore);
            publicaciones.appendChild(documentFragment);
            console.log(publicaciones.lastElementChild)
            break;
        }
    }
    } 
    publicaciones.appendChild(documentFragment);
}

cargarPublicaciones(10)