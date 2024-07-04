
const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}
const crearCookie = (name,dias)=>{
    const expires = newFechaUTC(dias)
    document.cookie = `${name};expires=${expires}`;

}

crearCookie("Usuario=Jose","4");


const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (i = 0; cookies.length > i; i++){
        cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)){
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese nombre";
}

if (obtenerCookie("acceptCookies") !== "Si") {
    setTimeout(()=>{
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookie("acceptCookies=si",30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
            document.querySelector(".bg-modal").style.zIndex = "-1";},1000);
        })
        document.getElementById("deny").addEventListener("click",()=>{
            crearCookie("acceptCookies=no",30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
            document.querySelector(".bg-modal").style.zIndex = "-1";},1000);
        })
    },200)
}

