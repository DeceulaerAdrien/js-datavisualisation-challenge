let xhr = new XMLHttpRequest;
let result;
let canvas1 = document.createElement('canvas')
let canvas2 = document.createElement('canvas')
let canvas3 = document.createElement('canvas')
let divA = document.querySelector('#bodyContent');
let divB = document.querySelector('#mw-content-text');

const canvasA = () => {
    divA.insertBefore(canvas1, divA.firstChild);
    divA.firstChild.setAttribute("id", "canvas1");
    document.getElementById('canvas1').setAttribute("width", "400");
    document.getElementById('canvas1').setAttribute("height", "400");
}

const canvasB = () => {
    divB.insertBefore(canvas2, divB.childNodes[10]);
    divB.childNodes[10].setAttribute("id", "canvas2");
    document.getElementById('canvas2').setAttribute("width", "400");
    document.getElementById('canvas2').setAttribute("height", "400");
}
const canvasC = () => {
    divB.insertBefore(canvas3, divB.childNodes[38]);
    divB.childNodes[38].setAttribute("id", "canvas3");
    document.getElementById('canvas3').setAttribute("width", "400");
    document.getElementById('canvas3').setAttribute("height", "400");
}

setInterval(() => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function () {
        if (this.status === 200) {
            result = this.responseText;
            console.log(result);
        } else if (this.status === 404) {
            console.log('ERROR 404');
        }
    }
    xhr.send();
}, 1000);

canvasA();
canvasB();
canvasC();