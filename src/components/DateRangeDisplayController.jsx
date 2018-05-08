import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';

import { START_DATE, END_DATE, ICON_BEFORE_POSITION, OPEN_DOWN } from '../constants';

import DateRangeDisplay from './DateRangeDisplay';

const propTypes = forbidExtraProps({
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string,
  isStartDateFocused: PropTypes.bool,

  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string,
  isEndDateFocused: PropTypes.bool,

  onFocusChange: PropTypes.func,
  // accessibility
  isFocused: PropTypes.bool,

  // i18n,
});

const defaultProps = {
  startDate: null,
  startDateId: START_DATE,
  isStartDateFocused: false,

  endDate: null,
  endDateId: END_DATE,
  isEndDateFocused: false,

  onFocusChange() { },

  // accessibility
  isFocused: false,
};

export default class DateRangeDisplayController extends React.Component {
  constructor(props) {
    super(props);
    this.onStartDateFocus = this.onStartDateFocus.bind(this);
    this.onEndDateFocus = this.onEndDateFocus.bind(this);
  }


  onEndDateFocus() {
    const {
      startDate,
      onFocusChange,
    } = this.props;
    onFocusChange(END_DATE);
  }

  onStartDateFocus() {
    const { onFocusChange } = this.props;
    onFocusChange(START_DATE);
  }

  render() {
    const {
      startDate,
      startDateId,
      isStartDateFocused,
      endDate,
      endDateId,
      isEndDateFocused,
      isFocused,
    } = this.props;

    return (
      <DateRangeDisplay
        startDate={startDate}
        startDateId={startDateId}
        isStartDateFocused={isStartDateFocused}
        endDate={endDate}
        endDateId={endDateId}
        isEndDateFocused={isEndDateFocused}
        isFocused={isFocused}
        onStartDateFocus={this.onStartDateFocus}
        onEndDateFocus={this.onEndDateFocus}
      />
    );
  }
}

DateRangeDisplayController.propTypes = propTypes;
DateRangeDisplayController.defaultProps = defaultProps;
