//--------------------------------1 PROBLEMA DE COFLA--------------------------------------------------------------------
/*
const materias = {    //no cambian por eso son constantes
    fisica: [99,7,4,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = () =>{
    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);


        if (asistencias >= 90) {
            console.log("%c   Asistencias en Orden", "color:green");
        }else {
            console.log("%c   Falta de Asistencias", "color:red" );  
        }

        if (promedio >= 7) {
            console.log("%c   Promedio en Orden", "color:green");
        }else {
            console.log("%c   Promedio Desapobado", "color:red" );  
        }

        if (trabajos >= 3) {
            console.log("%c   Trabajos Practicos en Orden", "color:green");
        }else {
            console.log("%c   Faltan Trabajos Practicos", "color:red" );  
        }
    }
}
aprobo();

*/

//----------------------------------2 PROBLEMA DE COFLA--------------------------------------------------------------

let tp = "100 minutos de trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos cosas de la casa";
let descanzo = "10 minutos de descanzo";

console.log("TAREAS");

for (var i=0; i < 14; i++){
    if (i==0){
        console.group("Semana 1");
    }
console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanzo);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i==7){
    console.groupEnd();
    console.groupCollapsed("Semana 2")
}
}
console.groupEnd();
console.groupEnd();




