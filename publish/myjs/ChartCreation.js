var readings0 = new TimeSeries();
var readings1 = new TimeSeries();
var readings2 = new TimeSeries();
var readings3 = new TimeSeries();

function createTimeline() {
  var chartSC = new SmoothieChart({
      interpolation:'bezier',
  millisPerPixel:15,
  maxValueScale:1.09,
  minValueScale:1.14,
  grid:{fillStyle:'#ffffff',strokeStyle:'rgba(119,119,119,0.25)',
  sharpLines:true,
  millisPerLine:4000,
  verticalSections:8,
  borderVisible:true},
  labels:{fillStyle:'#000000',fontSize:14,precision:0},
  limitFPS:20,maxValue:1000,minValue:0


    });


    chartSC.addTimeSeries(readings0, { strokeStyle: 'rgba(0, 255, 0, 0.6)', fillStyle: 'rgba(0, 0, 0, 0.0)',lineWidth: 2 });
    chartSC.addTimeSeries(readings1, { strokeStyle: 'rgba(0, 0, 255, 0.2)', fillStyle: 'rgba(0, 0, 0, 0.0)',lineWidth: 2 });
    chartSC.addTimeSeries(readings2, { strokeStyle: 'rgba(255, 0, 0, 0.6)', fillStyle: 'rgba(0, 0, 0, 0.0)',lineWidth: 2 });
    chartSC.addTimeSeries(readings3, { strokeStyle: 'rgba(255, 0, 255, 0.2)', fillStyle: 'rgba(0, 0, 0, 0.0)',lineWidth: 2 });

    chartSC.streamTo(document.getElementById("chartSC"), 300);


                //Define Style of Bar Graphs
                    var ctxX = document.getElementById("canvasX").getContext("2d");
                    window.myHorizontalBarX = new Chart(ctxX, {
                        type: 'horizontalBar',
                        data: horizontalBarChartDataX,
                        options: {
                            animation : false,
                            scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero:true
                                            }
                                        }],
                                        xAxes: [{
                                            ticks: {
                                                beginAtZero:true,
                                                min: 0,
                                                max:1000
                                            }
                                        }]
                            },
                            elements: {
                                rectangle: {
                                    borderWidth: 2,
                                }
                            },
                            responsive: true,
                            legend: {
                                display: false,
                                position: 'right',
                            },
                            title: {
                                display: false,
                                text: 'Chart.js Horizontal Bar Chart'
                            }
                        }
                    });
                    var ctxY = document.getElementById("canvasY").getContext("2d");
                    window.myHorizontalBarY = new Chart(ctxY, {
                        type: 'horizontalBar',
                        data: horizontalBarChartDataY,
                        options: {
                            animation : false,
                            scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero:true
                                            }
                                        }],
                                        xAxes: [{
                                            ticks: {
                                                beginAtZero:true,
                                                min: 0,
                                                max:2000
                                            }
                                        }]
                            },
                            elements: {
                                rectangle: {
                                    borderWidth: 2,
                                }
                            },
                            responsive: true,
                            legend: {
                                display: false,
                                position: 'right',
                            },
                            title: {
                                display: false,
                                text: 'Chart.js Horizontal Bar Chart'
                            }
                        }
                    });
                    var ctxZ = document.getElementById("canvasZ").getContext("2d");
                    window.myHorizontalBarZ = new Chart(ctxZ, {
                        type: 'horizontalBar',
                        data: horizontalBarChartDataZ,
                        options: {
                            animation : false,
                            scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero:true
                                            }
                                        }],
                                        xAxes: [{
                                            ticks: {
                                                beginAtZero:true,
                                                min: 0,
                                                max:1000
                                            }
                                        }]
                            },
                            elements: {
                                rectangle: {
                                    borderWidth: 2,
                                }
                            },
                            responsive: true,
                            legend: {
                                display: false,
                                position: 'right',
                            },
                            title: {
                                display: false,
                                text: 'Chart.js Horizontal Bar Chart'
                            }
                        }
                    });

  }
