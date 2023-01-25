// objetos.js

const obj = {
    nombre : 'joaquin',
    apellido : 'Poblete',
    altura : 1.72,
    isDeveloper: 'true',
    edad: 27
}
console.log(obj.edad)
console.log(obj)

const listaYo = [
    {nombre:'Joaquin',apellidos:'poblete',edad:27,altura:1.72,isDeveloper:true}
]
console.log(listaYo)

const listaAmigos = [
    {nombre:'Juan',apellido:'introini',edad: 27,altura:1.76,isDeveloper:true},
    {nombre:'jose',apellido:'ruiz',edad: 25,altura:1.72,isDeveloper:false}
]
listaAmigos.sort((a,b) => b.edad - a.edad)
console.log(listaAmigos)