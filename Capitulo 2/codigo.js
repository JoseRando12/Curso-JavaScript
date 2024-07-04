/*let pc1 = {
    nombre: "JosePc",
    procesador: "IntelCoreI5",
    ram: "4GB",
    espacio: "420GB",
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];


frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
         El procesador es: <b>${procesador}</b> <br>
         la memoria ram es de: <b>${ram}</b> <br>
         el espacio en el disco es de: <b>${espacio}</b> <br>`;

document.write(frase); */

//let numero = 0;

/*while (numero < 6){                         //ejemplo de un bucle, while pregunta y despues ejecuta
    numero ++;
    document.write(numero + "<br>");
}*/

/*do {
    document.write(numero + "<br>");    // do while primero ejecuta y despues pregunta
    numero ++;
}
    while (numero < 6);
*/
/*while (numero < 1000){
    numero++;
    document.write(numero);     //break, cuando se cumple la condicion para y sigue con el programa.
    if (numero == 10){
        break;
    }
}
document.write("fin");
*/

/*for (let i = 0; i < 6; ++i){          //creamos la variable i y le dimos 0, le dimos una condicion si se cumple, la aumentamos, sigue el bucle
    document.write(i + "<br>");
}*/

/*for (let i = 0; i < 20; i++){
    if (i == 4){
        continue;
    }
document.write(i + "<br>");    //esta accion continue, saltea el numero seleccionado y continua
}*/

/*let animales = ["gato","perro","tiranosaurio rex"];  //arraiz

for (animal in animales){
    document.write(animal + "<br>");   //for in muestrsa posiciones
}
document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");     // for of muestra nombres
}*/

//FUNCIONES: SON UNA PORCION DE CODIGO

/*function saludar ()  //creamos la funcion
{

respuesta = prompt("Hola Jose! Como fue tu dia?");
    if(respuesta=="bien"){
        alert("me alegro!!")
    }
    else{
        alert("Una Pena!!")
    } 

}

saludar();  //llamamos a la funcion
*/

/*function saludar()
{
    alert("hola Jose sos un Capo");
    return "Gracias amigoooo!!!"

}
let saludo = saludar();

document.write (saludo);
*/

/*function suma(num1,num2)
{
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(10,10);   //definimos los PARAMETROS al llamar a la variable
*/

/*function saludar(nombre){
    let frase = `¡¡Hola ${nombre}!! ¿Como estas?`;   //ejemplo de otro parametros
    document.write(frase);
}
saludar("JOSE");
*/
/*const saludar = function(nombre)
{
    let frase = `¡¡Hola ${nombre}!! ¿Como estas?`;   // otra forma de ejecutar funciones con variables     
    document.write(frase);
}

saludar("MILITO");
*/

/*const saludar = (nombre)=>
{
    let frase = `¡¡Hola ${nombre}!! ¿Como estas?`;   // otra forma de ejecutar funciones FLECHA con variables     
    document.write(frase);
}

saludar("GAELITO");
*/

/*const saludar = (nombre)=>{
    document.write("Hola!! Como estan??" + nombre)        // otra manera de funciones flecha
}
saludar("amores");
*/

//EJERCICIO DE LA CLASE 2

/*let free = false;

const validarCliente = (time)=>{
        let edad = prompt("Cual es tu edad?:");
        if(edad > 18){
            if (time >= 2 && time < 7 && free == false) 
                {
                alert("Podes pasar gratis porque sos la primer persona despues de las 2AM ");
                free = true;
                }
            else 
                {
                    alert(`Son las ${time}:00 podes pasar pero abonas entrada`);
                }
            }
        else
            {
                alert ("Mira papu sos menor de edad no vas a poder ingresar, MAQUINOLA")
            }
}

validarCliente(23);
validarCliente(24);
validarCliente(0,2);
validarCliente(0,6);
validarCliente(1);
validarCliente(2);
validarCliente(2,4);
validarCliente(3);
*/

/*let cantidad = prompt("¿Cuantos Alumnos son?:");
let alumnosTotales = [];

for (i=0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "P" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i ++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    __________________Ausencias: <b>${30- alumnosTotales[alumno][1]} </b>`;

    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style='color:red'> REPROBADO POR INASISTENCIAS </b><br><br>";}
    else {
        resultado+= "<br><br>"
    }

    document.write(resultado)
}
*/

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert ("Que operacion deseas realizar?");
    let operacion = prompt("1: Suma, 2: Resta , 3: Division, 4: Multiplicacion");
        if (operacion == 1){
            let numero1 = prompt("Primer numero para Sumar:");
            let numero2 = prompt("Segundo numero para Sumar");
            resultado = sumar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 2){
            let numero1 = prompt("Primer numero para Restar:");
            let numero2 = prompt("Segundo numero para Restar");
            resultado = restar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 3){
            let numero1 = prompt("Primer numero para Dividir:");
            let numero2 = prompt("Segundo numero para Dividir");
            resultado = dividir(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 4){
            let numero1 = prompt("Primer numero para Multiplicar:");
            let numero2 = prompt("Segundo numero para Multiplicar");
            resultado = multiplicar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else {
            alert("Rancio ingresa algo coerente....");
        }