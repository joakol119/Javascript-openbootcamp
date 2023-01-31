const boton = document.querySelector("#btn")
boton.addEventListener("click", () => {
    alert("se ha hecho click en el boton")
})

$(() => {
    $(".boton-jquery").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})