$(document).ready(function() {

    new Chartist.Bar('.ct-chart', {
        labels: ["AS3", "C#", "Java", "HTML5", "Python", "Javascript"],
        series: [
            [7, 6, 6, 8, 5, 8]
        ]
    }, {
        stackBars: false,


        //distributeSeries: true,

        axisY: {
            labelInterpolationFnc: function(value) {
                return (value);
            }

        }
    }).on('draw', function(data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });

    new Chartist.Bar('.ct-chart2', {
        labels: ["Flash", "Dreamweaver", "Fireworks", "Photoshop", "Illustrator", ],
        series: [
            [6.5, 8, 6, 7, 8, ]
        ]
    }, {
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 100,
            labelInterpolationFnc: function(value) {
                return (value);
            }
        }
    }).on('draw', function(data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });

});
