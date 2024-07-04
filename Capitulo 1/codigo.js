dinerocofla = prompt("Cuanto dinero tienes Cofla?");
dineroroberto = prompt("Cuanto dinero tienes Roberto?");
dineropedro = prompt("Cuanto dinero tienes Pedro?");

dinerocofla = parseInt(dinerocofla); //esto es una funcion que nos permite convertir un texto a numero

if (dinerocofla >= 0.6 && dinerocofla < 1) {
    alert("Cofla, Comprate el helado de agua");
    alert("y te sobran " + (dinerocofla - 0.6));
}

else if (dinerocofla >= 1 && dinerocofla < 1.6) {
    alert("Cofla, Comprate el helado de crema");
    alert("y te sobran " + (dinerocofla - 1));
}

else if (dinerocofla >= 1.6 && dinerocofla < 1.7) {
    alert("Cofla, Comprate el helado marca heladix");
    alert("y te sobran " + (dinerocofla - 1.6));
}

else if (dinerocofla >= 1.7 && dinerocofla < 1.8) {
    alert("Cofla, Comprate el helado marca heladovich");
    alert("y te sobran " + (dinerocofla - 1.7));
}

else if (dinerocofla >= 1.8 && dinerocofla <= 2.9) {
    alert("Cofla, Comprate el helado marca helardo");
    alert("y te sobran " + (dinerocofla - 1.8));
}

else if (dinerocofla >= 2.9) {
    alert("Cofla, Comprate el helado con confites o el postre helado de 1/4");
    alert("y te sobran " + (dinerocofla - 2.9));
}

else {
    alert("Cofla, lo siento no te alcanza para ningun helado");
}

if (dineroroberto >= 0.6 && dineroroberto < 1) {
    alert("Roberto, Comprate el helado de agua");
}

else if (dineroroberto >= 1 && dineroroberto < 1.6) {
    alert("Roberto, Comprate el helado de crema");
}

else if (dineroroberto >= 1.6 && dineroroberto < 1.7) {
    alert("Roberto, Comprate el helado marca heladix");
}

else if (dineroroberto >= 1.7 && dineroroberto < 1.8) {
    alert("Roberto, Comprate el helado marca heladovich");
}

else if (dineroroberto >= 1.8 && dineroroberto <= 2.9) {
    alert("Roberto, Comprate el helado marca helardo");
}

else if (dineroroberto >= 2.9) {
    alert("Roberto, Comprate el helado con confites o el postre helado de 1/4");
}

else {
    alert("Roberto, lo siento no te alcanza para ningun helado");
}

if (dineropedro >= 0.6 && dineropedro < 1) {
    alert("Pedro, Comprate el helado de agua");
}

else if (dineropedro >= 1 && dineropedro < 1.6) {
    alert("Pedro, Comprate el helado de crema");
}

else if (dineropedro >= 1.6 && dineropedro < 1.7) {
    alert("Pedro, Comprate el helado marca heladix");
}

else if (dineropedro >= 1.7 && dineropedro < 1.8) {
    alert("Pedro, Comprate el helado marca heladovich");
}

else if (dineropedro >= 1.8 && dineropedro <= 2.9) {
    alert("Pedro, Comprate el helado marca helardo");
}

else if (dineropedro >= 2.9) {
    alert("Pedro, Comprate el helado con confites o el postre helado de 1/4");
}

else {
    alert("Pedro, lo siento no te alcanza para ningun helado");
}