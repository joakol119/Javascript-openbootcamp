let nombre = "Joaquin";
let apellido = "Poblete Esteves";    
let estudiante = `${nombre} ${apellido}`;

console.log(estudiante);
console.log(estudiante.length);
console.log(nombre+ " " + apellido);
console.log(estudiante.trim().length);

let slice_estudiante = estudiante.slice(0, 1);
console.log(slice_estudiante);

let substring_estudiante = estudiante.slice(22, 23);
console.log(substring_estudiante);

let estudianteMayus = `${estudiante}`;
let estudianteMinus = `${estudiante}`;

console.log(estudianteMinus.toLowerCase());
console.log(estudianteMayus.toUpperCase());

console.log(estudiante.includes("Joaquin"));