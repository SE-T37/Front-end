function initMap() {
    
    var attributes = {
        center: {lat: 46.074779, lng: 11.121749},
        zoom: 8
    }

    map = new google.maps.Map(document.getElementById("map"), attributes);
}