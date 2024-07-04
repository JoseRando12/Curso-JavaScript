

const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext("2d");

ctx.lineWidth = "6";
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#26a";
ctx.strokeRect(30,50,400,200);
ctx.fillRect(10,20,400,200);
ctx.lineTo(100,300); //cordenada 1 punto
ctx.lineTo(120,350); //Cordenada 2 punto
ctx.lineTo(100,400);
ctx.lineTo(120,450);
ctx.stroke(); //Trazado de linea

ctx.closePath(); //le da un fin a la primeras lineas creadas para poder arrancar con otra
ctx.beginPath();

ctx.lineTo(80,300);
ctx.lineTo(50,200);
ctx.stroke();

ctx.closePath();
ctx.beginPath();

ctx.arc(120,120,100,10,40);
ctx.stroke();
