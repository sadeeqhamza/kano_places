$(document).ready(function() {

    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();


});

jQuery(document).ready(function($) {


    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
    var map = L.mapbox.map('map', 'sadeeqhamza92.mhnc2m9l').setView([12.0000, 8.5167], 13);

    var RADIUS = 500;
var filterCircle = L.circle(L.latLng(40, -75), RADIUS, {
    opacity: 1,
    weight: 1,
    fillOpacity: 0.1
}).addTo(map);

    var featureLayer = L.mapbox.featureLayer()
        .loadURL('assets/map.geojson')
        .addTo(map);

    featureLayer.on('layeradd', function(e) {
        var marker = e.layer,
            feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
          var popupContent ='<b>'+feature.properties.title +'</b>'+'<br>' +feature.properties.services;

          marker.bindPopup(popupContent);

    });

    function showData(){
    var markerList = document.getElementById('marker-list');

        console.log("ready");
        featureLayer.eachLayer(function(layer) {
              console.log("ready2");
            var item = markerList.appendChild(document.createElement('li'));
         item.innerHTML = layer.toGeoJSON().properties.title;
            item.onclick = function() {
                map.setView(layer.getLatLng(), 14);
                layer.openPopup();
            };
        });

        (function( $ ) {
    $(function() {
        $( "li", "#marker-list" ).sort(function( a, b ) {
            return $( a ).text() > $( b ).text(); 

        }).appendTo( "#marker-list" );

    });

})( jQuery );

}

map.on('mousemove', function(e) {
    filterCircle.setLatLng(e.latlng);
});
    featureLayer.on('mouseover', function(e) {
        e.layer.openPopup();
    });
    featureLayer.on('mouseout', function(e) {
        e.layer.closePopup();
    });




    $("#search").keyup(function(){
        $("#marker-list").empty();
       search();
         showData();
   
});


    function search() {
        // get the value of the search input field
        var searchString = $('#search').val().toLowerCase();

        featureLayer.setFilter(showState);

        //featureLayer.setFilter(showService);

        // here we're simply comparing the 'state' property of each marker
        // to the search string, seeing whether the former contains the latter.
        function showState(feature) {
            return feature.properties.title
                .toLowerCase()
                .indexOf(searchString) !== -1||feature.properties.services
                .toLowerCase()
                .indexOf(searchString) !== -1;
        }
        function showService(feature) {
            return feature.properties.services
                .toLowerCase()
                .indexOf(searchString) !== -1;
        }
    }


    function locate() {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported";
            }
        }

        function showPosition(position) {
            x = position.coords.latitude;
            y = position.coords.longitude;
        }
    }

});
