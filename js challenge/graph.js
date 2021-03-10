let xhr = new XMLHttpRequest;
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');
const colBlue = ["#0000FF", "#79F8F8", "#007FFF", "#1E7FCB", "#74D0F1", "#A9EAFE", "#3A8EBA", "#686F8C", "#5472AE", "#0095B6", "#26C4EC", "#357AB7", "#8EA2C6", "#17657D", "#8EA2C6", "#77B5FE", "#22427C", "#24445C", "#318CE7", "#003366", "#24445C", "#1560BD", "#00CCCB", "#2C75FF", "#56739A", "#7F8FA6", "#6050DC", "#03224C", "#0F056B", "#2B009A", "#2B009A", "#0ABAB5", "#26C4EC", "#048B9A", "#00FFFF", "#791CF8", "#2E006C", "#002FA7", "#21177D", "#26619C", "#9683EC", "#56739A", "#CCCCFF", "#25FDE9", ];


divA.insertBefore(document.createElement('div'), divA.firstChild);
divA.firstChild.setAttribute("id", "canvas1");
document.getElementById('canvas1').innerHTML = `<canvas width = "400" height ="400" id = "chart1"></canvas>`;
let ctxChar1 = document.querySelector('#chart1').getContext('2d');


divB.insertBefore(document.createElement('div'), divB.childNodes[10]);
divB.childNodes[10].setAttribute("id", "canvas2");
document.getElementById('canvas2').innerHTML = `<canvas width = "400" height ="400" id = "chart2"></canvas>`;
let ctxChar2 = document.querySelector('#chart2').getContext('2d');


divB.insertBefore(document.createElement('div'), divB.childNodes[38]);
divB.childNodes[38].setAttribute("id", "canvas3");
document.getElementById('canvas3').innerHTML = `<canvas width = "400" height ="400" id ="chart3"></canvas>`;
let ctxChar3 = document.querySelector('#chart3').getContext('2d');



setInterval(() => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function() {
        if (this.status === 200) {
            result = JSON.parse(this.response);
            console.log(result[0])

        } else if (this.status === 404) {
            console.log('ERROR 404');
        }
    }
    xhr.send();

}, 1000);

let scatterChart = new Chart(ctxChar1, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

let scatterChart2 = new Chart(ctxChar2, {
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
            data: [106, 103, 99, 102, 103, ],
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
            data: [4113, 3947, 3825, 3775, 3725, 3589, 3558, 3521, ],
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
        }, ]
    },
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        }
    }

});

let scatterChart3 = new Chart(ctxChar3, {
    type: 'bar',
    data: {
        labels: ["Latvia", "Lithuania", "Estionia", "Czech Republic", "Poland", "Slovakia", "Hungray", "England and Wales(UK)", "Scotland(UK)", "Spain", "Romania", "Malta", "Bulgaria", "Luxembourg", "Portugal", "Croatia", "Italy", "Greece", "France", "Austria", "Belgium", "Northern Ireland (UK)", "The Nederlands", "Germany", "Ireland", "Cyprus", "Danemark", "Sweden", "Slovenia", "Finland"],
        datasets: [{
                label: '2007-09',
                data: ["312", "247", "266", "198", "228", "159", "148", "151", "150", "158", "132", "126", "132", "139", "106", "108", "98", "105", "99", "101", "93", "84", "90", "89", "76", "84", "66", "74", "66", "63"],
                backgroundColor: "#2873e6",
            },
            {
                label: '2010-12',
                data: ["312", "307", "253", "217", "214", "197", "169", "154", "154", "152", "150", "143", "132", "126", "120", "116", "113", "112", "106", "104", "101", "91", "84", "84", "80", "78", "72", "71", "65", "60"],
                backgroundColor: "#73a2eb",
            }
        ]

    },

    options: {
        legend: { display: true },
    }

});