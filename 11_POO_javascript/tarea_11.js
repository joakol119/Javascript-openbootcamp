class Estudiante{
    constructor(nombre) {
        this.nombre = nombre
        this.asignaturas = ["Javascript", "HTML", "CSS"];
}
obtenDatos() {
    console.log(`Hola, mi nombre es ${this.nombre}, y mis asignaturas son: ${this.asignaturas}`)
}
}

const nuevoEstudiante = new Estudiante("Joaquin")
console.log(nuevoEstudiante.obtenDatos())
