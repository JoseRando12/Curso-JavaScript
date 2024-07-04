

/*function prueba(callback){     //son funciones dentro de otra funcion
    callback("roberto");
}


prueba(nombre => console.log(nombre)); */
/*
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Milo rando","@milorando12"],
    ["Gael rando","@gaelrando12"],
    ["Laura jauregui","@lauramarisoljauregui"],
    ["Jose Rando","@joserando12"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id,cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    } else {
        cb(null,personas[id],id)
    }
}

const obtenerInstagram = (id,cb) =>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el Instagram");
    } else {
        cb(null,personas[id].instagram)
    }   
}

obtenerPersona(1,(err,persona,id)=>{
    if (err) console.log(err);

    else {
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{

            if (err)console.log(err);
            else console.log(instagram);
            
        })
    }
})

*/
//---------------------------------PROMESAS------------------------------------------------------------------------
/*
let nombre = "Pedro";

const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "Pedro") reject("Lo siento, el nombre no es Pedro..");
    else resolve (nombre);
})

//console.log(promesa);

promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{       //manejamos el error con catch
    console.log(e)
})

*/
/*
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Milo rando","@milorando12"],
    ["Gael rando","@gaelrando12"],
    ["Laura Marisol","@lauramarisoljauregui"],
    ["Jose Rando"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("No se ha encontrado la persona...");
        else {resolve(personas[id])}
    })
}

const obtenerInstagram = (id) =>{
    return new Promise((resolve,reject)=>{
        if (personas[id].instagram == undefined) reject("No se ha encontrado el Instagram...");
        else {resolve(personas[id].instagram)}
    }) 
}
let id = 2;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
        console.log(instagram);
}).catch((e)=>{
    console.log(e);
})
*/

//-------------------------------------------FUNCIONES ASINCRONAS---------------------------------------------


/*const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
};

const obtenerInformacion = ()=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=> {resolve(objeto)},3000)
    })
}

// obtenerInformacion().then(resultado => console.log(resultado))

const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

*/

/*const obtenerInformacion = (text)=>{
    return new Promise((resolve,reyct)=>{
      setTimeout(()=> {resolve(text)},Math.random()*200)  
    })
}

const mostrarData = async ()=>{
    data1 = await obtenerInformacion("1: Pito"),
    data2 = await obtenerInformacion("2: Bernardo"),
    data3 = await obtenerInformacion("3: Eduardo"),
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();
*/
//--------------------------------------PROBLEMA DE COFLA 12---------------------------------------------------------

const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 3",
        nota: 7
    },{
        nombre: "Calculo 4",
        nota: 8
    },{
        nombre: "Base de datos 3",
        nota: 9
    },{
        nombre: "Matematicas Discretas 2",
        nota: 6
    },{
        nombre: "Programacion 4",
        nota: 10
    }
];


const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject ("Perdon no existe la Materia");
        else setTimeout(()=>{resolve(materia)},Math.random()*1400);
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()


//obtenerMateria(1).then(res => console.log(res));
//obtenerMateria(2).then(res => console.log(res));
//obtenerMateria(3).then(res => console.log(res));
//obtenerMateria(4).then(res => console.log(res));