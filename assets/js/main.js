var infowindow = null;
$(document).ready(function () { initialize();  });

function initialize() {

    var centerMap = new google.maps.LatLng(37.0902,-95.7129);

    var myOptions = {
        zoom: 5,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
    
    // var directionsService = new google.maps.DirectionsService;
    // var directionsDisplay = new google.maps.DirectionsRenderer;
    // directionsDisplay.setMap(map);
    // directionsDisplay.setPanel(document.getElementById('direction-panel'));

    setMarkers(map, sites);
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    // var bikeLayer = new google.maps.BicyclingLayer();
    // bikeLayer.setMap(map);

    // calculateAndDisplayRoute(directionsService, directionsDisplay);
}

var sites = [
//Friends Houses
    ['Golden, CO',39.7555,-105.2211,'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'],
    ['Salt Lake City, UT',40.7608,-111.8910,'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'],
//Max Pass
    ['Sunday River, ME', 44.4669484,-70.8476164,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Sugarloaf, ME', 45.0540885,-70.3107054,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Killington, VT', 43.6543552,-72.8557736,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Stratton, VT', 43.0906246,-72.9300383,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Pico Mountain, VT', 43.6625981,-72.8456477,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Loon Mountain, NH', 44.0314707,-71.6371892,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Wachusset, MA', 42.5035579,-71.887627,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Snowshoe, WV', 38.4112014,-79.9979835,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Mount Tremblant, QU', 46.1759107,-74.7327556,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Blue Mountain, ON', 44.5404825,-80.4102616,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Boyne Mountain, MI', 45.1641018,-84.93361, 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Boyne Highlands, MI', 45.469034,-84.93762,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Buck Hill, MN', 44.7238431,-93.28562,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Big Sky, MT', 45.2552326,-111.4065411,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Brighton, UT', 40.5980231,-111.585381,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Solitude, UT', 40.621077,-111.6020314,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Copper Mountain, CO', 39.5000415,-106.1490112,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Steamboat, CO', 40.4571789,-106.8067267,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Winter Park, CO', 39.89069,-105.8119952,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Alyeska, AK', 60.9700265,-149.1009514,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Crystal Mountain, WA', 46.9281804,-121.5133111,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Summit at Snoqualmie, WA', 47.4204436,-121.423298,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Cypress Mountain, BC', 49.3960215,-123.206739,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Mt. Bachelor, OR', 43.9897989,-121.6868714,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Boreal Mountain, CA', 39.3364571,-120.3521808,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    ['Lee Canyon, NV', 36.3037622,-115.6796317,'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'],
    //New 6 Mountains
    ['Kicking Horse, BC', 51.2975688, -117.0504403,'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    ['Fernie, BC', 49.5069587, -115.09079, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    ['Kimberly, BC', 49.6773784, -116.054696, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    ['Nakiska, AB', 50.9427038, -115.1532872, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    ['Stoneham, QC', 47.0269378, -71.3851933, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    ['Mont-Sainte-Anne, QC', 47.075353, -70.9070917, 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'],
    //Other Mountains
    ['Revelstoke, BC', 50.9583062,-118.1659692,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    ['Whistler, BC',50.1042369,-123.0717262,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    ['Alta, UT',40.590831,-111.6310716,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    ['Telluride, CO',37.9365535,-107.8485311,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    ['Wolf Creek, Pagosa Springs, CO',37.5225621,-106.8094503,'http://maps.google.com/mapfiles/ms/icons/red-dot.png']
    // ['', , ,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    // ['', , ,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
    // ['', , ,'http://maps.google.com/mapfiles/ms/icons/red-dot.png'],
];



function setMarkers(map, markers) {

    for (var i = 0; i < markers.length; i++) {
        var sites = markers[i];
        var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
        var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            title: sites[0],
//            zIndex: sites[3],
            html: sites[0],
            icon: sites[3]
        });

        var contentString = "Some content";

        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {

    var origin = { "lat" : sites[0][1], "lng" : sites[0][2] };
    var destination = { "lat" : sites[1][1], "lng" : sites[1][2] };

    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

//$(document).ready(function() {
//    myFeature.init({});
//});
//
//var myFeature = {
//    'config' : {
//    },
//    'init' : function(config) {
//        // stays the
//        myFeature.initMap();
//        myFeature.initMarkers();
//    },
//    'initMap' : function() {
//        var myLatlng = new google.maps.LatLng(37.0902,-95.7129);
//
//        // Other options for the map, pretty much selfexplanatory
//        var mapOptions = {
//            zoom: 3,
//            center: myLatlng,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//
//        // Attach a map to the DOM Element, with the defined settings
//        var map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
//
//
//        myFeature.map = map;
//    },
//    'initMarkers' : function() {
//        var map = myFeature.map;
//        myFeature.addMarker(37.0902,-95.7129, "Test", map);
//    },
//    'addMarker' : function(lat, lng, label, map) {
//        var latLng = new google.maps.LatLng(37.0902,-95.7129);
//        var marker = new google.maps.Marker({
//                position: latLng,
//                label: label,
//                map: map
//        });
//    }
//};