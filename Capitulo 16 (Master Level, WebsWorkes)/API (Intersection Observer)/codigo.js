"use strict";

//const caja3 = document.querySelector(".caja3");

//const veryfyVisibility = (entries)=>{
//    const entry = entries[0]; /*para ver la visibilidad de una caja sola*/
//    console.log(entry.isIntersecting)
//}

//const observer = new IntersectionObserver(veryfyVisibility);

//observer.observe(caja3)


const cajas = document.querySelectorAll(".caja");

const veryfyVisibility = (entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) console.log("Se esta viendo la Caja: ",entry.target.textContent);
    } 
}
const options = {
    rootMargin: "-60px"
}

const observer = new IntersectionObserver(veryfyVisibility,options);

for (const caja of cajas) {
    observer.observe(caja);
}
