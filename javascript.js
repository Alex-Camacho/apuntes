//Operators
// +
// -
// *
// /
// % (da el resto, remainder)
// ++ (aumenta el número) (++x añade y luego muestra resultado; x++ muestra 
//  primero el valor de x y luego añade internamente uno)
// -- (disminuye) 
// ** (potencia)
// x ** (1/2) : raiz cuadrada

//Decimales (con punto .)
let decimal = 3.14; 

//Curiosidad con decimales:
//let x = 0.1 + 0.2;
//alert(x); (resultado 3.0000004, no siempre preciso con decimales, se arregla
//multiplicando y dividiendo por 10) let x = (0.2 * 10 + 0.1 * 10) / 10;

//Concatenar strings con +, con el resto de operadores intenta intepretarlos
//como números.
//let x = 10
//let y = "20"
//let result = x + y; (1020)

//isNAN() indica si una variable es un número
let x = 3;
isNaN(x); //true

//Infinity // -Infinity (existen)

// == (igual) // === (compara valor y tipo de variable)
// "2" == 2 (true) // "2" === 2 (false)

//Redondear decimales
let lotsOfDecimal = 1.857392728;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2); //1.86

//Cambiar string a número con Number()
let numString = "42";
let newNumString = Number(numString); // 42

//Assignment operators
x += 4; // igual que x = x + 4;
//x *= y; //igual que x = x * y;

//Comparison operators (true/false)
// === (estricta igualdad)
// !== (direfente a igualdad estricta)
//< , > , <= , >= 

//Data Types

console.log(typeof numString); //Indica el tipo de variable, string en este caso.


//Convertir strings a números (también se puede usar la función Number())
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
//alert( +apples + +oranges ); // 5


//String Variables con template literals ``

    const name = "Alex";
    const saludo = `Hola ${name}`; // funcion solo con `___`

    //Respetan los saltos en el código
    //const newline = `One day you finally knew
    //what you had to do, and began,`;
    //console.log(newline); //El output respetará el enter de salto de linea

    //Incluir quotes en strings
    //const = goodQuotes1 = `She said "I think so!"`;
    //También podemos omitir su lectura con \
    //const bigmouth = 'I\'ve got no right to take my place…';


