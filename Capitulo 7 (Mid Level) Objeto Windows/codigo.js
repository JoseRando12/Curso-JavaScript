// window.open("https://youtube.com");   // abre una ventana nueva


// let youtubeURL = "https://youtube.com";

// let ventana = window.open(youtubeURL);

// ventana.close();

// let youtubeURL = "https://youtube.com";

// print()  // permite imprimir

// respuesta = confirm("estas Seguro que deseas salir del sitio web??");
// console.log(respuesta);   // devuelve false o true

// ----------------------------------------------------------------------------------------------------------------

// const screen = window.screen;

// console.log(screen);
// document.write(screen.availWidth);  // muestra propiedades del sceen

// const screenLeft = window.screenLeft;
// const sceenTop = window.screenTop;

//document.write(`Left: <b> ${screenLeft}</b><br>    // nos muestra los margenes izquierdos y top es una propiedad de lectura
//                Top: <b> ${screenTop}</b><br>`)


// window.open("http://youtube.com");
// const href = window.location.href;

// document.write(href);

//----------------------------------PROBLEMA DE COFLA 7------------------------------------------------------------

/* let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if (comprar) {
    alert ("La compra fue realizada exitosamente...");
} else {
    alert ("La compra fue cancelada....");
} 
*/

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></b><br>`;
    html += `Hostname: <b>${hostname}</b></b><br>`;
    html += `Pathname: <b>${pathname}</b></b><br>`;
    html += `URL Completa: <b>${href}</b></b><br>`;

    document.write(html)