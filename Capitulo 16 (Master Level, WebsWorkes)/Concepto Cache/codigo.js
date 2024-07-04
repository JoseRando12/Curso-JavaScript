"use strict";

//caches.open("Archivos-Estaticos").then(cache =>{
//    cache.add("index.html"); //LE DIGO A CACHE QUE AGREGE EL ARCHIVO INDEX.HTML AL CACHE    
//})

//caches.open("Archivos-Estaticos-2").then(cache =>{
//    cache.addAll(["index.html","estilo.css","codigo.js"]) //AGREGA AL CACHE VARIOS ARCHIVOS
//})

//caches.open("Archivos-Estaticos-2").then(cache =>{
//    cache.match("index.html").then(res =>{  //MATCH DEVUELVE EN CONSOLA LOS DATOS QUE CONTIENE INDEX.HTML SOLO
//        console.log(res)
//    })
//})

//caches.open("Archivos-Estaticos-2").then(cache =>{
//    cache.matchAll("index.html").then(res =>{  //MATCH DEVUELVE ARRAIZ SI TENEMOS VARIOS ARCHIVOS LLAMADOS INDEX.HTML
//        console.log(res)
//    })
//})

//caches.open("Archivos-Estaticos").then(cache =>{
//    fetch("index.html").then(res=>{
//        cache.put("index.html",res)  //ES LO MISMO QUE CACHE.ADD, SE USA ADD
//    })  
//})

//caches.open("Archivos-Estaticos").then(cache =>{
//    cache.delete("index.html"); //LE DIGO A CACHE QUE ELIMINE EL ARCHIVO INDEX.HTML AL CACHE    
//})

caches.open("Archivos-Estaticos-2").then(cache =>{
    cache.addAll(["index.html","estilo.css","codigo.js"])
    cache.keys().then(res=>{                 //KEYS TRAE TODA LA INFO DE LOS ARCHIVOS
        console.log(res)
    })
})