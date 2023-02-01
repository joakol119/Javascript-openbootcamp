let marker, map;

function initMap(){
    var fav1 = {lat:  34.901112, lng: -56.164532};
    var fav2 = {lat: -27.594887, lng:  -48.548919};
    var fav3 = {lat: -33.448890, lng: -70.669265};

    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: posicion,
    })
    const marker = new google.maps.Marker({
    position: posicion,
    map, //podria ser map:map, pero como es lo mismop ahorramos codigo
    title: 'Posicion inicial'
    })
    var marker_fav1 = new google.maps.Marker({
        position: fav1,
        map: map,
        title: 'Montevideo, Uruguay'
    });
    var marker_fav2 = new google.maps.Marker({
        position: fav2,
        map: map,
        title: 'Florianópolis, Brasil'
      });
      var marker_fav3 = new google.maps.Marker({
        position: fav3,
        map: map,
        title: 'Santiago de Chile, Chile'
      });
    // Obtener la geolocalizacion
    // marker.setPosition({lat,long})
    geoPosiciona()
}
function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa,onError,options)
    }else{
        alert("Tu navegador no soporta geolocalizacion")
    }
}
function centraMapa(position){
    const nuevaPos = {lat:position.coords.latitude,lng:position.coords.longitude}

console.log(nuevaPos)
marker.setPosition(nuevaPos)
map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}