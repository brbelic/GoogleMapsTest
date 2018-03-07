
var locations = [
  ['Hrvatsko narodno kazalište u Zagrebu', 45.8093983, 15.9678524, 'Trg Republike Hrvatske 15, 10000, Zagreb'],
  ['Nikola Tesla', 45.8039712, 15.9617965, 'Savska cesta 18, 10000, Zagreb'],
  ['Vatroslav Lisinski', 45.8025792, 15.9707527, 'Trg Stjepana Radića 4, 10000, Zagreb']
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(45.809, 15.967),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i,) {
      return function() {
        infowindow.setContent('<div id="infoWindow">'
          + locations[i][3]
          + '<button id=iw-button>Odaberi</button>'
          +'</div>');
        infowindow.open(map, marker);
        $("#iw-button").click(function () {
          $('#address').val(locations[i][3]);
        });
      }
    })(marker, i));
  }
}