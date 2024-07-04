const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor-1");
// const contenedor2 = document.querySelector(".contenedor-2");
const input = document.querySelector(".input-prueba");

// button.addEventListener("click",(e)=>{
//    alert("Di click en un boton")
//    e.stopPropagation();
//});

//---------------------------------EVENTOS DE MOUSE -------------------------------------------------------------------

// button.addEventListener("dblclick",(e)=>{     //doble click
//    alert("Di click en un boton")
// });

// button.addEventListener("mouseover",(e)=>{     //mouse over
//     alert("Di click en un boton")
// });

// button.addEventListener("contextmenu",(e)=>{     //click derecho del mouse
//    alert("Di click en un boton derecho del mouse")
//});


// contenedor.addEventListener("click",(e)=>{
//     alert("Di click en el contenedor")
// });

//--------------------------------------EVENTOS DE TECLADO--------------------------------------------------------------

/*input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada");
});

input.addEventListener("keypress",(e)=>{
    console.log("Un usuario presiono una tecla y la solto");
});

input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada");
});
*/
//----------------------------------- EVENTOS DE INTERFACE -------------------------------------------------------------

// error
// load
//unload
//resize
//scroll
///select

//-------------------------------------TIME (TEMPORIZADORES)-----------------------------------------------------------

/*setTimeout(()=>{
    document.write("Holaa");  //despues de 2 segundos escribe la palabra holaaa
},2000)
*/

/*const intervalo = setInterval(()=>{
    document.write("Holaa");  //cada 2 segundos repite la palabra holaaa
},2000);

setTimeout(()=>{
    clearInterval(intervalo);   // se detiene el intervalo a los 8 seg
},8000)

*/

//------------------------------------PROBLEMA DE COFLA 9 ----------------------------------------------------------------

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})


const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 4 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;

    } else if (email.value.length < 5 ||
              email.value.length > 40 ||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;

    } else if (materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "La materia no existe";
    }

    error[0] = false;
    return error;

    
}