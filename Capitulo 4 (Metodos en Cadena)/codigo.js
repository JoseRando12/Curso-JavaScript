// let cadena = "Cadena de Prueba";

// resultado = cadena.concat(" Hola");      // CONCAT AÑADE OTRA CADENA

// document.write(resultado);

//----------------------------------------------------------------------------------------------------

// let cadena = "Cadena de Prueba";
// let cadena2 = "Cadena";

// resultado = cadena.startsWith(cadena2); // STARTSWITH DEVUELVE TRUE SI LA CADENA EMPIEZA CON LA MISMA LETRA QUE LA CADENA2
                                           // ENDSWITH ES LO MISMO PERO EL FINAL
// document.write(resultado);              // INCLUDES BUSCA DENTRO DE LA CADENA LA MISMA PALABRA SI LA CONTIENE DEVUELVE TRUE
                                           // INDEXOF IGUAL QUE EL ANTERIRO PERO DEVUELVE EL NUMERO LA POSICION QUE SE ENCUENTRA LA PRIMERA LETRA DE LA CADENA

//----------------------------------------------------------------------------------------------------

                                           // let cadena = "abc";

// resultado = cadena.padStart(6,"1");     // PADSTART RELLENA AL PRINCIPIO (3 CASILLEROS CON 1 ANTES DEL ABC) LLEGANDO A 6 CARACTERES
                                        // PADEND RELLENA AL FINAL
// document.write(resultado);              // REPEAT (4 VECES) = resultado = cadena.repeat(4), esto repite abc 4 veces

//-----------------------------------------------------------------------------------------------------

// let cadena = "Hola como estas";
// resultado = cadena.split(" ");       // SPLIT SEPARA EN ARRAIZ LA ORACION [0] [1] [2] HOLA COMO ESTAS
// document.write(resultado[2]);

// let cadena = "ABCDEF";
// resultado = cadena.substring(0,4);   // substring muestra de la posicion 0 a la 4 de la cadena
// document.write(resultado);

// let cadena = "ABCDEF";
// resultado = cadena.toLowerCase();     // toLowerCase devuelve a minusculas
// document.write(resultado);            // toUpperCase devuelve a mayusculas

// let cadena = ["Pedro","Jose","Milo"];
// resultado = cadena.toString();          // CONVIERTE LA CADENA A TEXTO, MUESTRA LA POSICION [0]= P  
// document.write(resultado[0]);

// let cadena = "   JOSE   ";        // trim() remueve los espacios
// let resultado = cadena.trim();    // trimStart() remueve los espacios del principio
// document.write(resultado);        // trimEnd() remueve los espacios del final

//-------------------------------------METODOS TRANSFORMADORES DE ARRAY-------------------------------------------------------------------

// let nombres = ["Jose","Milo","Gael"];                              //CREAMOS UN ARRAY
// document.write("Arrays Original: <b>" + nombres + " </b> <br>");
// let resultado = nombres.pop();                                    // POP() ELIMINA EL ULTIMO ELEMENTO DEL ARRAY Y LO MUESTRA SOLO
// document.write("Elemento removido: <b style= 'color:red'>" + resultado + "</b> <br>");
// document.write("Resultado: <b> " + nombres + "</b>");             // SHIFT() ELIMINA EL PRIMERO DEL ARRAY Y LO MUESTRA SOLO

// let nombres = ["Jose","Milo","Gael"];  
// document.write(nombres + "<br>");                 // SHIFT() AGREGA ARRAY A LOS ESTABLECIDOS
// let resultado = nombres.push("Laura","Sara");
// document.write(nombres);

// let numeros = [1,2,3,4,5,6];
// document.write (numeros + "<br>");     // reverse() muestra los arrays al reves
// let resultado = numeros.reverse();
// document.write (resultado);

// let numeros = [3,4,5,6];
// document.write(numeros + "<br>");      // UNSHIFT() DEVUELVE UNO O MAS ELEMENTOS AL PRINCIPIO DEL ARRAYS
// numeros.unshift(0,1,2);
// document.write(numeros);

// let numeros = [6,7,9,2,4,5,3,1,8];
// document.write(numeros + "<br>");      // SORT() ORDENA LOS ARRAYS POR ORDEN LEXICOGRAFICO
// numeros.sort();
// document.write(numeros);

// let frutas = ["manzana","banana","melon","sandia","pomelo"];
// document.write(frutas + "<br>");
// frutas.splice(1,2,"JOSE","LAURA");       // SPLICE() ELIMINA ELEMENTOS DEL ARRAY (1 POSICION INICIAL, 2 ELEMENTOS SIGUIENTES)
// document.write(frutas);                  // Y AGREGA LOS NOMBRES INDICADOS

//-------------------------METODOS ACCESORES---------------------------------------------------------------------

// let numeros = [1,2,3,4,5,6,7,8,9];
// document.write(numeros + "<br>");       // JOIN() SEPARA EL ARRAY POR COSAS (ESPCIOS,GUIONES,BR ETC)
// resultado = numeros.join(" - ");
// document.write(resultado);

// let nombres = ["Jose","Laura","Milo","Gael"];
// document.write(nombres + "<br>");
// let resultado = nombres.slice(0,2);        // slice() saca elementos del array desde la posicion 0 , 2 elementos
// document.write(resultado);

// let nombres = ["Jose","Laura","Milo","Gael"];
// document.write(nombres + "<br>");
// let resultado = nombres.includes("Jose");        // INCLUDES() DEVUELVE TRUE O FALSE SI SE ENCUENTRA EL NOMBRE DENTRO DEL ARRAY
// document.write(resultado);                      // INDEXOF() LO MISMOS PER DEVUELVE LA POSICION EN LA QUE ESTA, -1 NO ESTA

