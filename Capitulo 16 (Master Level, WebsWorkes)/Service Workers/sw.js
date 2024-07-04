let version = "Version 1";


self.addEventListener("install",e=>{
    console.log("Instalando Service Worker");
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{
            console.log("Informacion Cacheada...");
        }).catch(e=>{
            console.log(e);
        })
    })
})

self.addEventListener("activate",()=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if (key !== version){
                    console.log("Cache Antiguo, Eliminado");
                    return caches.delete(cache);                 
                }

            })
        )
        
    })      
})

self.addEventListener("fetch",e=>{
    e.respondWith(async function()=>{
        const respuestaEnCache = await caches.match(e.request)
        if (respuestaEnCache) return respuestaEnCache;
        return e.request
    });
})
    