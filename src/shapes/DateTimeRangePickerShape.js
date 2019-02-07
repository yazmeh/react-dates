import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';;
import DateRangePickerShape from "./DateRangePickerShape";

export default {
  ...DateRangePickerShape,
  hideTime:PropTypes.bool,
  disableMinutes:PropTypes.bool,
  is24HourFormat: PropTypes.bool,
  selected: PropTypes.shape({
    startDate:momentPropTypes.momentObj,
    endDate:momentPropTypes.momentObj,
  }),
  inputDateTimeElement:PropTypes.func,
  onApply:PropTypes.func,
  onCancel:PropTypes.func,
};
