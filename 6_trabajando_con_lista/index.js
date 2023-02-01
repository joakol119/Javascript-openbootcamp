// Lista de la compra
let listaCompra = ["Leche", "Pan", "Tomates", "Queso", "Manzanas"];

// Agregar "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);

// Películas favoritas
let peliculas = [
  {titulo: "The Shawshank Redemption", director: "Frank Darabont", fecha: 1994},
  {titulo: "The Godfather", director: "Francis Ford Coppola", fecha: 1972},
  {titulo: "The Dark Knight", director: "Christopher Nolan", fecha: 2008}
];

// Películas posteriores a 2010
let peliculasDespues2010 = peliculas.filter(function(pelicula) {
  return pelicula.fecha >= 2010;
});

// Directores de las películas
let directores = peliculas.map(function(pelicula) {
  return pelicula.director;
});

// Títulos de las películas
let titulos = peliculas.map(function(pelicula) {
  return pelicula.titulo;
});

// Concatenación de la lista de directores y la lista de títulos (utilizando concat)
let directoresYTitulos = directores.concat(titulos);

// Concatenación de la lista de directores y la lista de títulos (utilizando el factor de propagación)
let directoresYTitulos2 = [...directores, ...titulos];