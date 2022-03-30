/*alert('Hola Mundo');
const nombre = prompt('¿cuál es tu nombre?');
document.querySelector('.contenido').innerHTML = `${nombre} , Está aprendiendo js Moderno`;*/
const precio = 108800;
const producto = "Monitor de 24 pulgadas";
console.log("El " + producto + " es de " + precio + " pesos");
console.log(`El artefacto ${producto} tiene un precio de $ ${precio}`);

const refran = "      camaron que se duerme se ahoga        ";
//para quitar espacios vacíos en cadenas
console.log(refran);
console.log(refran.trimStart().trimEnd());
console.log(refran.trim());


//Para reemplazar texto en cadenas
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Pantalla curva'));

//Para cortar cadenas de texto
const frase = "vivir es morir lentamente contento";
console.log(frase);
console.log(frase.length);
console.log(frase.slice(9, 34));

const nombre = "Eduardo";
console.log(nombre);
console.log(nombre.substring(0, 1));

const apellido = "Guevara";
console.log(apellido);
console.log(apellido.charAt(0));

//Repetir cadenas de texto

const slogan = "vive con estilo";
console.log(slogan);
const marca = "Cumbi ";
console.log(marca.repeat(3));
console.log(`${marca.repeat(2)} ${slogan} !!!`);

//Dividir cadenas de texto

const prosa = "mi casa es de ladrillo y cemento";
console.log(prosa.split(" ")); /* divide por el espacio*/

const ingredientes = "carne, pollo, verduras, ají, sal";
console.log(ingredientes);
console.log(ingredientes.split(", ")); /*divide por la coma*/


//cambio a mayúsculas y minúsculas

const carreta = "cumbitara es tierra promisoria"
console.log(carreta);
console.log(carreta.toUpperCase());

const dicho = "DORMIR PARADO ES DESCANZAR PARADO";
console.log(dicho);
console.log(dicho.toLowerCase());

//Números

const numero1 = 2022;
console.log(numero1);

const numero2 = 1.618;
console.log(numero2);

const negativo1 = -0.618;
console.log(negativo1);

//Operaciones con números

const valor1 = 900;
const valor2 = 137;

let suma = valor1 + valor2;
let resta = valor1 - valor2;
let multiplicar = valor1 * valor2;
let dividir = valor1 / valor2;
let resto = valor1 % valor2;

console.log(suma);
console.log(resta);
console.log(multiplicar)
console.log(dividir);
console.log(resto);

//el método Math******************//

let metodo = Math.PI;
console.log(metodo);

//redondeo hacia arriba o hacia abajo

let real1 = Math.round(2.1429);
console.log(real1);

let real2 = Math.round(2.7429);
console.log(real2);

//raiz cuadrada

let resultado = Math.sqrt(144);
console.log(resultado);

//Absoluto

resultado = Math.abs(-13);
console.log(resultado);

//Potencia

resultado = Math.pow(2, 3);
console.log(resultado);

//Mínimo

resultado = Math.min(3, 5, 1, 56, 0);
console.log(resultado);

//Aleatorio dentro de un rango

resultado = Math.floor(Math.random() * 30);
console.log(resultado);


//Incrementos o Decrementos


let contador = 10;

++contador;
console.log(contador);

--contador;
console.log(contador);











