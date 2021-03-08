    setInterval(function timer() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true)
        xhr.onload = function() {
            if (this.status === 200) {
                let result = (JSON.parse(this.responseText));
                console.log(result);
            }
        }
        xhr.send();
    }, 1000);