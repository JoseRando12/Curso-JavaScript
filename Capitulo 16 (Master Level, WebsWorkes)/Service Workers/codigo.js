"use strict";

//if (!navigator.serviceWorker){
//    console.log("Tu navegador no soporta ServiceWorker")
//elseif(navigator.serviceWorker.register())
//}

if (navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js")
}

navigator.serviceWorker.ready.then(res=> res.active.postMessage("Hola Como Estas"));    //verifica que el serviworker este cargado

navigator.serviceWorker.addEventListener("message",e=>{
    console.log("Mensaje recibido del Service Worker:");
    console.log(e.data);
})