"use strict";

//------------------------------------USO DEL OBJETO DATE--------------------------------------------------------------

// const fecha = new Date();    //poniendo new es un metodo, y puedo descomponerlo

// console.log(fecha);

// console.log(fecha.getDate());      // devuelve el dia actual
// console.log(fecha.getDay());       // devuelve el dia de la semana
// console.log(fecha.getMonth());     // devuelve el mes (tipo arraiz 0-11)
// console.log(fecha.getFullYear());  // devuelve el año actual
// console.log(fecha.getHours());     // devuelve la hora actual
// console.log(fecha.getMinutes());   // devuelve los minutos
// console.log(fecha.getSeconds());   // devuelve los segundos
 
//------------------------------------------ PROGRAMACION DE UN RELOJ-------------------------------------------------

// const addZeros = n =>{
//     if (n.toString().length < 2) return "0".concat(n);
//     return n;
// }

// const actualizarHora = ()=>{
//     const time = new Date();
//     let hora = addZeros(time.getHours());
//     let min = addZeros(time.getMinutes());
//     let seg = addZeros(time.getSeconds());
//     document.querySelector(".hora").textContent = hora;
//     document.querySelector(".min").textContent = min;
//     document.querySelector(".seg").textContent = seg;
// }
// actualizarHora();                   // esta funcion es para que el reloj no quede en 0 ese segundo que espera al actualizar
// setInterval(actualizarHora,1000);  // se actualiza cada 1 segundo


//------------------------------- LOCALSTORAGE SESSIONSTORAGE----------------------------------------------------------

// localStorage.setItem("nombre","pedro")

// console.log(localStorage);

// let nombre = localStorage.getItem("nombre");
// console.log(nombre)

// sessionStorage.setItem("nombre","pedrobich")

// console.log(localStorage);
// setTimeout(()=>{
// let nombre = sessionStorage.removeItem("nombre");
// },2000)

// console.log(localStorage);
// setTimeout(()=>{
//     let nombre = localStorage.clear();
// },2000)

// --------------------------------- PROGRAMA PARA ELEGIR IDIOMA---------------------------------------------------

// const modal = document.querySelector(".modal-overlay");

// const definirIdioma = ()=>{
//     document.querySelector(".en").addEventListener("click",()=>{
//         localStorage.setItem("idioma","en");
//         cerrarModal();
//     })
//     document.querySelector(".es").addEventListener("click",()=>{
//         localStorage.setItem("idioma","es");
//         cerrarModal();
//     })
// }

// const cerrarModal = ()=>{
//     modal.style.animation = "desaparecer 1s forwards";
//     setTimeout(()=>modal.style.display = "none",1000);
// }

// const idioma = localStorage.getItem("idioma");

// if (idioma === null ) definirIdioma();
// else {
//     console.log(`Idioma: ${idioma}`);
//     modal.style.display = "none";
// }

// if (idioma == "es") mostrarEnEspañol();
// else mostrarEnIngles();

// reinicio el programa con localstorage.clear() y sessionstorage.clear()

//-------------------------------------------------DRAG & DROP ----------------------------------------------------

// const circulo = document.querySelector(".circulo");
// const rectangulo = document.querySelector(".rectangulo");

// circulo.addEventListener("dragstart",(e)=>{
//     e.dataTransfer.setData("clase",e.target.className);
// });
// // circulo.addEventListener("drag",()=>console.log("2"));
// // circulo.addEventListener("dragend",()=>console.log("3"));

// rectangulo.addEventListener("dragenter",()=>console.log(1));

// rectangulo.addEventListener("dragover",(e)=>{
//     e.preventDefault();
//     console.log(2);
// })
// rectangulo.addEventListener("drop",(e)=>{
//     console.log(e.dataTransfer.getData("clase"))
// });

// rectangulo.addEventListener("dragleave",()=>console.log(4));

//---------------------------------EJEMPLO DE TEXTURAS-------------------------------------------------------------

// const zona = document.querySelector(".zona");
// zona.addEventListener("dragover",(e)=>{
//     e.preventDefault();
// })
// zona.addEventListener("drop",(e)=>{
//     let n = e.dataTransfer.getData("textura");
//     zona.style.background = `url("textura${n}.png")`;
// })

