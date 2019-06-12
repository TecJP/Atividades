// var Chart = require('chart.js')

var ctx = document.getElementById('myChart'). getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Atividades Realizadas',
      data: [1.5, 3, 2, 4.2, 2.9, 1.2],
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 4,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    }, 
    legend: {
      display: false,
    }
  }
});