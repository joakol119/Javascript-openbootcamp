const persona = {
    nombre: "Joaquin",
    edad:27
}
console.log(persona)

function obtenDobleEdad(edad){
    return 2 * edad
} 

const dobleEdad = obtenDobleEdad(persona.edad)
console.log(dobleEdad)

function obtenArrays(edad){
    let arrayNums = []

    for (let i=0;i<10;i++){
        const numero = edad + i;
        console.log(numero)
        // arrayNums.push(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}
const array = obtenArrays(persona.edad)
console.log(array)