/*class animal {
    constructor(especie,edad,color){
        this.especie = especie;       //decir this es lo mismo que decir perro
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this,especie} tengo ${this.edad} años de edad y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");    //CREAMOS EL METODO
    }
}

let perro = new animal("perro",5,"marron");
let gato = new animal("gato",10,"negro");
let pajaro = new animal("pajarito",1,"rojo");

// document.write (perro.info + "<br>");  
// document.write (gato.info + "<br>");    (LO VAMOS A REEMPLAZAR POR UN METODO)
// document.write (pajaro.info + "<br>");

//console.log (perro);  //asi me dice en console, que es un objeto, sin definir sus atributos (especie,edsd,color)

perro.verInfo();
gato.verInfo();     //MOSTRAMOS EL METODO
pajaro.verInfo();

*/

/*class Animal {
    constructor(especie,edad,color){
        this.especie = especie;       
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this,especie} tengo ${this.edad} años de edad y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");    //CREAMOS EL METODO
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);        // CREAMOS LA HERENCIA, HEREDAMOS LO ANTERIOR DE LA CLASE Y LE AGREGAMOS RAZA
        this.raza = raza;
    }
    ladrar(){
        alert("!WAAW¡");
    }
}

let perro = new Perro("perro",5,"marron","Dobermann");
let gato = new Animal("gato",10,"negro");
let pajaro = new Animal("pajarito",1,"rojo");


perro.ladrar();
gato.ladrar();     
pajaro.ladrar();
*/

/*class Animal {
    constructor(especie,edad,color){
        this.especie = especie;       
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this,especie} tengo ${this.edad} años de edad y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");    //CREAMOS EL METODO
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);        
        this.raza = raza;
    }
    static ladrar(){                                 // CREAMOS METODO ESTATICO 
        alert("!WAAW¡");
    }
}


let gato = new Animal("gato",10,"negro");
let pajaro = new Animal("pajarito",1,"rojo");


Perro.ladrar();          //llamamos a la class Perro
gato.ladrar();     
pajaro.ladrar();
*/

//PROBLEMA DE COFLA 3.0

class Celular {
    constructor (color,peso,tamaño,rdc,ram){
        this.color = color;                    //CREAMOS EL COSTRUCTOR CON LOS DATOS SOLICITADOS
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular Prendido!!!");
            this.encendido = true;
        }else {
            alert("Celular Apagado!!");
            this.encendido = false;       
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando el Celular");
        }else {
            alert("El celular esta apagado!!"); 
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabar video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
        
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando un video en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar el reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`
    }
}

// celular1 = new Celular("Rojo","150Gr","5'","Hd","1GB");
// celular2 = new Celular("Negro","155Gr","5,9'","Full Hd","2GB");
// celular3 = new Celular("Blanco","15046Gr","5,9'","Full Hd","2GB");

celular1 = new CelularAltaGama("rojo","100Gr","5,2'","4K","3GB","Full Hd");
celular2 = new CelularAltaGama("rosa","142Gr","5,4'","4K","5GB","Hd");

document.write(`
    ${celular1.infoAltaGama()} <br> <br>
    ${celular2.infoAltaGama()} <br>
`);

//document.write(`
//    ${celular1.mobileInfo()} <br>
//    ${celular2.mobileInfo()} <br>
//    ${celular3.mobileInfo()} <br>
// `);


// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();
