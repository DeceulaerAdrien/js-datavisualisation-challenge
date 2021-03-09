let xhr = new XMLHttpRequest;
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');

const canvas = () => {
    divA.insertBefore(document.createElement('div'), divA.firstChild);
    divA.firstChild.setAttribute("id", "canvas1");
    document.getElementById('canvas1').innerHTML = `<canvas width = "400" height ="400"></canvas>`;

    divB.insertBefore(document.createElement('div'), divB.childNodes[10]);
    divB.childNodes[10].setAttribute("id", "canvas2");
    document.getElementById('canvas2').innerHTML = `<canvas width = "400" height ="400"></canvas>`;

    divB.insertBefore(document.createElement('div'), divB.childNodes[38]);
    divB.childNodes[38].setAttribute("id", "canvas3");
    document.getElementById('canvas3').innerHTML = `<canvas width = "400" height ="400"></canvas>`;

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
