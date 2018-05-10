import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import TimePicker from './TimePicker';
import {
  START_DATE,
  END_DATE,
} from '../constants';

const propTypes = {
  is24HourFormat: PropTypes.bool,
  endTime: PropTypes.object,
  startTime: PropTypes.object,
  onTimeChange: PropTypes.func,
};
class TimeRangePicker extends React.Component {
  render() {
    const {
      is24HourFormat,
      endTime,
      startTime,
      onTimeChange,
      disableMinutes,
    } = this.props;

    return (
      <div>
        <TimePicker
          key="start"
          type={START_DATE}
          time={startTime}
          is24HourFormat={is24HourFormat}
          onTimeChange={this.props.onTimeChange}
          disableMinutes={disableMinutes}
          hourProps={{tabIndex: 1}}
        />
        <TimePicker
          key="end"
          type={END_DATE}
          time={endTime}
          is24HourFormat={is24HourFormat}
          onTimeChange={this.props.onTimeChange}
          disableMinutes={disableMinutes}
          hourProps={{ tabIndex: 2 }}
        />
      </div>
    );
  }
}
TimeRangePicker.propTypes = propTypes;
export default TimeRangePicker;
