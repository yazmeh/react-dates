import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import openDirectionShape from '../shapes/OpenDirectionShape';

import { DateRangePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';

import SingleDateRange from './SingleDateRange';


import toMomentObject from '../utils/toMomentObject';
import toLocalizedDateString from '../utils/toLocalizedDateString';


import { START_DATE, END_DATE, ICON_BEFORE_POSITION, OPEN_DOWN } from '../constants';

const propTypes = forbidExtraProps({
  startDate: momentPropTypes.momentObj,
  children:PropTypes.node,
  startDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  isStartDateFocused: PropTypes.bool,
  showDefaultInputIcon:PropTypes.bool,
  inputDateTimeElement:PropTypes.func,
  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  isEndDateFocused: PropTypes.bool,

  rangeSeparator: PropTypes.string,
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  onFocusChange: PropTypes.func,

  // accessibility
  isFocused: PropTypes.bool,
  small: PropTypes.bool,
  // i18n

  isRTL: PropTypes.bool,
});

const defaultProps = {
  startDate: null,
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,

  endDate: null,
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,

  rangeSeparator: ' - ',
  displayFormat: () => moment.localeData().longDateFormat('L'),

  onFocusChange() { },

  // accessibility
  isFocused: false,
  small: false,
  isRTL: false,
};

export default class SingleDateRangeController extends React.Component {
  constructor(props) {
    super(props);
    this.onStartDateFocus = this.onStartDateFocus.bind(this);
  }
  onStartDateFocus() {
    const { isStartDateFocused, isEndDateFocused, onFocusChange } = this.props;
    if (isStartDateFocused || isEndDateFocused) {
      onFocusChange(null);
    } else {
      onFocusChange(START_DATE);
    }
  }

  getDisplayFormat() {
    const { displayFormat } = this.props;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  }

  getDateString(date) {
    const displayFormat = this.getDisplayFormat();
    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }
    return toLocalizedDateString(date);
  }

  render() {
    const {
      startDate,
      startDateId,
      startDatePlaceholderText,
      isStartDateFocused,
      rangeSeparator,
      endDate,
      showDefaultInputIcon,
      endDateId,
      inputDateTimeElement,
      endDatePlaceholderText,
      isEndDateFocused,
      isRTL,
      children,
    } = this.props;

    const startDateString = this.getDateString(startDate);
    const endDateString = this.getDateString(endDate);

    return (
      <React.Fragment>
        <SingleDateRange
          inputDateTimeElement={inputDateTimeElement}
          dateValues={{startDate,endDate}}
          startDate={startDateString}
          startDateId={startDateId}
          startDatePlaceholderText={startDatePlaceholderText}
          isStartDateFocused={isStartDateFocused}
          rangeSeparator={rangeSeparator}
          endDate={endDateString}
          endDateId={endDateId}
          showDefaultInputIcon={showDefaultInputIcon}
          endDatePlaceholderText={endDatePlaceholderText}
          isEndDateFocused={isEndDateFocused}
          onStartDateFocus={this.onStartDateFocus}
          isRTL={isRTL}
        />
        {children}
      </React.Fragment>
    );
  }
}

SingleDateRangeController.propTypes = propTypes;
SingleDateRangeController.defaultProps = defaultProps;
