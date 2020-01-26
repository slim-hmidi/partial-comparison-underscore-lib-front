import React, { Component, createRef } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();
  }

  componentDidMount() {
    const {
      data, label1, label2, label3, title, color1, color2, color3,
    } = this.props;
    const labels = data.uPartialTimes
      .sort((a, b) => (a.label < b.label ? -1 : 1)).map((d) => d.label);
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: label1,
          data: data.uPartialTimes.map((d) => Number(d.value)),
          backgroundColor: color1,
          borderColor: color1,
          fill: false,
        },
        {
          label: label2,
          data: data.mPartialTimes.map((d) => Number(d.value)),
          backgroundColor: color2,
          borderColor: color2,
          fill: false,
        },
        {
          label: label3,
          data: data.rPartialTimes.map((d) => Number(d.value)),
          backgroundColor: color3,
          borderColor: color3,
          fill: false,
        },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: title,
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Table size',
            },
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Execution Time (ms)',
            },
          }],
        },
      },
    });
  }

  render() {
    return (<canvas ref={this.canvasRef} />);
  }
}

const Element = PropTypes.shape({
  label: PropTypes.number,
  value: PropTypes.string,
});

LineChart.propTypes = {
  data: PropTypes.shape({
    uPartialTimes: PropTypes.arrayOf(Element),
    mPartialTimes: PropTypes.arrayOf(Element),
    rPartialTimes: PropTypes.arrayOf(Element),
  }).isRequired,
  title: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  label3: PropTypes.string.isRequired,
};

export default LineChart;
