Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _DateDisplay = require('./DateDisplay');

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _RightArrow = require('./RightArrow');

var _RightArrow2 = _interopRequireDefault(_RightArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  startDate: _reactMomentProptypes2['default'].momentObj,
  startDateId: _propTypes2['default'].string,
  isStartDateFocused: _propTypes2['default'].bool,
  endDate: _reactMomentProptypes2['default'].momentObj,
  endDateId: _propTypes2['default'].string,
  isEndDateFocused: _propTypes2['default'].bool,
  isFocused: _propTypes2['default'].bool,
  onStartDateFocus: _propTypes2['default'].func,
  onEndDateFocus: _propTypes2['default'].func
};
function DateRangeDisplay(props) {
  var startDate = props.startDate,
      startDateId = props.startDateId,
      isStartDateFocused = props.isStartDateFocused,
      onStartDateFocus = props.onStartDateFocus,
      endDate = props.endDate,
      styles = props.styles,
      endDateId = props.endDateId,
      isEndDateFocused = props.isEndDateFocused,
      onEndDateFocus = props.onEndDateFocus;

  return _react2['default'].createElement(
    'div',
    (0, _reactWithStyles.css)(styles.DateRangeDisplay),
    _react2['default'].createElement(_DateDisplay2['default'], {
      date: startDate,
      dateId: startDateId,
      isFocused: isStartDateFocused,
      setFocus: onStartDateFocus,
      align: 'left'
    }),
    _react2['default'].createElement(
      'div',
      (0, _reactWithStyles.css)(styles.DateRangeDisplay_arrow),
      _react2['default'].createElement(_RightArrow2['default'], (0, _reactWithStyles.css)(styles.DateRangeDisplay_arrow_svg, styles.DateRangeDisplay_arrow_svg__small))
    ),
    _react2['default'].createElement(_DateDisplay2['default'], {
      date: endDate,
      dateId: endDateId,
      isFocused: isEndDateFocused,
      setFocus: onEndDateFocus,
      align: 'right'
    })
  );
}
DateRangeDisplay.prototype = propTypes;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      color = _ref$reactDates.color,
      sizing = _ref$reactDates.sizing;
  return {
    DateRangeDisplay: {
      position: 'relative',
      width: '100%',
      boxContent: 'border-box',
      zIndex: 10,
      height: '72px',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.12)'
    },
    DateRangeDisplay_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '30px',
      height: '30px',
      marginTop: '-5px',
      lineHeight: '30px',
      textAlign: 'center',
      borderRadius: '50%',
      backgroundColor: '#ECECEC',
      position: 'absolute',
      top: 'calc(50% - 15px)',
      left: 'calc(50% - 15px)'
    },
    DateRangeDisplay_arrow_svg: {
      verticalAlign: 'middle',
      marginTop: '-3px',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },

    DateRangeDisplay_arrow_svg__small: {
      height: sizing.arrowWidth_small,
      width: sizing.arrowWidth_small
    }
  };
})(DateRangeDisplay);