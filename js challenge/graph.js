    setInterval(function timer() {
        let xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://canvasjs.com/services/data/datapoints.php', true)
        xhr.onload = function() {
            if (this.status === 200) {
                let result = (JSON.parse(this.responseText));
                console.log(result);

            }
        }
        xhr.send();
    }, 1000);

    var ctx = document.getElementById('myChart');
    var chart = new Chart(ctx, {
        type: 'line',
        data: [{
            x: 0,
            y: 8
        }, {
            x: 1,
            y: 6
        }, {
            x: 2,
            y: 6
        }, {
            x: 3,
            y: 11
        }, {
            x: 4,
            y: 14
        }, {
            x: 5,
            y: 12
        }, {
            x: 6,
            y: 11
        }, {
            x: 7,
            y: 16
        }, {
            x: 8,
            y: 20
        }, {
            x: 9,
            y: 20
        }]
    }
    });