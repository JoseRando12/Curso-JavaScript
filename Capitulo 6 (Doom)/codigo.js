// const input = document.querySelector(".input-normal");

// document.write(input.className);  //nos muestra lo que esta dentro de class (en index.html)

// document.write(input.value);      // nos muesta lo que esta dentro de value 

// input.type="range"  //modifica type con el atributo que querramos

// input.minLength = "4";

// input.required =" ";

//-------------------------------------------------------------------------------------------------------------

// const contenedor = document.querySelector(".contenedor");

/* const fragmento = document.createDocumentFragment();

for (i=0; i < 20; i++){
    
    const item = document.createElement("LI");
    item.innerHTML ="Este el es item de la lista";
    fragmento.appendChild(item);

}
contenedor.appendChild(fragmento);
*/

// const primerHijo = contenedor.lastElementChild;  //muestr ultimo elemento , first el primero en consola

// console.log(primerHijo)

/* const hijos = contenedor.children;

for (hijo of hijos){
    console.log(hijo)
} */

/* const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

// const h2_antiguo = innerHTML = "Titulo";
const h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_antiguo)  // reemplaza nuevo x antiguo

// contenedor.removeChild(h2_antiguo)  // remueve un hijo de un contenedor

console.log(h2_antiguo.previousElementSibling)  // previous next
*/

//-----------------------------------PROBLEMA DE COFLA 6 -------------------------------------------------------------

const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "<img src='llave-img.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</p></b>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number
}
let documentFragment = document.createDocumentFragment();

for (var i=1; i <= 20; i++ ){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,` ${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=> {changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

