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


//CONVERTIR STRING EN NÚMERO

const minumero1 = "20";
const minumero2 = "20.2";
const minumero3 = "Uno";
const minumero4 = 20;

console.log(minumero4);
console.log(Number.parseInt(minumero1));/*convierte a numero entero*/
console.log(Number.parseFloat(minumero2));/*Convierte a real*/
console.log(Number.parseFloat(minumero3));/*Devuelve NaN*/
console.log(Number.isInteger(minumero2));/*devuelve true si es entero o false si es real*/

//COMPARAR DOS NÚMEROS

const elnumero1 = 30;
const elnumero2 = 30.8;
const elnumero3 = "30.8";

console.log(elnumero1 > elnumero2);/*false o true según el caso*/
console.log(elnumero1 < elnumero2);/*false o true según el caso*/
console.log(elnumero2 == elnumero3);/*false o true según el caso no es estricto con strings*/
console.log(elnumero2 === elnumero3);/*false o true según el caso ES ESTRICTO CON STRINGS*/
console.log(elnumero2 !== elnumero3);/*DIFERENTE false o true. ES ESTRICTO CON strings*/

//BOOLEANS

const boolean1 = true;
const boolean2 = false;
const boolean3 = "false";

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

console.log(boolean1 === boolean2);
console.log(boolean1 === false);
console.log(boolean2 === boolean3);


var estado = Boolean(10 > 9);



//OBJETOS

const item = {
    nombre: "Monitor de pantalla curva",
    precio: 2000,
    disponible: true,
}

console.log(item);

//ACCEDER A LAS PROPIEDADES DE UN OBJETO

console.log(item.nombre);
console.log(item.precio);
console.log(item.disponible);

//AGERGAR O ELIMINAR PROPIEDADES A UN OBJETOS

item.imagen = "imagen.jpg";
console.log(item);

delete item.disponible;
console.log(item);

//FECHAS

var fecha = new Date(); /*fecha actual*/
console.log(fecha);


//DESTRUCTURING OBJETS: extraer del objeto y crear variables en un mismo paso


const equipo = {
    jugador1: "Eduardo Guevara",
    jugador2: "Jaime Meneses",
    jugador3: "Orlando Camacho"
}

console.log(equipo.jugador1);

const { jugador1 } = equipo; /*crea la constante jugador1 del objeto equipo*/
console.log(jugador1);

const { jugador2, jugador3 } = equipo; /*crea la constante jugador2 y jugaror3 del objeto equipo*/
console.log(jugador2);
console.log(jugador3);


//OBJETOS ANIDADOS


const tiendaCumbi = {
    nombre: "Cumbi",
    razon: "Vender",
    direccion: "calle 11 10 10",

    item1: {
        calzado: "Botas",
        color: "Negro",
        valor: 10267
    },
    
    item2: {
        calzado: "Botines",
        color: "Azul",
        valor: 267
    },

      item3: {
        calzado: "Guayos",
        color: "rosado",
        valor: 267.567
    }

    
}

console.log(tiendaCumbi);

console.log(tiendaCumbi.item3);

console.log(tiendaCumbi.item3.valor);


//DESTRUCTURING OBJETS ANIDADOS


const { item2 } = tiendaCumbi; /*crea el arreglo item2*/

console.log(item2);

"use strict"; /*se usa estrictamente js y se habilitan nuevos métodos*/

//CONGELAR UN OBJETO PARA NO MODIFICARLO


const arte = {
    cuadro1: "El grito",
    cuadro2: "El Guernica",
    cuadro3: "Pochonguera"
}



Object.freeze(arte);
console.log(arte);

arte.cuadro1 = "pastoZ"; /*Esto ya no se puede reasignar*/
delete arte.cuadro1; /*Esto ya no se puede borrar*/

console.log(arte.cuadro1); /*muestra el valor inicial*/


//SELLAR UN OBJETO


const libros = {
    libro1: "Así hablaba Zaratustra",
    libro2: "Inventario",
    libro3: "Letras y Trazos"
}

Object.seal(libros); /*no permite agregar o borrar, pero si mificar*/

console.log(libros);

libros.libro2 = "El Quijote de la mancha"; /*seal permite modificar*/ 
console.log(libros.libro2);


//UNIR DOS OBJETOS

const silla = {
    estilo: "CumbiNova",
    modelo: "2022",
    precio: 12500
}

const unidades = {
    peso: '1kg',
    medida: '1m'
}

console.log(silla);
console.log(unidades);

//existe dos formas de unir objetos:

const union1 = Object.assign(silla, unidades);
console.log(union1);

const union2 = {...silla, ...unidades};
console.log(union2);

//FUNCIONES DENTRO DE LOS objetos


const cama1 = {
    modelo: "1980",
    precio: 3678,
    color: "rojoVerdoso",

    mostrarInfo: function() {
        console.log(`La cama: ${this.color} tiene un precio de: ${this.precio}`)
    }
}

cama1.mostrarInfo();

const cama2 = {
    modelo: "2980",
    precio: 53678,
    color: "VerdeRojizo",

    mostrarInfo: function() {
        console.log(`La cama: ${this.color} tiene un precio de: ${this.precio}`)
    }
}

cama2.mostrarInfo();


//OBJECT CONSTRUCTOR

