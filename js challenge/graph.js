let xhr = new XMLHttpRequest;
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');
let ctxC1 = document.querySelector('#chart1').getContext('2d');
let ctxC2 = document.querySelector('#chart2').getContext('2d');
let ctxC3 = document.querySelector('#chart3').getContext('2d');

const canvas = () => {
    divA.insertBefore(document.createElement('div'), divA.firstChild);
    divA.firstChild.setAttribute("id", "canvas1");
    document.getElementById('canvas1').innerHTML = `<canvas width = "400" height ="400" id = "chart1"></canvas>`;

    divB.insertBefore(document.createElement('div'), divB.childNodes[10]);
    divB.childNodes[10].setAttribute("id", "canvas2");
    document.getElementById('canvas2').innerHTML = `<canvas width = "400" height ="400" id = "chart2"></canvas>`;

    divB.insertBefore(document.createElement('div'), divB.childNodes[38]);
    divB.childNodes[38].setAttribute("id", "canvas3");
    document.getElementById('canvas3').innerHTML = `<canvas width = "400" height ="400" id ="chart3"></canvas>`;

}

setInterval(() => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = JSON.parse(this.response);
            console.log(result[0])
        } else if (this.status === 404) {
            console.log('ERROR 404');
        }
    }
    xhr.send();

}, 1000);

canvas();
/*var scatterChart = new Chart(ctx, {
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
});*/