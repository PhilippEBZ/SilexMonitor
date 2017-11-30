var color = Chart.helpers.color;

//Declare Chart Data Bar Charts
var horizontalBarChartDataX = {
    labels: ["Fx"],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.red).alpha(0.9).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            100,
        ]
    },
    ]
    };
var horizontalBarChartDataY = {
    labels: ["Fy"],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.green).alpha(0.9).rgbString(),
        borderColor: window.chartColors.green,
        borderWidth: 1,
        data: [
            200,
        ]
    },
    ]
    };
var horizontalBarChartDataZ = {
    labels: ["Fz"],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.blue).alpha(0.9).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            300,
        ]
    },
    ]
    };

window.onload = function() {

};

var colorNames = Object.keys(window.chartColors);