//--------------------------------METODOS DE REPETICION-------------------------------------------------------------

// let palabras = ["Casa","Arbol","Barco","Leña","Automovil"];
// palabras.filter(palabras => document.write(palabras + "<br>"))  //filter recorre el bucle
// resultado = palabras.filter(palabras => palabras.length > 4);
// document.write(resultado);

//----------------------------------OBJETO MATH----------------------------------------------------------------------

// let numero = Math.cbrt(27);     // Math.sqrt realiza la raiz cuadrada
// document.write(numero);     // Math.cbrt realiza la raiz cubica
                               // Math.max devuelve el numero mas alto Math.max(1,8,200,500,622)
                               // Math.min devuelve el numero mas chico Math.min(1,8,200,500,622)
                               // Math.random() devuelve un numero aleatorio entre 0 y 1

// let numeros = Math.random() * 100;
// numeros = Math.round(numeros);   // Math.round genera un numero entre 0 y 100 incluidos aleatorio 
// document.write(numeros);         // Math.floor redondea para abajo

// for (var i = 0; i < 100000; i++){
//    let numero = Math.random()*99;
//    numero = Math.floor(numero + 1);  // logramos numeros del 1 al 99
//    document.write(numero + "<br>");
// }

// let numero = Math.trunc(9.9);           // MATH.TRUNC ELIMINA LOS DECIMALES
// let numero = Math.round(9.99);          // MATH.ROUND REDONDEAR AL ENTERO USAR . PUNTO
// let numero = Math.PI;                      // math.pi muetra el valor de pi

// document.write(numero);

//------------------------------PROBLEMA DE COFLA 1 ----------------------------------------------------------------------

/* class Calculadora {                                // reemplazamos todo como metodos
    constructor(){                                 // estructurado como objeto
    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp){
    let numero = num;
    for (var i = 1; i < exp; i ++){
        numero = numero * num;
    }
    return numero;
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}

}

const calculadora = new Calculadora();

alert ("Que operacion deseas realizar?");
    let operacion = prompt("1: Suma, 2: Resta , 3: Division, 4: Multiplicacion, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");
        if (operacion == 1){
            let numero1 = prompt("Primer numero para Sumar:");
            let numero2 = prompt("Segundo numero para Sumar");
            resultado = calculadora.sumar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 2){
            let numero1 = prompt("Primer numero para Restar:");
            let numero2 = prompt("Segundo numero para Restar");
            resultado = calculadora.restar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 3){
            let numero1 = prompt("Primer numero para Dividir:");
            let numero2 = prompt("Segundo numero para Dividir");
            resultado = calculadora.dividir(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }

        else if (operacion == 4){
            let numero1 = prompt("Primer numero para Multiplicar:");
            let numero2 = prompt("Segundo numero para Multiplicar");
            resultado = calculadora.multiplicar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }
        else if (operacion == 5){
            let numero1 = prompt("Numero a Potenciar:");
            let numero2 = prompt("Exponente");
            resultado = calculadora.potenciar(numero1,numero2);
            alert(`Tu resultado es: ${resultado}`);
        }
        else if (operacion == 6){
            let numero1 = prompt("Conocer la Raiz Cuadrada de:");
            resultado = calculadora.raizCuadrada(numero1);
            alert(`Tu resultado es: ${resultado}`);
        }
        else if (operacion == 7){
            let numero1 = prompt("Conocer la Raiz Cubica de:");
            resultado = calculadora.raizCubica(numero1);
            alert(`Tu resultado es: ${resultado}`);
        }

        else {
            alert("Rancio ingresa algo coerente....");
        }
        */

//------------------------------------PROBLEMA DE COFLA 2 ---------------------------------------------------------

/* const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","Pedro","Pepito","Cofla","Maria"], //arraiz asociativos se separan con ,
        programacion: ["Rando","Pedro","Juan","Pepito"],
        logica: ["Dalto","Pedro","Juan","Pepito","Cofla","Maria"],
        quimica: ["Hernandez","Pedro","Juan","Pepito","Cofla","Maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }
    else {
        return materias;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b> ${informacion[1]}</b> es : <b style="color:red"> ${profesor} </b><br>
                    los Alumnos son: <b style="color:blue"> ${alumnos}</b><br><br>
    `);
    }  
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'> ${alumno} </b> esta en <b>${cantidadTotal} clases:  <b style='color:green'> ${clasesPresentes}</b><br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Cofla"))
document.write(cantidadDeClases("Maria"))
document.write(cantidadDeClases("Pepito"))
document.write(cantidadDeClases("Juan"))
*/

//------------------------------------------ PROBLEMA 3 DE COFLA ----------------------------------------------------

let materias = {
        fisica: ["Perez","Pedro","Pepito","Cofla","Maria"], //arraiz asociativos se separan con ,
        programacion: ["Rando","Pedro","Juan","Pepito"],
        logica: ["Dalto","Pedro","Juan","Pepito","Cofla","Maria"],
        quimica: ["Hernandez","Pedro","Juan","Pepito","Cofla","Maria"]
    }
        
const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){   // 20 alumnos mas el profesor
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas` + "<br><br>");
    } else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias ['logica'],
                quimica: materias ['quimica']
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: fisica['fisica'],
                programacion: personas,
                logica: materias ['logica'],
                quimica: materias ['quimica']
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: fisica['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias ['quimica']
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: fisica['fisica'],
                programacion: materias['programacion'],
                logica: materias ['logica'],
                quimica: personas
            }
        }
        document.write(`¡¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente.` + "<br><br>");
    }
}

document.write(materias['fisica'] + "<br>");

inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");
inscribir("Milito","fisica");



document.write("<br>" + materias['fisica']);
