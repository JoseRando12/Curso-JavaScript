AnchoTotal = screen.width //ancho total de la pantalla
AlturaTotal = screen.height //altura total de la pantalla

AnchoDisponible = screen.availWidth //ancho disponible de la pantalla
AltoDisponible = screen.availHeight //altura disponible de la pantalla

Resolucion = screen.pixelDepth //resolucion de color de pantalla
Profundidad = screen.colorDepth //profundidad de bit de la paleta de colores

console.log(`width: ${AnchoTotal}`);
console.log(`height: ${AlturaTotal}`);

console.log(`availWidth: ${AnchoTotal}`);
console.log(`availHeigth: ${AltoDisponible}`);

console.log(`pixelDepth: ${Resolucion}`);
console.log(`colorDepth: ${Profundidad}`);