import { parseOptions } from "@/components/Charts/optionHelpers";
import Chart from 'chart.js'

export const Charts = {
  mode: 'light',
  fonts: {
    base: 'Open Sans'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#5e72e4',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent',
  }
};

function chartOptions() {
  let { colors, mode, fonts } = Charts;

  let options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: (mode === 'dark') ? colors.gray[700] : colors.gray[600],
        defaultFontColor: (mode === 'dark') ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['info']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['info'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['warning']
          },
          arc: {
            backgroundColor: colors.theme['info'],
            borderColor: (mode == 'dark') ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false,
        }
      },
      pie: {
        tooltips: {
          mode: 'point'
        }
      },
      doughnut: {
        tooltips: {
          mode: 'point'
        },
        cutoutPercentage: 83,
        legendCallback: function (chart) {
          let data = chart.data;
          let content = '';

          data.labels.forEach(function (label, index) {
            let bgColor = data.datasets[0].backgroundColor[index];

            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });

          return content;
        }
      }
    }
  };

  Chart.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: (mode === 'dark') ? colors.gray[900] : colors.gray[200],
      drawBorder: false,
      drawTicks: true,
      zeroLineWidth: 1,
      zeroLineColor: (mode === 'dark') ? colors.gray[900] : colors.gray[200],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value
        }
      }
    }
  });

  Chart.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1,
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });

  return options;
};

let initialized = false

export function initGlobalOptions() {
  if (initialized) {
    return
  }
  parseOptions(Chart, chartOptions());
  initialized = true
}

export let blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.white,
        zeroLineColor: Charts.colors.white
      }
    }]
  }
};
