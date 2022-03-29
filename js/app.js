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

