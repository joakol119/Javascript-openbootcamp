// fecha
const fechaHoy = new Date()
console.log(fechaHoy)

const fechaNacimiento = new Date(1995,10,23)
console.log(fechaNacimiento)

console.log(fechaHoy.getTime() > fechaNacimiento.getTime()) 

console.log(fechaNacimiento.getDate())
console.log(fechaNacimiento.getMonth() + 1)
console.log(fechaNacimiento.getFullYear())