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


//Generador número random del 1 al 100:
Math.floor(Math.random() * 100) + 1;









//Loops

    //for loops:
    //for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
        //alert(i);
    //}


    //while loops:

    //let i = 0;

//while (i < cats.length) {
//  if (i === cats.length - 1) {
//    myFavoriteCats += `and ${cats[i]}.`;
//  } else {
//    myFavoriteCats += `${cats[i]}, `;
//  }
//
//  i++;
//}


    //do...while: (corre el código al menos 1 vez y luego comprueba la
    //condición para volver a repetirlo)

    //let i = 0;

//do {
//  if (i === cats.length - 1) {
//    myFavoriteCats += `and ${cats[i]}.`;
//  } else {
//    myFavoriteCats += `${cats[i]}, `;
//  }
//
//  i++;
//} while (i < cats.length);


//Podemos usar break para terminar el loop cuando se cumpla una condición
//o continue para mantener el loop mientras se cumpla una condición.









//Arrays

const array = ["A", "B", "C", "D"];
array.length; //4
array.push("E"); //Añade "E" a nuestro array.
array.push(3);//Añade 3 al array.

array.at(-1);//"D". Selecciona el último elemento del array

const nestedArray = [
    ["A","B"],
    [1, 2],
]

console.log(nestedArray[0][1]) //Selecciona "B"

//Métodos de Array


    //pop (extrae el último)
    //array = ['A', 'B', 'C', 'D', 'E', 3];
    array.pop();// 3 en este caso.

    //push (añade elemento al final)
    array.push("Z");

    //shift (extrae el primer elemento del array)
    array.shift(); //A en este caso

    //unshift (añade elemento al inicio del array)
    array.unshift("S"); // ['S', 'B', 'C', 'D', 'E', 'Z']


    //Loops for(let element of array){alert(element);}


//splice (SI MODIFICA EL ARRAY ORIGINAL)

let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(1,1); //quita desde el index 1 un elemento "study"
arr.splice(0, 3, "Let's", "dance"); //quita desde el inicio 3 elementos y añade
// "Let's", "dance"
arr.splice(2, 0, "a", "cool", "move"); //añade en posición 2 sin quitar nada
//Pueden usarse index negativos tipo arr.splice(-1,0,"lo que sea"); 



//arr.slice([start], [end]) (NO MODIFICA EL ARRAY)
//arr = ["Let's", 'dance', 'a', 'cool', 'move', 'now']
arr.slice(1,5); // ['dance', 'a', 'cool', 'move']
arr.slice(-2);// ['move', 'now']
arr.slice(); //Genera una copia sin modificar la original



//arr.concat(arg1, arg2...) (NO MODIFICA EL ORIGINAL)
//Concat crea un nuevo array que oncluya al final argumentos que indiquemos
arr.concat(1,2) // ["Let's", 'dance', 'a', 'cool', 'move', 'now', 1, 2]



//Iterate: forEach
//arr.forEach(function(item, index, array) {
  // ... do something with an item
//});

let lordOfTheRings = ["Bilbo", "Gandalf", "Nazgul"];

lordOfTheRings.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
//Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
//Nazgul is at index 2 in Bilbo,Gandalf,Nazgul


//Searching in array


//arr.indexOf(item, from) (devuelve el index del item o -1 si no está)
//arr.includes(item, from) (devuelve true si está)

lordOfTheRings.indexOf("Gandalf"); //1
lordOfTheRings.includes("Gandalf")//true



//arr.find() (Sirve para buscar en un array de objects con una 
// condición específica)

let usersObject = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let userFromTop = usersObject.find(item => item.id == 1);

console.log(userFromTop.name); //John



//arr.filter() (devuelve un array con items si la condición es true)

let someUsersObject = usersObject.filter(item => item.id < 3);

console.log(someUsersObject) //devuelve un array con objetos id 1 y 2




//Transform an array


//arr.map() (Itera por cada item realizando una función)

let lengthsArray = lordOfTheRings.map(item => item.length); //[5, 7, 6]
//da la longitud de cada string del array



//arr.sort() (Modifica el array original)

let arrayExample = [1, 15, 2];

arrayExample.sort((a, b) => a - b); //[1, 2, 15];


//arr.reverse() (Ordena al revés el array)

arrayExample.reverse(); // [15, 2, 1]


//arr.split() (Separa una string indicandole como y forma un array)

let stringRaro = 'Bilbo, Gandalf, Nazgul';

let arrayRaro = stringRaro.split(", "); //['Bilbo', 'Gandalf', 'Nazgul']

//**Si usamos arr.split("") forma un array letra por letra del string
//**arr.join(";") (Lo contrario de split, une los items de un array en una string)



//arr.reduce() (va iterando por todo el array y acumulando el resultado)

let reduceExample = [1, 2, 3, 4, 5];
let reduceResult = reduceExample.reduce((sum, current) => sum + current, 0);
//15 (suma de todo el array), se recomienda especificar el sum inicial.

//otro ejemplo:
const productOfAllNums = reduceExample.reduce((total, currentItem) => {
  return total * currentItem;
}, 1); //120


//Ejercicio usando filter,map y reduce:
let ejercicio = [1,2,3,4,5];
//Quiero crear una función que haga filtrar los números pares,
//  multiplicarlos por 3(map) y sumarlos (reduce)

let numPares = ejercicio.filter(num => num % 2 == 0);

let numThreeTimes = numPares.map(num => num * 3);

let resultado = numThreeTimes.reduce((total, current) => {
    return total + current;
}, 0);

//Convertido a función

function sumOfTripledEvens(array){
    return array
        .filter(num => num % 2 === 0)
        .map(num => num * 3)
        .reduce((acc, curr) => acc + curr);
}


//EJERCICIOS ARRAY

//Convertir string "background-color" a "backgroundColor":

  function camelize(str){
    return str
      .split("-")
      .map((item, i) => i === 0 ? item : item[0].toUpperCase() + item.slice(1))
      .join("");
  }


  //Modificar un array dejando solo valores comprendidos entre a y b.

  function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}