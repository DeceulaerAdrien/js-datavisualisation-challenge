let xhr = new XMLHttpRequest;

setInterval(() => {
    xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
    xhr.onload = function () {
        if (this.status === 200) {
            let result = this.responseText;
            console.log(result);
        } else if (this.status === 404) {
            console.log('ERROR 404 RETRY');
        }
    }
    xhr.send();
}, 1000);