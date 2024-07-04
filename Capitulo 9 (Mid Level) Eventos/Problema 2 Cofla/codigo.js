let alumnos = [{
    nombre: "Jose Rando",
    email: "joseandresrando@gmail.com",
    materia: "Fisica 3",
},{
    nombre: "Milo Rando",
    email: "milorando12@gmail.com",
    materia: "Fisica 1",
},{
    nombre: "Gael Rando",
    email: "gaelrando12@gmail.com",
    materia: "Matematica",
},{
    nombre: "Laura Jauregui",
    email: "lauramarisoljauregui@gmail.com",
    materia: "Contabilidad",
},{
    nombre: "Mariano Rando",
    email: "marianorando@gmail.com",
    materia: "Lengua y Literatura",
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector("grid-container");

// let htmlCode = "";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;


   document.querySelector(".grid-container").innerHTML += htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if (confirmar){
    document.body.removeChild(boton)
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
    }
})