//String Methods

    //toString() convierte a string
    let número = 4;
    let textNúmero = número.toString(); //"4"

    //String length
    let text = "djinwajdnAWIJBDHAJWBDJASD";
    let lengthText = text.length; //25

    //Extracting String Characters
    let char = text.charAt(0); //d , no permite indexes negativos.
        //text.at(0); o text[0]; hace lo mismo SI permitiendo index negativos.

    //String concat() une strings
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

    //Extracting String Parts

        //slice()
        let part = text.slice(0, 1); //d //Desde la posición 7 a la 13.
        let part2 = text.slice(7); //Desde la 7 hasta el final.

        //substring() es igual que slice() pero interpreta negativos como 0.

        //substr() el segundo parametro indica la longitud de lo substraido.
        //let part3 = text.substr(2,4); //inwa OBSOLETO = DEPRECATED

    //Converting Upper/Lower Case
    let text4 = text.toUpperCase(); //DJINWAJDNAWIJBDHAJWBDJASD
    let lowerText4 = text.toLowerCase(); //djinwajdnawijbdhajwbdjasd

    //isWellFormed() devuelve true si la string está bien formada
    //  (si no contiene lone surrogates)

    //trim() //trimStart() //trimEnd()
    let recortame = "      Hola      ";
    let recortado = recortame.trim(); //Hola
    let principioRecortado = recortame.trimStart(); //"Hola      "
    let finalRecortado = recortame.trimEnd(); //"     Hola"

    //String Padding //padStart() //padEnd()

    let almohadilla = "Fragil";
    let inicioAlmohadilla = almohadilla.padStart(12, "0"); //000000Fragil
    //el primer index indica LA LONGITUD FINAL que tendrá la string,
    //no el número que tiene que añadir!, el segundo index indica
    //lo que añadir. Además solo funciona con strings.

    let finalAlmohadilla = almohadilla.padEnd(14, "a");//Fragilaaaaaaaa

    //String repeat()

    let repite = "Hola";
    let repiteme = repite.repeat(2); //HolaHola

    //Remplazar replace()

    let cambiame = "Please visit Microsoft!";
    let cambiado = cambiame.replace("Microsoft", "W3Schools");//'Please visit W3Schools!'

        //usar /i para que sea cape sensitive:
        //let cambiado = cambiame.replace("Microsoft/i", "W3Schools");

        //usar /g para que remplazca varias veces, no solo la primera.
        //let cambiado = cambiame.replace("Microsoft/g", "W3Schools");

    
    
    //Convertir String a Array

    let text5 = "Pato,Fuet,Ensalada";
    let arrayText5 = text5.split(",");

    
    //Comparisons
    // > , < , >= , <= , == , === , != , !==

    // null == undefined (true)
    // null === undefined (false)


    //A number 0, an empty string "", null, undefined, and NaN 
    // all become false. Because of that they are called “falsy” values.

    //Condicional Statements (if, else if, else)

        

    let a = 3;
    let b = 4;
    let greeting;

    if (b > a) {
        greeting = "Hello!";
    }   else if (b === a) {
        alert("They are equal!");
    }   else {
        greeting ="Good bye!";
    }

    //Logical Operators

    // || (OR) (Devuelve el primer valor VERDADERO)

    let hour = 12;
    let isWeekend = true;

    if (hour < 10 || hour > 18 || isWeekend) { //las dos primeras falsas
        //alert( 'The office is closed.' ); // la tercera es true
    }

    // && (AND) (Devuelve el primer valor FALSO, o el último verdadero
    //si todos verdaderos)

    console.log(1 && 2 && null); //null
    console.log(1 && 2 && 3); //3

    // ! (NOT) (Convierte a boleano y devuelve el valor inverso)
    //alert( !true ); // false
    //alert( !0 ); // true

    //Ternary operator

    // let accessAllowed = (age > 18) ? true : false;

    //Otro ejemplo:
    // let result = (a + b < 4) ? 'Below' : 'Over';


//Script para cambiar tema de la página White/Dark usando ternary operator

const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change", () =>
    select.value === "black"
        ? update("black", "white")
        : update("white", "black"),
);


//Switch statement, ejemplo:

//select.addEventListener("change", () => {
//  const choice = select.value;

  // ADD SWITCH STATEMENT
//  switch(choice) {
//   case "white":
//      update("white", "black");
//      break;
//    case "black":
//     update("black", "white");
//      break;
//    case "purple":
//      update("purple", "white");
//      break;
//    case "yellow":
//      update("yellow", "black");
//      break;
//    case "psychedelic":
//      update("pink", "blue");
//      break;
//  }
//});


//Funciones

//function logKey(event) {
//  console.log(`You pressed "${event.key}".`);
//}

//textBox.addEventListener("keydown", logKey);

//Función anónima:

//textBox.addEventListener("keydown", function (event) {
//  console.log(`You pressed "${event.key}".`);
//});

//Función con flecha:

//textBox.addEventListener("keydown", (event) => {
//  console.log(`You pressed "${event.key}".`);
//});

//Función Declaration (se crea globalmente)
function sumsum(a, b) {
  return a + b;
}

// Function Expression (se crea y es usable solo when the execution reaches it)
let sumsumsum = function(a, b) {
  return a + b;
};

//Mismo ejemplo con arrow functions (son function expressions):
let sumsumsumsum = (a, b) => a + b; //con arrow functions no hace falta return
//salvo que usemos {}.

//Otro ejemplo con ? y :
//let age = prompt("What is your age?", 18);

//let welcomeen = (age < 18) ?
// function() { alert("Hello!"); } : //Pese a que se crea dentro de un condicional
// function() { alert("Greetings!"); };//Se asigna a la variable welcomeen y

//welcomeen();//puede llamarse fuera del scope



