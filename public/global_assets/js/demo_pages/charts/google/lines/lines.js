/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - lines
 *
 *  Google Visualization line chart demonstration
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var GoogleLineBasic = (function() {
  //
  // Setup module components
  //
  var array_add = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540],
  ];
  // Line chart
  var _googleLineBasic = function() {
    if (typeof google == 'undefined') {
      console.warn('Warning - Google Charts library is not loaded.');
      return;
    }

    // Initialize chart
    google.charts.load('current', {
      callback: function() {
        // Draw chart
        drawLineChart();

        // Resize on sidebar width change
        $(document).on('click', '.sidebar-control', drawLineChart);

        // Resize on window resize
        var resizeLineBasic;
        $(window).on('resize', function() {
          clearTimeout(resizeLineBasic);
          resizeLineBasic = setTimeout(function() {
            drawLineChart();
          }, 200);
        });
      },
      packages: ['corechart'],
    });

    // Chart settings
    function drawLineChart() {
      // Define charts element
      var line_chart_element = document.getElementById('google-line');
      console.log('array_add', array_add);
      // Data
      var data = google.visualization.arrayToDataTable(array_add);

      // Options
      var options = {
        fontName: 'Roboto',
        height: 400,
        curveType: 'function',
        fontSize: 12,
        chartArea: {
          left: '5%',
          width: '94%',
          height: 350,
        },
        pointSize: 4,
        tooltip: {
          textStyle: {
            fontName: 'Roboto',
            fontSize: 13,
          },
        },
        vAxis: {
          title: 'Sales and Expenses',
          titleTextStyle: {
            fontSize: 13,
            italic: false,
          },
          gridlines: {
            color: '#e5e5e5',
            count: 10,
          },
          minValue: 0,
        },
        legend: {
          position: 'top',
          alignment: 'center',
          textStyle: {
            fontSize: 12,
          },
        },
      };

      // Draw chart
      var line_chart = new google.visualization.LineChart(line_chart_element);
      line_chart.draw(data, options);
    }
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function() {
      _googleLineBasic();
    },
    setArray: function(list) {
      array_add = list;
    },
  };
})();

// Initialize module
// ------------------------------
//GoogleLineBasic.setArray = [2, 3, 4];

GoogleLineBasic.setArray = [
  ['Year', 'Sales', 'Expenses'],
  ['2006', 1000, 400],
  ['2007', 1170, 460],
  ['2008', 660, 1120],
  ['2009', 1030, 540],
];

GoogleLineBasic.init();

console.log(' current array add prev ', GoogleLineBasic.array_add);
console.log(' current array add ', GoogleLineBasic.array_add);
