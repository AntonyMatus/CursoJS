// Sesión 4 - Strings (cadenas de caracteres)

let str_dnl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples'



console.log(str_dnl);
console.log(str_sng);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_sobles = "El otro dia me dijo literamente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);

// comillas invertidas (backticks)

let str_backticks = ` Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Iñigo";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo);

// Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla);

// introduccion de variables en html

let libros = ["Empieza por el por qué", "El monje que vendio su Ferrari", "El poder del ahora"];
