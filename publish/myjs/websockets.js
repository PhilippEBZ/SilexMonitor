var ws = new ReconnectingWebSocket('ws://raspberrypi:8080/');
ws.onopen = function() {
 // document.body.style.backgroundColor = '#cfc';
};
ws.onclose = function() {
 // document.body.style.backgroundColor = null;
};
ws.onmessage = function(event) {
    var data = event.data.split(",");
    var AnIn = parseFloat(data[0]);
    var AnInSen = parseFloat(data[1]);
    var triangle = parseFloat(data[2]);
    var pulse = parseFloat(data[3]);

    readings0.append(new Date().getTime(), AnIn);
    readings1.append(new Date().getTime(), AnInSen);
    readings2.append(new Date().getTime(), triangle);
    readings3.append(new Date().getTime(), pulse);

    horizontalBarChartDataX.datasets[0].data[0] = AnIn;
    horizontalBarChartDataY.datasets[0].data[0] = AnInSen;
    horizontalBarChartDataZ.datasets[0].data[0] = triangle;

    window.myHorizontalBarX.update();
    window.myHorizontalBarY.update();
    window.myHorizontalBarZ.update();

};
