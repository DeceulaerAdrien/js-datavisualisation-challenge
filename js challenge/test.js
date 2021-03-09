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
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        labels: ['Coord 1', 'Coord 2', 'Coord 3', 'Coord 4', 'Coord 5', 'Coord 6'],
        datasets: [{
            label: '# of Votes',
            data: [{ x: 5, y: 2 }, { x: 8, y: 4 }, { x: 1, y: 9 }, { x: 4, y: 7 }, { x: 3, y: 9 }, { x: 4, y: 9 }, ],
            borderColor: 'rgba(0,0,255,1)',
            backgroundColor: 'rgba(0,0,0,0)',
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        }
    }
});