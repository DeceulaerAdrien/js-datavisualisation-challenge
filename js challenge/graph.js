let xhr = new XMLHttpRequest;
let result;
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