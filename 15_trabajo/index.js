localStorage.setItem("persona",JSON.stringify({nombre: "Joaquin", apellido: "Poblete",edad:27})) 
sessionStorage.setItem("persona",JSON.stringify({nombre: "Joaquin", apellido: "Poblete",edad:27})) 

console.log(JSON.parse(localStorage.getItem("persona")));
console.log(JSON.parse(sessionStorage.getItem("persona")));

// document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2 * 60 * 1000).toUTCString()
document.cookie = "persona" + JSON.stringify(persona) + ";expires=" + new Date(2 * 60 * 1000).toUTCString()
console.log(document.cookie)