import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// destructing the alerts from the props
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

// classifying the props in the Alert
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// maps through the state and pulls the alerts out to be used as the props above
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
