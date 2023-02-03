// Método más utilizados con cadenas de caracteres
// como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

// obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Remplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Gorka";
console.log(cadena);

cadena.replace('Gorka', 'Antony');

// Al utilizar string solo remplaza la primera instancia
console.log(cadena.replace('Gorka', 'Antony'));


 
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar los arboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los arboles";

console.log(texto_largo.replace('los', 'cinco'));


// Al utilizar la expresion regular /g (global), remplaza todas las instancias

console.log(texto_largo.replace(/los/g, 'cinco'));

