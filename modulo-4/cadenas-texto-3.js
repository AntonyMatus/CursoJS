// Metodos de cadenas de texto (parte 3)
//https://regexr.com


let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar los arboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los arboles.";
console.log(texto_largo.match(/no/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto"));

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono"))

// saber si un texto termina con una palabra

console.log(texto_largo.endsWith("arboles."));
