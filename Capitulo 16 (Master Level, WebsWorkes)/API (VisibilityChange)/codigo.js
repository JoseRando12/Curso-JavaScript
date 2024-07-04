"use strict";

addEventListener("visibilitychange",e=>{
    if (e.target.visibilityState == "visible") {
        document.write("Che Rancio, porque abandonas la pagina...");  //cambio de pestaña
    } else {
        alert("ah volviste, muy bien")
    }
})