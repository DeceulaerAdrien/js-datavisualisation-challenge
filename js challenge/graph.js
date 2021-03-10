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
data2()
data3()