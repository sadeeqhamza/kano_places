$(document).ready(function() {
    if (localStorage.filterGroup) {
        localStorage.removeItem("filterGroup");
    }
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
    var featureLayer = L.mapbox.featureLayer().loadURL('assets/map.geojson');
    var air = 0;
    var bnk = 0;
    var bar = 0;
    var car = 0;
    var cin = 0;
    var chur = 0;
    var food = 0;
    var gov = 0;
    var hosp = 0;
    var hotel = 0;
    var land = 0;
    var mall = 0;
    var mosque = 0;
    var oth = 0;
    var pet = 0;
    var stu = 0;
    var police = 0;
    var sal = 0;
    var school = 0;
    var shop = 0;
    var sports = 0;
    featureLayer.on('layeradd', function(e) {
        console.log(e.layer.feature.properties.group_name);
        switch (e.layer.feature.properties.group_name) {
            case "Airport":
                air += 1;
                $('#airport-count').html(air + " spots available");
                break;
            case "Bank":
                bnk += 1;
                $('#bank-count').html(bnk + " spots available");
                break;
            case "Barbers":
                bar += 1;
                $('#barber-count').html(bar + " spots available");
                break;
            case "Car":
                car += 1;
                $('#car-count').html(car + " spots available");
                break;
            case "Cinema":
                cin += 1;
                $('#cinema-count').html(cin + " spots available");
                break;
            case "Church":
                chur += 1;
                $('#church-count').html(chur + " spots available");
                break;
            case "Food":
                food += 1;
                $('#food-count').html(food + " spots available");
                break;
            case "Government":
                gov += 1;
                $('#gov-count').html(gov + " spots available");
                break;
            case "Hospital":
                hosp += 1;
                $('#hospital-count').html(hosp + " spots available");
                break;
            case "Hotel":
                hotel += 1;
                $('#hotel-count').html(hotel + " spots available");
                break;
            case "Land Mark":
                land += 1;
                $('#land-count').html(land + " spots available");
                break;
            case "Mall":
                mall += 1;
                $('#mall-count').html(mall + " spots available");
                break;
            case "Mosque":
                mosque += 1;
                $('#mosque-count').html(mosque + " spots available");
                break;
            case "Other":
                oth += 1;
                $('#other-count').html(oth + " spots available");
                break;
            case "Petrol Station":
                pet += 1;
                $('#petrol-count').html(pet + " spots available");
                break;
            case "Studio":
                stu += 1;
                $('#studio-count').html(stu + " spots available");
                break;
            case "Police Station":
                police += 1;
                $('#police-count').html(police + " spots available");
                break;
            case "Saloon":
                sal += 1;
                $('#saloon-count').html(sal + " spots available");
                break;
            case "Shop":
                shop += 1;
                $('#shop-count').html(shop + " spots available");
                break;
            case "School":
                school += 1;
                $('#school-count').html(school + " spots available");
                break;
        }
       $('#count').html(bnk+air+shop+school+sal+police+stu+pet+oth+mosque+mall+land+hotel+hosp+gov+food+chur+cin+car+bar);
    });

    $('#airport-link').click(function() {
        localStorage.setItem("filterGroup", "Airport");
    });
    $('#bank-link').click(function() {
        localStorage.setItem("filterGroup", "Bank");
    });
    $('#barber-link').click(function() {
        localStorage.setItem("filterGroup", "Barbers");
    });
    $('#car-link').click(function() {
        localStorage.setItem("filterGroup", "Car Repair");
    });
    $('#cinema-link').click(function() {
        localStorage.setItem("filterGroup", "Cinema");
    });
    $('#church-link').click(function() {
        localStorage.setItem("filterGroup", "Church");
    });
    $('#food-link').click(function() {
        localStorage.setItem("filterGroup", "Food");
    });
    $('#gov-link').click(function() {
        localStorage.setItem("filterGroup", "Government");
    });
    $('#hosp-link').click(function() {
        localStorage.setItem("filterGroup", "Hospital");
    });
    $('#hotel-link').click(function() {
        localStorage.setItem("filterGroup", "Hotel");
    });
    $('#land-link').click(function() {
        localStorage.setItem("filterGroup", "Land Mark");
    });
    $('#mall-link').click(function() {
        localStorage.setItem("filterGroup", "Shopping Mall");
    });
    $('#mosque-link').click(function() {
        localStorage.setItem("filterGroup", "Mosque");
    });
    $('#other-link').click(function() {
        localStorage.setItem("filterGroup", "Other");
    });
    $('#petrol-link').click(function() {
        localStorage.setItem("filterGroup", "Petrol Station");
    });
    $('#studio-link').click(function() {
        localStorage.setItem("filterGroup", "Photo/Editing Studio");
    });
    $('#police-link').click(function() {
        localStorage.setItem("filterGroup", "Police Station");
    });
    $('#saloon-link').click(function() {
        localStorage.setItem("filterGroup", "Saloon");
    });
    $('#school-link').click(function() {
        localStorage.setItem("filterGroup", "School");
    });
    $('#shop-link').click(function() {
        localStorage.setItem("filterGroup", "Shop");
    });
    $('#sports').click(function() {
        localStorage.setItem("filterGroup", "Sports");
    });

});
