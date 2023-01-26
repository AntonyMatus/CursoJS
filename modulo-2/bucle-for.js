// Bucles For

for(let i = 0; i < 10; i++){
    //Esto es un bucle
    console.log(i);
}

let lista = [1,4,6,2,3,7,10,12];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
    
}

// estructura for ... of
for(let valor of lista) {
    console.log(valor)
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor)
})

let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDEveloper: true
}

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona)
}