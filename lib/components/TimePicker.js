"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureTimePicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _moment = _interopRequireDefault(require("moment"));

var _ChevronUp = _interopRequireDefault(require("./ChevronUp"));

var _ChevronDown = _interopRequireDefault(require("./ChevronDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var propTypes = process.env.NODE_ENV !== "production" ? {
  is24HourFormat: _propTypes["default"].bool,
  time: _propTypes["default"].object,
  type: _propTypes["default"].string,
  onTimeChange: _propTypes["default"].func
} : {};;

var TimePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  var _super = _createSuper(TimePicker);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, props);
    var time = props.time,
        is24HourFormat = props.is24HourFormat;
    _this.state = {
      hour: {
        min: is24HourFormat ? 0 : 1,
        max: is24HourFormat ? 23 : 12,
        format: is24HourFormat ? 'HH' : 'hh',
        value: time.format(is24HourFormat ? 'HH' : 'hh')
      },
      minute: {
        min: 0,
        max: 59,
        format: 'mm',
        value: time.format('mm')
      },
      meridiem: {
        format: 'a',
        value: time.format('a')
      }
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onIncrement = _this.onIncrement.bind(_assertThisInitialized(_this));
    _this.onDecrement = _this.onDecrement.bind(_assertThisInitialized(_this));
    _this.toogleMeridiem = _this.toogleMeridiem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var prevTime = this.props.time;
      var time = nextProps.time,
          is24HourFormat = nextProps.is24HourFormat;
      this.setState({
        hour: {
          min: is24HourFormat ? 0 : 1,
          max: is24HourFormat ? 23 : 12,
          format: is24HourFormat ? 'HH' : 'hh',
          value: time.format(is24HourFormat ? 'HH' : 'hh')
        },
        minute: {
          min: 0,
          max: 59,
          format: 'mm',
          value: time.format('mm')
        },
        meridiem: {
          format: 'a',
          value: time.format('a')
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e, type) {
      var state = _objectSpread({}, this.state);

      var input = e.target.value;

      if (!isNaN(input)) {
        if (input.trim().length === 0) {
          state[type].value = input;
          this.setState(state);
          return;
        }

        input = parseInt(input);

        if (input >= state[type].min && input <= state[type].max) {
          if (input < 10) {
            input = "0".concat(input);
          }

          state[type].value = "".concat(input);
          this.setState(state);
        }
      }
    }
  }, {
    key: "onTimeChange",
    value: function onTimeChange() {
      var _this$state = this.state,
          hour = _this$state.hour,
          minute = _this$state.minute,
          meridiem = _this$state.meridiem;
      var _this$props = this.props,
          is24HourFormat = _this$props.is24HourFormat,
          type = _this$props.type;
      var time;

      if (is24HourFormat) {
        time = (0, _moment["default"])("".concat(hour.value, ":").concat(minute.value), "".concat(hour.format, ":").concat(minute.format));
      } else {
        time = (0, _moment["default"])("".concat(hour.value, ":").concat(minute.value, " ").concat(meridiem.value), "".concat(hour.format, ":").concat(minute.format, " ").concat(meridiem.format));
      }

      this.props.onTimeChange(time, type);
    }
  }, {
    key: "onIncrement",
    value: function onIncrement(type) {
      var state = this.state;
      var time;

      if (state[type].value < state[type].max) {
        var input = parseInt(state[type].value);
        input += 1;
        state[type].value = input < 10 ? "0".concat(input) : input;
        this.setState(state);
        this.onTimeChange();
      }
    }
  }, {
    key: "onDecrement",
    value: function onDecrement(type) {
      var state = this.state;
      var time;

      if (state[type].value > state[type].min) {
        var input = parseInt(state[type].value);
        input -= 1;
        state[type].value = input < 10 ? "0".concat(input) : input;
        this.setState(state);
        this.onTimeChange();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      e.target.select();
    }
  }, {
    key: "onBlur",
    value: function onBlur(e, type) {
      var state = _objectSpread({}, this.state);

      if (!state[type].value.trim().length) {
        state[type].value = this.props.time.format(state[type].format);
        this.setState(state);
      }

      this.onTimeChange();
    }
  }, {
    key: "toogleMeridiem",
    value: function toogleMeridiem() {
      var state = _objectSpread({}, this.state);

      if (state.meridiem.value === 'am') {
        state.meridiem.value = 'pm';
        this.setState(state);
        this.onTimeChange();
      } else if (state.meridiem.value === 'pm') {
        state.meridiem.value = 'am';
        this.setState(state);
        this.onTimeChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          hour = _this$state2.hour,
          minute = _this$state2.minute,
          meridiem = _this$state2.meridiem;
      var _this$props2 = this.props,
          styles = _this$props2.styles,
          is24HourFormat = _this$props2.is24HourFormat,
          disableMinutes = _this$props2.disableMinutes,
          _this$props2$hourProp = _this$props2.hourProps,
          hourProps = _this$props2$hourProp === void 0 ? {} : _this$props2$hourProp;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.TimePicker), /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: "hour"
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggleContainer, styles.TimePicker_separator)), /*#__PURE__*/_react["default"].createElement("button", _extends({
        className: "time-toogle increment hour-toogle",
        onClick: function onClick() {
          return _this2.onIncrement('hour');
        }
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)), /*#__PURE__*/_react["default"].createElement(_ChevronUp["default"], null)), /*#__PURE__*/_react["default"].createElement("input", _extends({
        type: "text",
        value: hour.value,
        onChange: function onChange(e) {
          return _this2.onChange(e, 'hour');
        },
        onFocus: this.onFocus,
        onBlur: function onBlur(e) {
          return _this2.onBlur(e, 'hour');
        }
      }, hourProps, (0, _reactWithStyles.css)(styles.TimePicker_input))), /*#__PURE__*/_react["default"].createElement("button", _extends({
        className: "time-toogle decrement hour-toogle",
        onClick: function onClick() {
          return _this2.onDecrement('hour');
        }
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)), /*#__PURE__*/_react["default"].createElement(_ChevronDown["default"], null))), /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: "min"
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggleContainer, !is24HourFormat && styles.TimePicker_separator, disableMinutes && styles.TimePicker_isdisabled)), !disableMinutes && /*#__PURE__*/_react["default"].createElement("button", _extends({
        className: "time-toogle increment min-toogle",
        onClick: function onClick() {
          return _this2.onIncrement('minute');
        }
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)), /*#__PURE__*/_react["default"].createElement(_ChevronUp["default"], null)), /*#__PURE__*/_react["default"].createElement("input", _extends({
        type: "text",
        value: minute.value,
        onFocus: this.onFocus,
        readOnly: disableMinutes,
        onChange: function onChange(e) {
          return _this2.onChange(e, 'minute');
        },
        onBlur: function onBlur(e) {
          return _this2.onBlur(e, 'minute');
        }
      }, (0, _reactWithStyles.css)(styles.TimePicker_input, disableMinutes && styles.TimePicker_inputIsDisabled))), !disableMinutes && /*#__PURE__*/_react["default"].createElement("button", _extends({
        className: "time-toogle decrement min-toogle",
        onClick: function onClick() {
          return _this2.onDecrement('minute');
        }
      }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)), /*#__PURE__*/_react["default"].createElement(_ChevronDown["default"], null))), !is24HourFormat && /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: "mediterian"
      }, (0, _reactWithStyles.css)(styles.TimePicker_appm_wrapper)), /*#__PURE__*/_react["default"].createElement("button", _extends({
        onClick: this.toogleMeridiem
      }, (0, _reactWithStyles.css)(styles.TimePicker_appm)), meridiem.value)));
    }
  }]);

  return TimePicker;
}(_react["default"].Component);

