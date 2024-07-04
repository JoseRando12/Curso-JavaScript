// "use strict";                     //uso estricto de la sintaxis de javascript

// class Objeto {
//     constructor(){};
//     hablar(){
//         console.log("Hola")
//     }
// }

// const objeto = new Objeto();

// objeto.__proto__.hablar = ()=>{
//     console.log("Hablando desde afuera")
// }
// let arr = [];
// arr.__proto__ = objeto;
// arr.hablar();

//---------------------------------------FUNCIONES FLECHAS --------------------------------------------------------------

// const saludar = ()=> nombre = "JOSE";      

// resultado = saludar();
// console.log(resultado);

// "use strict";
// const objeto = {
//     nombre : "Jose",
//     saludar : function(){console.log (`Hola ${this.nombre}`)}
// }

// const objeto2 = {
//     nombre : "Jose",
//     saludar : ()=>{console.log (`Hola ${this.nombre}`)}
// }

// window.nombre = "Dalto"

// objeto.saludar();
// objeto2.saludar();

//---------------------------------------FUNCIONES RECURSIVAS-------------(CTRL+K+C)-------------------------------------

// "strict mode";

// const validarEdad = (msg)=>{
//     let edad;
//     try{
//         if (msg) edad = prompt(msg);
//         else edad = prompt("Introduce tu edad: ");
//         edad = parseInt(edad);
//         if (isNaN(edad)) throw "Introduce un numero para la edad..";
//         if (edad >= 18) console.log("Sos mayor de edad");
//         else console.log ("Sos menor de edad..");
//     } catch(e){
//         validarEdad(e)
//     }
// }

// validarEdad()

//--------------------------------------OPERADORES CONDICIONAL (TERNARIO)-------------------------------------------

// let edad = 25;
// if (edad >=18) {
//     console.log ("Eres Mayor de Edad....");
//     console.log ("Puedes pasar...")
// }
// else {
//     console.log ("Sos Menor de Edad !!!");
//     console.log ("No puedes pasar...")
// }

// (edad >= 18) 
//             ?
//             ( console.log ("Eres Mayor de Edad...."),     // EL OPERADOR TERNARIO OCUPA MENOS RECURSOS QUE UN IF
//               console.log ("Puedes pasar!!!")
//             )
//             :
//             ( console.log ("Sos Menor de Edad !!!"),
//               console.log ("No puedes Pasar....")
//             )

//------------------------------------OPERADOR SPREAD ---------------------------------------------------------------

// "use strict";

// let valor1 = "valor 1";
// let valor2 = "valor 2";
// let valor3 = "valor 3";

// let arr = ["valor 1","valor 2","valor 3"];

// console.log (valor1,valor2,valor3)         //muestra los mismo con los ...
// console.log (...arr)

//---------------------------------------------AÑADIR ARRAIZ----------------------------------------------------------

// let arr = ["manzana","pera","banana"];
// let arr2 = ["kiwi","naranja","mandarina","melon","sandia"];

// //arr.push(arr2[0],arr2[1]);
// console.log (arr);
//                                                        // añadir arraiz
// arr.push(...arr2);  //mismo resultado mas practico 

//--------------------------------------------CONCATENAR ARRAIZ-------------------------------------------------------

// let arr = ["manzana","pera","banana"];
// let arr2 = ["kiwi","naranja","mandarina","melon","sandia"];

// let arr3 = [...arr,...arr2];
// console.log (arr3);

//--------------------------------------------ARGUMENTO REST----------------------------------------------------------

const sumar = (num1,num2,num3,num4)=>{
    console.log (num1 + num2 + num3 + num4);
}

let arr = [3,6,10,15];
sumar (...arr)