// for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
//     document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e))
// }

// const transferirTextura = (n,e)=>{
//     e.dataTransfer.setData("textura",n);
// }

//----------------------------------GEOLOCALIZACION----------------------------------------------------------------

// const geolocation = navigator.geolocation;
// const posicion = (pos)=>{
//     console.log(pos)
// }
// const err = ()=> console.log(e);

// const options = {
//     maximumAge: 0,
//     timeout: 3000,
//     enableHightAccuracy: true
// }

// geolocation.getCurrentPosition(posicion,err,options)

//------------------------------------ API HISTORIAL-----------------------------------------------------------------

// addEventListener("popstate",(e)=>{           MANEJO DE HISTORIAL
//     console.log(e.state)
// })

//------------------------------------API FILEREADER-----------------------------------------------------------------
// const archivo = document.getElementById('archivo');

// archivo.addEventListener("change",(e)=>{
//     leerArchivo(archivo.files)
// })

// const leerArchivo = ar =>{

//     for (var i = 0; i < ar.length; i++) {
//         const reader = new FileReader();
//         reader.readAsText(ar[i]);                       //readAsText lee archivos de texto
//         reader.addEventListener("load",(e)=>{
//         console.log(JSON.parse(e.currentTarget.result))
//     })  
// }
// }

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------EJEMPLO 1 CREAR UNA GALERIA----------------------------------------------------

// const archivo = document.getElementById('archivo');

// archivo.addEventListener("change",(e)=>{
//      leerArchivo(archivo.files)
// })

// const leerArchivo = ar =>{

//      for (var i = 0; i < ar.length; i++) {
//          const reader = new FileReader();
//          reader.readAsDataURL(ar[i]);                       //readAsText lee archivos de Imagen
//          reader.addEventListener("load",(e)=>{
//          let newImg = `<img src = '${e.currentTarget.result}'>`;
//          document.querySelector(".resultado").innerHTML += newImg;
//      })  
// }
// }

//------------------------------------- INDEXEDDB --------------------------------------------------------------

const IDBRequest = indexedDB.open("daltobase",1);   // solicitamos abrir la base de datos

IDBRequest.addEventListener("upgradeneeded",()=>{
     const db = IDBRequest.result;
     db.createObjectStore("nombres",{
          autoIncrement: true
     });
})

IDBRequest.addEventListener("success",()=>{              // si la base esta creada la abre
     console.log("Todo salio correctamente!!");
})

IDBRequest.addEventListener("error",()=>{
     console.log("Ocurrio un error al abrir la base de datos....");  // si algo sale mal
})

const addObjeto = objeto =>{
     const db = IDBRequest.result;
     const IDBtransaction = db.transaction("nombres","readwrite");
     const objectStore = IDBtransaction.objectStore("nombres");
     objectStore.add(objeto);
     IDBtransaction.addEventListener("complete",()=>{
          console.log("Objeto agregado correctamente");
     })
}

const leerObjetos = ()=>{
     const db = IDBRequest.result;
     const IDBtransaction = db.transaction("nombres","readonly");
     const objectStore = IDBtransaction.objectStore("nombres");
     const cursor = objectStore.openCursor();
     cursor.addEventListener("success",()=>{
          if (cursor.result) {
               console.log(cursor.result.value);
               cursor.result.continue();
          }else console.log("Todos los datos fueron leidos")
     })
}

const modificarObjeto = (key,objeto) =>{
     const db = IDBRequest.result;
     const IDBtransaction = db.transaction("nombres","readwrite");
     const objectStore = IDBtransaction.objectStore("nombres");
     objectStore.put(objeto,key);
     IDBtransaction.addEventListener("complete",()=>{
          console.log("Objeto modificado correctamente..");
     })
}

const eliminarObjeto = key =>{
     const db = IDBRequest.result;
     const IDBtransaction = db.transaction("nombres","readwrite");
     const objectStore = IDBtransaction.objectStore("nombres");
     objectStore.delete(key);
     IDBtransaction.addEventListener("complete",()=>{
          console.log("Objeto ELIMINADO correctamente..");
     })
}