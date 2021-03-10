//variable init
let xhr = new XMLHttpRequest;
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');
let datatab = [];
let chart = [];
const labels = [];


//create all canvas on HTML
divA.insertBefore(document.createElement('div'), divA.firstChild);
divA.firstChild.setAttribute("id", "canvas1");
document.getElementById('canvas1').innerHTML = `<canvas width = "400" height ="400" id = "chart1"></canvas>`;
let ctxChart1 = document.querySelector('#chart1').getContext('2d');



divB.insertBefore(document.createElement('div'), divB.childNodes[10]);
divB.childNodes[10].setAttribute("id", "canvas2");
document.getElementById('canvas2').innerHTML = `<canvas width = "400" height ="400" id = "chart2"></canvas>`;
let ctxChart2 = document.querySelector('#chart2').getContext('2d');



divB.insertBefore(document.createElement('div'), divB.childNodes[38]);
divB.childNodes[38].setAttribute("id", "canvas3");
document.getElementById('canvas3').innerHTML = `<canvas width = "400" height ="400" id ="chart3"></canvas>`;
let ctxChart3 = document.querySelector('#chart3').getContext('2d');



//request datapoint and canvas 1
const data = () => {
    const labels = [];


    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json', true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = JSON.parse(this.response);
            result.forEach(element => {
                labels.push(element[0])
                datatab.push({ y: parseInt(element[1]) })
            });
        } else if (this.status === 404) {
            console.log('ERROR 404');
        }
        chart = new Chart(ctxChart1, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: ['Crime statistics'],
                    data: datatab,
                    backgroundColor: 'rgba(0,0,0,0)'
                }]
            },
            options: {
                animation: {
                    duration: 0
                },
                maintainAspectRatio: false,
                responsive: false
            }
        });
    }
    xhr.send();
    chart1Update();
}

//Update Canvas1
const chart1Update = () => {
    xhr.open('POST', "https://canvasjs.com/services/data/datapoints.php?xstart=" + (datatab.length + 1) + "&ystart=" + (datatab[datatab.length - 1]) + "&length=1&type=json", true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = JSON.parse(this.response);
            result.forEach(element => {
                labels.push(element[0])
                datatab.push({ y: parseInt(element[1]) })
            });
        } else if (this.status === 404) {
            console.log('ERROR 404');
        };
        chart = new Chart(ctxChart1, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: ['Crime statistics'],
                    data: datatab,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: '#2873e6'

                }]
            },
            options: {
                animation: {
                    duration: 0
                },
                maintainAspectRatio: true,
                responsive: true
            }
        });
    }


    setTimeout(() => {
        chart1Update()
    }, 1000)
    xhr.send();

};

