/*let pito = "banana";

switch (pito){
    case "banana":
        console.log("esto es una fruta amarilla");
        alert("es una banana");
        break;
    
    case "pera":
        console.log("esto tiene forma de fruta blanda");
        alert("es una pera");
        break;

    case "manzana":
        console.log("esto es una manzana");
        alert("es una manzana");
        break;
    default:
        alert("No es ninguna");
}
*/

const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8,7,prevRes);
        mensaje = definirMensaje(resultado[1]);
    } catch(e){
        resultado = "¿ SOS GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio!!";

    }
    abrirModal(resultado[0],mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser ten HDP!!";
        break;
        case 2: resultado = "Sos malisimo para mi materia!!";
        break;
        case 3: resultado = "No sabes casi nada!!";
        break;
        case 4: resultado = "Muy mal!!";
        break;
        case 5: resultado = "Mal !!";
        break;
        case 6: resultado = "Regular !!";
        break;
        case 7: resultado = "Bien, pero puede mejorar !!";
        break;
        case 8: resultado = "Muy Bien !!";
        break;
        case 9: resultado = "Exelente !!";
        break;
        case 10: resultado = "Insuperable, hijo de tu pinche madre!!";
        break;
        default: resultado = null;
    }
    return resultado
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return ["<span class='green'>APROBADO</span>",Math.round(promedio)]; 
    }
    return ["<span class='red'>DESAPROBADO</span>",Math.round(promedio)];
}


const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu Prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    
    
}