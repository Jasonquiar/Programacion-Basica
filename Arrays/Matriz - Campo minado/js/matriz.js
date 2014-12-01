
// Declaramos las funsiones tener presente que no se ejecutan hasta no invocarlas en el 
// algoritmo, estas son los mesajes que apareceran despues de hacer el proceso

function explosion()
{
    alert("BOOM!!");
    document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}
function ganaste()
{
    document.write("Eres un ganador :)");    
}

// Las declaraciones en sub [] son tomadas vectores o matrices sea el caso
// Matriz la toma de informacion  lateral y vertical (Bidiminesional)
// Vector la toma de informacion lineal

// Esta el la matriz se crea para dar las posiciones del campo minado, 
//1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] ,
              [ 0 , 1 , 0 ] ,
              [ 1 , 0 , 1 ] ];

// Este vector se crea para saber que tipo de posicion se obtuvo 0 ó 1 
var textos = ["Cesped", "Bomba"];

// Variables que se disponen para obtener la información que da el usuario
var x, y;   

alert("Estás en un campo minado\n" +
      "Elije una posición entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");


// Iteración que se realiza para saber si la posición obtenida por el usuario
// esta dentro de la matriz "campo"
// De ser menor o igual a 2 tanto en "x" como en "y" 
if(x <= 2 && y <= 2)
{
    // Decimos con la variable "posicion" el lugar que obtuvimos del usuario
    var posicion = campo[x][y];
    // Escribimos la posicion obtenida "0" o "1" que segun texto es "Cesped" y "Bomba"
    document.write("Elegiste " + textos[posicion] + "<br />");
    
    // Iteramos para ejecutar las funciones declaradas en las primeras lineas
    if(posicion == 1)
    {
        explosion();
    }
    else
    {
        ganaste();
    }
}

// Se ejecuta en caso que la posicion en "x" o "y" sea mayor que 2
else
{
    document.write("¡Te saliste del campo!");
    explosion();
}