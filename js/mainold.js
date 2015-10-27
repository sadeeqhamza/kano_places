$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
    $("#searchBx").hide();
    $("#directionBx").hide();
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
    var map = L.mapbox.map('map', 'sadeeqhamza92.o0f2dhgi').setView([12.0000, 8.5167], 13);
    map.on('ready', function() {
        var marker = L.marker([11.990545360380963, 8.531827926635742], {
            icon: L.mapbox.marker.icon({
                'marker-color': '#000000',
                'marker-size': 'large',
                'marker-symbol': 'pitch'
            }),
            draggable: true
        }).addTo(map);
        map.attributionControl.setPosition('bottomleft');
        var directions = L.mapbox.directions();
        var directionsLayer = L.mapbox.directions.layer(directions).addTo(map);
        var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions).addTo(map);
        var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions).addTo(map);
        var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions).addTo(map);
        var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions).addTo(map);
        var featureLayer = L.mapbox.featureLayer().loadURL('assets/map.geojson').addTo(map);
        featureLayer.on('layeradd', function(e) {
            //ADD MARKERS//
            var marker = e.layer,
                feature = marker.feature;
            marker.setIcon(L.icon(feature.properties.icon));
            var popupContent = '<b>' + feature.properties.title + '</b>';
            marker.bindPopup(popupContent);
        });
        featureLayer.on('ready', function() {
            //FILTER MARKERS FROM OTHER LINKS//
            if (localStorage.filterGroup) {
                featureLayer.setFilter(function(f) {
                    return f.properties.group_name === localStorage.filterGroup;
                });
                showData('marker-list');
            }
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
            //SHOW DATA//
            //CLICKED MAP MARKER//
            function showData(theDiv) {
                    var markerList = document.getElementById(theDiv);
                    featureLayer.eachLayer(function(layer) {
                        var item = markerList.appendChild(document.createElement('li'));
                        item.className = "collection-item avatar";
                        item.innerHTML =   "<img src='"+layer.toGeoJSON().properties.icon.iconUrl + "'alt='' class='circle'>"+ "<span class='title'>"+layer.toGeoJSON().properties.title+"</span>"+ "<p>"+layer.toGeoJSON().properties.services+"</p>"+"<a href='#!' class='secondary-content'><i class='material-icons'>send</i></a>";
                        item.onclick = function() {
                            $('.button-collapse').sideNav('hide');
                            map.setView(layer.getLatLng(), 14);
                            layer.openPopup();
                        };
                    });
                    (function($) {
                        $(function() {
                            $("li", "#marker-list").sort(function(a, b) {
                                return
                                $(a).text() > $(b).text();
                            }).appendTo("#" + theDiv);
                        });
                    })(jQuery);
                }
                //USER INPUT EVENT//    
            $("#search").keyup(function() {
                $("#searchBx").fadeIn();
                $("#marker-list").empty();
                search();
                showData('marker-list');
            });
                 $("#mob-search").keyup(function() {
                $("#marker-list").empty();
                search();
                showData('mob-marker-list');
            });
            //SEARCH//
            function search() {
                var searchString = $('#search').val().toLowerCase();
                featureLayer.setFilter(showState);

                function showState(feature) {
                    return feature.properties.title.toLowerCase().indexOf(searchString) !== -1 || feature.properties
                        .services.toLowerCase().indexOf(searchString) !== -1;
                }
            }
        });
    });
    //HIDE/SHOW BUTTONS//
    $("#show-btn").click(function() {
        if ($("#searchBx").is(":visible")) {
            $("#searchBx").hide();
            console.log("visible");
            document.getElementById("show-icon").innerText = "visibility";
        } else {
            $("#searchBx").show();
            document.getElementById("show-icon").innerText = "visibility_off";
        }
    });
    $(".directions-btn").click(function() {
        if ($("#directionBx").is(":visible")) {
            $("#directionBx").hide();
        } else {
            $("#directionBx").show();
        }
    });
    $("#directions-btn").click(function() {
        $("#dir-icon").addClass("yellow-text");
    });

    
});