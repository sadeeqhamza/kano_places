$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
    $("#searchBx").hide();
});
jQuery(document).ready(function($) {
    L.mapbox.accessToken ='pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
    var map = L.mapbox.map('map', 'sadeeqhamza92.mhnc2m9l').setView([12.0000, 8.5167], 15);
 
    map.on('ready', function() {
   var marker = L.marker([11.990545360380963, 8.531827926635742], {
        icon: L.mapbox.marker.icon({
            'marker-color': '#000000',
            'marker-size': 'large',
            'marker-symbol': 'pitch'
        }),
        draggable: true
    }).addTo(map);
   var featureLayer = L.mapbox.featureLayer().loadURL('assets/map.geojson').addTo(map);
    featureLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
        var popupContent = '<b>' + feature.properties.title + '</b>';
        marker.bindPopup(popupContent);           
    });
});

//ADD MARKERS//


//FILTER MARKERS FROM OTHER LINKS//
if(localStorage.filterGroup){
     featureLayer.setFilter(function(f) {
        return f.properties.group_name === localStorage.filterGroup;
        
    });

    showData('marker-list');
}
     
 //FILTER CIRCLE//   
    
 //MARKER EVENT LISTENERS//   
    featureLayer.on('mouseover', function(e) {
        e.layer.openPopup();
    });
    featureLayer.on('mouseout', function(e) {
        e.layer.closePopup();
    });
    map.on('dblclick', function(e) {
     if ($("#searchBx").is(":visible")) {
            $("#searchBx").fadeOut();
           
        }
});

//USER INPUT EVENT//    
    $("#search").keyup(function() {
         $("#searchBx").fadeIn();
        $("#marker-list").empty();
        search();
        showData('marker-list');
    });

  //CLICKED MAP MARKER//
  

//HIDE/SHOW BUTTONS//
      $("#show-icon").click(function() {
        if ($("#searchBx").is(":visible")) {
            $("#searchBx").fadeOut();
            console.log("visible");
            document.getElementById("show-icon").innerText = "visibility";
        } else {
            $("#searchBx").fadeIn();
            document.getElementById("show-icon").innerText = "visibility_off";
        }
    });
        $("#directions-btn").click(function() {
  if ($("#directionBx").is(":visible")) {
            $("#directionBx").fadeOut();
           
        } else {
            $("#directionBx").fadeIn();
            
        }
    });
 $("#directions-btn").click(function() {
 $("#dir-icon").addClass("yellow-text");

 });
      //SHOW DATA//
    function showData(theDiv) {
        var markerList = document.getElementById(theDiv);
        featureLayer.eachLayer(function(layer) {
            var item = markerList.appendChild(document.createElement('li'));
            item.innerHTML = layer.toGeoJSON().properties.title;
            item.onclick = function() {
                map.setView(layer.getLatLng(), 14);
                layer.openPopup();
            };
        });
        (function($) {
            $(function() {
                $("li", "#marker-list").sort(function(a, b) {
                    return $(a).text() > $(b).text();
                }).appendTo("#" + theDiv);
            });
        })(jQuery);
    }    
//SEARCH//
    function search() {
        var searchString = $('#search').val().toLowerCase();
        featureLayer.setFilter(showState);
        function showState(feature) {
            return feature.properties.title.toLowerCase().indexOf(searchString) !==
                -1 || feature.properties.services.toLowerCase().indexOf(
                    searchString) !== -1;
        }
    }
//END//

map.attributionControl.setPosition('bottomleft');

// create the initial directions object, from which the layer
// and inputs will pull data.
var directions = L.mapbox.directions();

var directionsLayer = L.mapbox.directions.layer(directions)
    .addTo(map);

var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
    .addTo(map);

var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
    .addTo(map);

var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
    .addTo(map);

var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
    .addTo(map);

    //directions.setOrigin(origin).setDestination(destination).query();
   
});


