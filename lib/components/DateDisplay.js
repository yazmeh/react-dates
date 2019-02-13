"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactWithStyles = require("react-with-styles");

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  date: _reactMomentProptypes["default"].momentObj,
  align: _propTypes["default"].string,
  setFocus: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool
}) : {};
var defaultProps = {
  date: _reactMomentProptypes["default"].momentObj,
  align: _propTypes["default"].string,
  setFocus: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool
};

var DateDisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateDisplay, _React$Component);

  function DateDisplay() {
    _classCallCheck(this, DateDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateDisplay).apply(this, arguments));
  }

  _createClass(DateDisplay, [{
    key: "getDate",
    value: function getDate(format) {
      var date = this.props.date;

      if (date) {
        return date.format(format);
      } else {
        return format.split(/./).join('-');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          align = _this$props.align,
          setFocus = _this$props.setFocus,
          isFocused = _this$props.isFocused,
          _this$props$format = _this$props.format;
      _this$props$format = _this$props$format === void 0 ? {} : _this$props$format;
      var _this$props$format$da = _this$props$format.date,
          date = _this$props$format$da === void 0 ? 'DD' : _this$props$format$da,
          _this$props$format$mo = _this$props$format.month,
          month = _this$props$format$mo === void 0 ? 'MMMM' : _this$props$format$mo,
          _this$props$format$ye = _this$props$format.year,
          year = _this$props$format$ye === void 0 ? 'YYYY' : _this$props$format$ye;
      return _react["default"].createElement("div", _extends({
        onClick: setFocus
      }, (0, _reactWithStyles.css)(styles.DateDisplay, isFocused && styles.DateDisplay_isFocused)), _react["default"].createElement("div", (0, _reactWithStyles.css)(align === 'right' && styles.DateDisplay_alignRight, align === 'left' && styles.DateDisplay_alignLeft), _react["default"].createElement("div", _extends({
        className: 'day'
      }, (0, _reactWithStyles.css)(styles.DateDisplay_Day)), this.getDate(date)), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateDisplay_MonthYearDowWrapper), _react["default"].createElement("div", _extends({
        className: 'monthDisplay yearDisplay'
      }, (0, _reactWithStyles.css)(styles.DateDisplay_MonthYear)), this.getDate("".concat(month, " ").concat(year))), _react["default"].createElement("div", _extends({
        className: 'dowDisplay'
      }, (0, _reactWithStyles.css)(styles.DateDisplay_DOW)), this.getDate("dddd")))));
    }
  }]);

  return DateDisplay;
}(_react["default"].Component);

DateDisplay.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

var _default = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      border = _ref$reactDates.border,
      color = _ref$reactDates.color,
      sizing = _ref$reactDates.sizing,
      spacing = _ref$reactDates.spacing,
      font = _ref$reactDates.font,
      zIndex = _ref$reactDates.zIndex;
  return {
    DateDisplay: {
      display: 'inline-block',
      width: '50%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '20px 20px',
      borderBottom: '2px solid #ffffff',
      ':hover': {
        borderBottom: '2px solid #EAEAEA'
      }
    },
    DateDisplay_alignLeft: {
      "float": 'left'
    },
    DateDisplay_alignRight: {
      "float": 'right'
    },
    DateDisplay_isFocused: {
      borderBottom: "2px solid ".concat(color.selected.backgroundColor),
      ':hover': {
        borderBottom: "2px solid ".concat(color.selected.backgroundColor)
      }
    },
    DateDisplay_Day: {
      display: 'inline-block',
      fontSize: '25px',
      padding: '0 5px',
      textAlign: 'center',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      color: color.text
    },
    DateDisplay_MonthYearDowWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateDisplay_MonthYear: {
      fontSize: '13px',
      fontWeight: 'bold'
    },
    DateDisplay_DOW: {
      fontSize: '12px'
    }
  };
})(DateDisplay);

exports["default"] = _default;