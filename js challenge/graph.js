let xhr = new XMLHttpRequest;
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');

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
            data: [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6, 1067.3, 1072, 1111, 1073.8],
            label: "Belgium",
            borderColor: "#8e5ea5",
            fill: false
        }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Bulgaria",
            borderColor: "#8e5ea2",
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