exports.PureTimePicker = TimePicker;
TimePicker.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

var _default = (0, _reactWithStyles.withStyles)(function (props) {
  var _TimePicker;

  //console.log(props);
  return {
    TimePicker: (_TimePicker = {
      width: '50%'
    }, _defineProperty(_TimePicker, "width", '50%'), _defineProperty(_TimePicker, ':only-child', {
      width: '100%'
    }), _defineProperty(_TimePicker, "height", '90px'), _defineProperty(_TimePicker, "backgroundColor", '#F0F6FB'), _defineProperty(_TimePicker, "display", 'inline-flex'), _defineProperty(_TimePicker, "justifyContent", 'center'), _defineProperty(_TimePicker, "alignItems", 'center'), _defineProperty(_TimePicker, "border", '1px solid #E7EAF0'), _TimePicker),
    TimePicker_single: {
      width: '100%',
      height: '90px',
      backgroundColor: '#F0F6FB',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #E7EAF0'
    },
    TimePicker_toggleContainer: {
      display: 'inline-block',
      width: '80px',
      height: '100%',
      padding: '0 25px',
      position: 'relative'
    },
    TimePicker_isdisabled: {
      padding: '30px 25px'
    },
    TimePicker_separator: {
      '::after': {
        content: "':'",
        position: 'absolute',
        right: '0',
        display: 'inline-block',
        height: '30px',
        lineHeight: '30px',
        fontWeight: '800',
        top: 'calc(50% - 15px)'
      }
    },
    TimePicker_toggle: {
      textAlign: 'center',
      fontSize: '20px',
      height: '30px',
      lineHeight: '30px',
      cursor: 'pointer',
      width: '100%',
      backgroundColor: 'transparent',
      border: '0px solid transparent',
      outline: '0px solid transparent'
    },
    TimePicker_appm_wrapper: {
      width: '80px',
      textAlign: 'center'
    },
    TimePicker_appm: {
      backgroundColor: '#3290DE',
      border: '0 solid transparent',
      color: 'white',
      fontWeight: '400',
      height: '26px',
      lineHeight: '26px',
      borderRadius: '3px'
    },
    TimePicker_input: {
      width: '100%',
      height: '30px',
      backgroundColor: '#fff',
      borderRadius: '4px',
      border: '1px solid #D5D7DD',
      textAlign: 'center',
      margin: 'auto'
    },
    TimePicker_inputIsDisabled: {
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  };
})(TimePicker);

exports["default"] = _default;