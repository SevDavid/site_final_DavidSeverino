google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {

    var data = google.visualization.arrayToDataTable([
      ['I', 'Indice Nutricional',],
      ['Proteinas', 35],
      ['Hidratos de Carbono', 43],
      ['Gorduras', 34],
      ['Sal', 2.7],
   
    ]);

    var options = {
      title: 'Indice Nutricional',
      chartArea: {width: '50%'},
      hAxis: {
        title: 'g',
        minValue: 0
      },
      vAxis: {
        title: 'Indicadores Nutricionais'
      }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }