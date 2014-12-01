
var dibujo, lienzo, t, b;

function inicio()
{

    t = document.getElementById("usuario");
    b = document.getElementById("dibujar");
    dibujo = document.getElementById("dibujando");
    lienzo = dibujo.getContext("2d");

    b.addEventListener("click", dibujarGrilla);

    // Acá estamos dibujando un circulo con Arcos - "arc" el cual tiene 3.1416 Radianes = PI 
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.closePath();
    lienzo.stroke();

}

function dibujarGrilla () 
{
    
    var l = lienzo;
    var rayas = Number(t.value);
    var ancho = 300, alto = 300;
    var linea, punto;
    var anchoLinea = ancho / rayas;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;


    // Color que elegimos gris en hexadecimal
    l.strokeStyle = "#AAA";


    
    for(linea = 0; linea <= limiteX; linea++)
    {
        punto = linea * anchoLinea;
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(punto, 0);
        l.lineTo(punto, ancho-0);
        l.stroke();
        l.closePath();
    }

    for(linea = 0; linea <= limiteY; linea++)
    {
        punto = linea * anchoLinea;
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(0, punto);
        l.lineTo(alto, punto);
        l.stroke();
        l.closePath();
    }

}