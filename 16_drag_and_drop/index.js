const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")//En este caso serian los 2 div
const trash = document.getElementById('trash');

// console.log(parrafos)

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma,0,0)
    })
    parrafo.addEventListener("dragend",() =>{
        console.log("He terminado con el arrastre del parrafo")
        parrafo.classList.remove("dragging")
    })
})
    secciones.forEach(seccion => {
    seccion.addEventListener("dragover",event => {
        event.preventDefault()
        event.dataTransfer.dropEffect="copy" //Copy x defecto
    // console.log("drag over")
    })
    seccion.addEventListener("drop",event=> {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("parrafo id: ", id_parrafo) 
        // En vez de pasarlo x consola lo pasamos a la seccion
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    }) 
})
    trash.addEventListener('drop', (event) => {
    event.preventDefault();
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    element.remove();
});