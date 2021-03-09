let xhr = new XMLHttpRequest;
let result;
let canvas = document.createElement('canvas')
let divC = document.querySelector('#bodyContent')

divC.insertBefore(canvas, divC.firstChild)
document.getElementsByTagName('canvas')[0].setAttribute("id", "canvas1");
document.getElementById('canvas1').setAttribute("width", "400");
document.getElementById('canvas1').setAttribute("height", "400");

setInterval(() => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = this.responseText;
            console.log(result);
        } else if (this.status === 404) {
            console.log('ERROR 404 RETRY');
        }
    }
    xhr.send();
}, 1000);