let nombre = "Antony";
let apellido = "Rebolledo";

let estudiante = nombre.concat(" ",apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let lenght_student = estudiante.length;
console.log(lenght_student);

let position_first_leter_name = nombre.charAt(0);
console.log(position_first_leter_name);

let position_finish_leter_last_name = apellido.charAt(8);
console.log(position_finish_leter_last_name);

let new_student = "  "+ estudiante+"  ";

console.log(new_student.length);

let delete_space_white = new_student.trim().length;
console.log(delete_space_white);

console.log(estudiante.includes(nombre));