const artefacto = {
    referencia: 0000,
    tipo: "cama",
    color: "verde"
}

function Artefacto(referencia, tipo, color) {
    this.referencia = referencia;
    this.tipo = tipo;
    this.color = color;
}

const artefacto1 = new Artefacto(0001, "silla", "rojo");
console.log(artefacto1);

const artefacto2 = new Artefacto(0002, "sofá", "amarillo");
console.log(artefacto2);

//OBEJCT .keys, .values, y .entries


console.log(Object.keys(artefacto)); /*Muestra las llaves del objeto*/
console.log(Object.values(artefacto)); /*Muestra los valores del objeto*/
console.log(Object.entries(artefacto)); /*Muestra llaves y valores (como arreglos) del objeto*/


//ARRAYS

const misNumeros = [10, 20, 30, 40, 50, 60];
console.log(misNumeros);

const palabras = ["Casa", "Instrumento", "Proporcion"];
console.log(palabras);

const deTodo = ["Cumbi", 1960, true, 0.8, { nombre: "Eduardo", apellido: "Guevara" }];
console.log(deTodo);

//Acceder a los array

console.table(misNumeros); /*Muestra los arreglos en forma de tabla*/

console.log(misNumeros[2]); /*muestra la posición 2*/


//Recorrer un Arrays


const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
console.table(meses);

console.log(meses.length); /*muestra la longitud del array*/

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
} /*esta iteración recorre todo el array*/


//agregar o modificar valores a un array////////////////////////////////

const aves = ["gallina", "pato", "avestruz", "chumbo", "quinde"];
console.table(aves);

aves[0] = 'ave cambiada'; /*asigna otra ave a la posición cero del array*/
console.table(aves);

aves[5] = 'ave agregada'; /* agrega un valor a la posición 5*/;

console.table(aves);


//agregar nuevos elementos al principio o al final de un array*////

aves.push('torcaza'); /*agrega un valor despues de la últoma posición del array*/
console.table(aves);

const carrito = [];

const compra1 = {
    nombre: 'camisa',
    talla: 'l',
    color: 'azul',
    precio: 5032
}

carrito.push(compra1); /*agrega este objeto al final del array carrito*/
console.table(carrito);

const compra2 = {
    nombre: 'camisola',
    talla: 'xl',
    color: 'verde',
    precio: 9032
}

carrito.push(compra2); /*agrega este objeto al final del array carrito*/
console.table(carrito);

const compra3 = {
    nombre: 'buzo',
    talla: 'xs',
    color: 'fuccsia',
    precio: 2347
}


carrito.unshift(compra3); /*agrega este objeto al inicio del array carrito*/
console.table(carrito);


//spread operator en Arrays

const compra4 = {
    nombre: 'pijama',
    talla: 'xl',
    color: 'naranja',
    precio: 9347
}

const compra5 = {
    nombre: 'chaqueta',
    talla: 'l',
    color: 'azul',
    precio: 2020
}

let comprado;
comprado = [...carrito, compra4]; /*copia el array carrito y crea compras anadiendo compra4*/
console.table(comprado); /*muestra una copia de carrito y este no se modifica*/

comprado = [compra5, ...comprado]; /*agrega compra 5 al inicio de comprado*/
console.table(comprado);


///////eliminar elementos con splice//////////


comprado.pop(); /*elimina el último del array*/
console.table(comprado);

comprado.shift(); /*elimina el primero del array*/
console.table(comprado);

comprado.splice(1, 1); /*se posiciona en la casilla 1 y la elimina*/
console.table(comprado);


//////Destructuring de arrays////////////////////////////////


const libraco = {
    titulo: "travesuras de marvelle",
    editorial: "volcán",
    valor: 21567

}

const { titulo, editorial } = libraco; /*sacamos estos valores del objeto*/
console.log(titulo);
console.log(editorial);


//forEach para iterar arreglos

const ventas = [
    { nombre: 'pantalla plana', precio: 500 },
    { nombre: 'pantalla curva', precio: 1500 },
    { nombre: 'televisor led', precio: 5000 },
    { nombre: 'computador pollito', precio: 5200 },
    { nombre: 'teclado', precio: 50 },
    { nombre: 'celular', precio: 2500 }
]

console.table(ventas);

for (let contador = 0; contador < ventas.length; contador++) {
    console.log(ventas[contador]); 
} /*lista todos los objetos del arreglo*/

for (let contador = 0; contador < ventas.length; contador++) {
    console.log(ventas[contador].nombre); 
} /*lista solo nombre del array*/

ventas.forEach(function (vender) {
    console.log(`${vender.nombre} - precio: ${vender.precio}`);
})  /*otra forma de iterar arrays*////////////////////////////////

//////.map para iterar un array////////////////////////////////

const ventas2 = [
    { nombre: 'audífonos', precio: 2500 },
    { nombre: 'altavoz cumbi', precio: 1500 },
    { nombre: 'teclado ergonómico', precio: 5000 },
    { nombre: 'tablet', precio: 5200 },
    { nombre: 'monitor', precio: 50 },
    { nombre: 'portátil', precio: 2500 }
]


console.log(ventas2);

const nuevoArreglo = ventas2.map(function (vender) {
    return `${vender.nombre} - precio: ${vender.precio}`;
})  /*se crea un arreglo nuevo*/



console.log(nuevoArreglo);


