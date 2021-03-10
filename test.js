
const data2 = () => {
    const tab = [];
    const country = [];
    const countryData = []
    let a = 0;

    const data = document.querySelectorAll('#table1 td').forEach(element => {
        tab.push(element.textContent)
    })

    for (i = 2; i < 37; i++) {
        country.push(tab.slice(0 + a, 12 + a))
        a += 12
    };

    let scatterChart2 = new Chart(ctxChart2, {
        type: 'line',
        data: {
            labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
            datasets: [{
                data: `${country[0].slice(1, 12)}`,
                label: "Italy",
                borderColor: "#0F9DE8",
                fill: false
            },]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }

    });
    console.log(country[0].slice(1, 12))
}
data2()