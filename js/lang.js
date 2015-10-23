$(document).ready(function() {
    function translate(lang) {
        thelang = lang;
        $.ajax({
            url: "data.json",
            dataType: "text",
            success: function(data) {
                var json = $.parseJSON(data);
                srcTxt = document.getElementsByClassName("sourceText");
                console.log(srcTxt.length);
                for (var key in json) {
                    for (var i = 0; i < srcTxt.length; i++) {
                        if (srcTxt[i].innerText == json[key].en) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].ha) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].ar) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].hn) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].gr) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].ch) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].yr) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else if (srcTxt[i].innerText == json[key].ig) {
                            srcTxt[i].innerText = json[key][thelang];
                        } else {
                            console.log("not");
                        }
                    }
                }
            }
        });
    }
    $('#ha').click(function() {
        translate("ha");
    });
    $('#ar').click(function() {
        translate("ar");
    });
    $('#en').click(function() {
        translate("en");
    });
    $('#gr').click(function() {
        translate("gr");
    });
    $('#hd').click(function() {
        translate("hn");
    });
    $('#ch').click(function() {
        translate("ch");
    });
    $('#ig').click(function() {
        translate("ig");
    });
    $('#yr').click(function() {
        translate("yr");
    });
});