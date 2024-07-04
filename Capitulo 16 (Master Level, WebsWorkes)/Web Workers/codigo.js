"use strict";

const worker = new Worker("worker.js");
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());
worker.addEventListener("message",e=>{
    console.log(e.data);
    worker.terminate()
})

const ejecutarBucle = ()=> {
    worker.postMessage("Que onda Bro, todo bien?..");
}
    
console.log(worker);
