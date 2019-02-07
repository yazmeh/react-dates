"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _DateDisplay = _interopRequireDefault(require("./DateDisplay"));

var _RightArrow = _interopRequireDefault(require("./RightArrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  startDate: _reactMomentProptypes["default"].momentObj,
  startDateId: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  endDate: _reactMomentProptypes["default"].momentObj,
  endDateId: _propTypes["default"].string,
  isEndDateFocused: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  onStartDateFocus: _propTypes["default"].func,
  onEndDateFocus: _propTypes["default"].func
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
  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateRangeDisplay), _react["default"].createElement(_DateDisplay["default"], {
    date: startDate,
    dateId: startDateId,
    isFocused: isStartDateFocused,
    setFocus: onStartDateFocus,
    align: "left"
  }), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateRangeDisplay_arrow), _react["default"].createElement(_RightArrow["default"], (0, _reactWithStyles.css)(styles.DateRangeDisplay_arrow_svg, styles.DateRangeDisplay_arrow_svg__small))), _react["default"].createElement(_DateDisplay["default"], {
    date: endDate,
    dateId: endDateId,
    isFocused: isEndDateFocused,
    setFocus: onEndDateFocus,
    align: "right"
  }));
}

DateRangeDisplay.prototype = propTypes;

var _default = (0, _reactWithStyles.withStyles)(function (_ref) {
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

exports["default"] = _default;