let xhr = new XMLHttpRequest;
let tab1 = document.querySelector('#table1');
let tab2 = document.querySelector('#table2');
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');
let datatab = [];


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













let data = () => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = JSON.parse(this.response);
            result.forEach(data = (value, key) => {
                datatab.push({ x: value[0], y: parseInt(value[1]) })
            });
        } else if (this.status === 404) {
            console.log('ERROR 404');
        }
    }
    xhr.send();
    setTimeout(data(), 1000)
}

new Chart(ctxChart1, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [{
                x: 1,
                y: 3
            }]
        }]

    },

    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
            }]
        }
    }
})



/* new Chart(ctxChart3, {
    type: 'bar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
}); */