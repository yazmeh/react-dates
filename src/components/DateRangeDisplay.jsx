import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import DateDisplay from './DateDisplay';
import RightArrow from './RightArrow';

const propTypes = {
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string,
  isStartDateFocused: PropTypes.bool,
  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string,
  isEndDateFocused: PropTypes.bool,
  isFocused: PropTypes.bool,
  onStartDateFocus: PropTypes.func,
  onEndDateFocus: PropTypes.func,
};
function DateRangeDisplay(props) {
  const {
    startDate,
    startDateId,
    isStartDateFocused,
    onStartDateFocus,
    endDate,
    styles,
    endDateId,
    isEndDateFocused,
    onEndDateFocus,
  } = props;
  return (
    <div
      {...css(styles.DateRangeDisplay)}
    >
      <DateDisplay
        date={startDate}
        dateId={startDateId}
        isFocused={isStartDateFocused}
        setFocus={onStartDateFocus}
        align="left"
      />
      <div
        {...css(styles.DateRangeDisplay_arrow)}
      >
        <RightArrow {...css(
                    styles.DateRangeDisplay_arrow_svg,
                    styles.DateRangeDisplay_arrow_svg__small,
                )}
        />
      </div>
      <DateDisplay
        date={endDate}
        dateId={endDateId}
        isFocused={isEndDateFocused}
        setFocus={onEndDateFocus}
        align="right"
      />
    </div>
  );
}
DateRangeDisplay.prototype = propTypes;
export default withStyles(({ reactDates: { color, sizing } }) => ({
  DateRangeDisplay: {
    position: 'relative',
    width: '100%',
    boxContent: 'border-box',
    height: '72px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.12)',
  },
  DateRangeDisplay_arrow: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '30px',
    height: '30px',
    marginTop:'-5px',
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: '50%',
    marginTop:'-5px',   
    backgroundColor: '#ECECEC',
    position: 'absolute',
    top: 'calc(50% - 15px)',
    left: 'calc(50% - 15px)',
  },
  DateRangeDisplay_arrow_svg: {
    verticalAlign: 'middle',
    fill: color.text,
    height: sizing.arrowWidth,
    width: sizing.arrowWidth,
  },

  DateRangeDisplay_arrow_svg__small: {
    height: sizing.arrowWidth_small,
    width: sizing.arrowWidth_small,
  },
}))(DateRangeDisplay);