//canvas 2
let Chart2 = new Chart(ctxChart2, {
    type: 'line',
    data: {
        labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        datasets: [{
            data: [1012, 1007, 1013, 999, 1022, 1034, 1043, 1067, 1072, 1111, 1073],
            label: "Belgium",
            borderColor: "#0000FF",
            fill: false
        }, {
            data: [146, 143, 142, 137, 136, 134, 126, 138, 147, 128, 120],
            label: "Bulgaria",
            borderColor: "#79F8F8",
            fill: false
        }, {
            data: [372, 357, 351, 344, 336, 357, 343, 332, 313, 317, 304],
            label: "Czech Republic",
            borderColor: "#007FFF",
            fill: false
        }, {
            data: [491, 486, 474, 432, 425, 445, 477, 491, 471, 466, 440],
            label: "Denmark",
            borderColor: "#1E7FCB",
            fill: false
        }, {
            data: [6507, 6572, 6633, 6391, 6304, 6287, 6114, 6054, 5933, 5990, 5997],
            label: "Germany",
            borderColor: "#74D0F1",
            fill: false
        }, {
            data: [53, 53, 53, 52, 51, 50, 51, 48, 48, 42, 40],
            label: "Estonia(1)",
            borderColor: "#A9EAFE",
            fill: false
        }, {
            data: [106, 103, 99, 102, 103,],
            label: "Ireland",
            borderColor: "#3A8EBA",
            fill: false
        }, {
            data: [441, 441, 405, 456, 463, 423, 417, 386, 334, 194, 194],
            label: "Greece(2)",
            borderColor: "#686F8C",
            fill: false
        }, {
            data: [2183, 2144, 2141, 2230, 2267, 2309, 2369, 2339, 2297, 2285, 2268],
            label: "Spain(3)",
            borderColor: "#5472AE",
            fill: false
        }, {
            data: [4113, 3947, 3825, 3775, 3725, 3589, 3558, 3521,],
            label: "France",
            borderColor: "#0095B6",
            fill: false
        }, {
            data: [77, 80, 85, 79, 81, 75, 74, 73, 73, 75, 72],
            label: "Croatia",
            borderColor: "#26C4EC",
            fill: false
        }, {
            data: [2231, 2456, 2417, 2579, 2771, 2933, 2709, 2629, 2621, 2763, 2818],
            label: "Italy(4)",
            borderColor: "#0F9DE8",
            fill: false
        }, {
            data: [4, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8],
            label: "Cyprus",
            borderColor: "#357AB7",
            fill: false
        }, {
            data: [49, 51, 62, 51, 62, 55, 57, 56, 51, 51, 49],
            label: "Latvia(5)",
            borderColor: "#8EA2C6",
            fill: false
        }, {
            data: [72, 79, 84, 82, 75, 68, 72, 76, 70, 72, 75],
            label: "Lithuania",
            borderColor: "#77B5FE",
            fill: false
        }, {
            data: [26, 26, 26, 25, 25, 28, 28, 32, 30, 35, 37],
            label: "Luxembourg",
            borderColor: "#22427C",
            fill: false
        }, {
            data: [420, 413, 418, 436, 425, 426, 408, 394, 447, 451, 472],
            label: "Hungray",
            borderColor: "#24445C",
            fill: false
        }, {
            data: [17, 17, 18, 18, 16, 15, 13, 12, 13, 14, 15],
            label: "Malta",
            borderColor: "#318CE7",
            fill: false
        }, {
            data: [1401, 1369, 1319, 1348, 1311, 1303, 1277, 1254, 1194, 1194, 1139],
            label: "The Netherlands(6)",
            borderColor: "#003366",
            fill: false
        }, {
            data: [591, 643, 346, 605, 589, 594, 572, 591, 535, 540, 548],
            label: "Austria",
            borderColor: "#24445C",
            fill: false
        }, {
            data: [1404, 1466, 1461, 1380, 1387, 1153, 1082, 1129, 1151, 1159, 1119],
            label: "Poland",
            borderColor: "#1560BD",
            fill: false
        }, {
            data: [391, 417, 416, 392, 399, 398, 430, 426, 422, 413, 403],
            label: "Portugal",
            borderColor: "#00CCCB",
            fill: false
        }, {
            data: [312, 276, 231, 208, 232, 281, 289, 299, 292, 258, 308],
            label: "Romania",
            borderColor: "#1034A6",
            fill: false
        }, {
            data: [77, 76, 86, 84, 90, 88, 81, 87, 89, 88, 91],
            label: "Slovenia",
            borderColor: "#2C75FF",
            fill: false
        }, {
            data: [107, 111, 131, 123, 115, 110, 104, 104, 95, 92, 90],
            label: "Slovakia",
            borderColor: "#56739A",
            fill: false
        }, {
            data: [435, 443, 445, 432, 416, 435, 440, 441, 431, 458, 425],
            label: "Finland(7)",
            borderColor: "#6050DC",
            fill: false
        }, {
            data: [1234, 1255, 1248, 1241, 1225, 1306, 1377, 1405, 1370, 1416, 1408],
            label: "Sweden",
            borderColor: "#03224C",
            fill: false
        }, {
            data: [19, 17, 16, 12, 13, 13, 14, 16, 14, 13, 11],
            label: "Iceland(8)",
            borderColor: "#73C2FB",
            fill: false
        }, {
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            label: "Liechtenstein",
            borderColor: "#24445C",
            fill: false
        }, {
            data: [319, 303, 287, 275, 277, 271, 264, 277, 270, 264, 273],
            label: "Norway",
            borderColor: "#0F056B",
            fill: false
        }, {
            data: [356, 379, 389, 352, 335, 326, 323, 676, 656, 693, 750],
            label: "Switzermand(7)",
            borderColor: "#2B009A",
            fill: false
        }, {
            data: [8, 8, 8, 9, 9, 9, 8, 8, 7, 6, 5],
            label: "Montenegro",
            borderColor: "#067790",
            fill: false
        }, {
            data: [18, 22, 22, 22, 22, 26, 28, 27, 28, 29, 29],
            label: "Macedonia",
            borderColor: "#1D4851",
            fill: false
        }, {
            data: [95, 90, 99, 102, 99, 104, 106, 102, 101, 99, 96],
            label: "Serbia",
            borderColor: "#008080",
            fill: false
        }, {
            data: [438, 472, 507, 667, 975, 970, 1012, 1288, 1521, 1652, 1904],
            label: "Turkey(9)",
            borderColor: "#791CF8",
            fill: false
        },]
    },
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        }
    }

});
//canvas 3
const data3 = () => {
    const tab = [];
    const country = []
    const labelCountry = []
    const data2007 = []
    const data2010 = []
    let a = 0

    const data = document.querySelectorAll('#table2 td').forEach(element => {
        tab.push(element.textContent)
    });

    for (i = 3; i < 32; i++) {
        country.push(tab.slice(0 + a, 3 + a))
        a += 3

    };

    country.forEach(element => {

        labelCountry.push(element[0])
        data2007.push(element[1])
        data2010.push(element[2])

    })

    let scatterChart3 = new Chart(ctxChart3, {
        type: 'bar',
        data: {
            labels: labelCountry,
            datasets: [{
                label: '2007-09',
                data: data2007,
                backgroundColor: "#2873e6",
            },
            {
                label: '2010-12',
                data: data2010,
                backgroundColor: "#73a2eb",
            }
            ]

        },

        options: {
            legend: { display: true },
        }

    });
};

data()
data3()
