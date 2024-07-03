const ctx = document.getElementById('myChart');

        const bairros = ['Glucostark', 'Centro', 'Cascata', 'Zwirtes', 'Celia', 'Passo de Estrela', 'Haenssgen', 'Rosa']
        const lotes = [289, 546, 167,  159, 272, 524, 11, 324];
        const lotesAtingidos = [202, 379, 33, 159, 113, 318, 4, 86];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: bairros,
            datasets: [
                {
                label: 'Lotes',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: lotes,
                },
                {
                label: 'Lotes Atingidos pela Enchente',
                backgroundColor: '#373630',
                borderColor: '#373630',
                borderWidth: 1,
                data: lotesAtingidos,
                }
            ]
            },
            options: {
           
            indexAxis: 'y',
            responsive: true,
            scales: {
                y: {
                beginAtZero: true
                }
            },
            plugins: {
                legend: {
                display: false  // Aqui é onde você desativa a exibição da legenda
            }
            }
            }
        });