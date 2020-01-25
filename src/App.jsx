/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from './actions/chart';
import LineChart from './components/LineChart';
import './App.css';

function App(props) {
  const { fetchRequest, data, loading } = props;
  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);
  return (
    <div className="chart-wrapper">
      {loading ? ('..loading')
        : (
          <LineChart
            title="Performance time"
            color1="red"
            color2="blue"
            label1="underscore partial"
            label2="manual partial"
            data={data}
          />
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { data, loading } = state.chart;
  return { data, loading };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
});

const Element = PropTypes.shape({
  label: PropTypes.number,
  value: PropTypes.string,
});

App.propTypes = {
  data: PropTypes.shape({
    uPartialTimes: PropTypes.arrayOf(Element),
    mPartialTimes: PropTypes.arrayOf(Element),
  }).isRequired,
  fetchRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
