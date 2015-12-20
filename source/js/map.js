function initMap() {
  if (!document.querySelector(".info__map")) {
    return;
  }

  var myLatLng = {lat: 34.870, lng: -111.761};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 7
  });

  var image = 'img/map-marker.png';
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Седона',
    icon: image
  });

}
