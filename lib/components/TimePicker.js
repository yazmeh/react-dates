Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureTimePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ChevronUp = require('./ChevronUp');

var _ChevronUp2 = _interopRequireDefault(_ChevronUp);

var _ChevronDown = require('./ChevronDown');

var _ChevronDown2 = _interopRequireDefault(_ChevronDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  is24HourFormat: _propTypes2['default'].bool,
  time: _propTypes2['default'].object,
  type: _propTypes2['default'].string,
  onTimeChange: _propTypes2['default'].func
};

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

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
    _this.onChange = _this.onChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);
    _this.toogleMeridiem = _this.toogleMeridiem.bind(_this);
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'onChange',
    value: function () {
      function onChange(e, type) {
        var state = (0, _object2['default'])({}, this.state);
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
              input = '0' + input;
            }
            state[type].value = input;
            this.setState(state);
          }
        }
      }

      return onChange;
    }()
  }, {
    key: 'onTimeChange',
    value: function () {
      function onTimeChange() {
        var _state = this.state,
            hour = _state.hour,
            minute = _state.minute,
            meridiem = _state.meridiem;
        var _props = this.props,
            is24HourFormat = _props.is24HourFormat,
            type = _props.type;

        if (is24HourFormat) {
          time = (0, _moment2['default'])(String(hour.value) + ':' + String(minute.value), String(hour.format) + ':' + String(minute.format));
        } else {
          time = (0, _moment2['default'])(String(hour.value) + ':' + String(minute.value) + ' ' + String(meridiem.value), String(hour.format) + ':' + String(minute.format) + ' ' + String(meridiem.format));
        }
        this.props.onTimeChange(time, type);
      }

      return onTimeChange;
    }()
  }, {
    key: 'onIncrement',
    value: function () {
      function onIncrement(type) {
        var state = this.state;
        var time = void 0;
        if (state[type].value < state[type].max) {
          var input = parseInt(state[type].value);
          input += 1;
          state[type].value = input < 10 ? '0' + input : input;
          this.setState(state);
          this.onTimeChange();
        }
      }

      return onIncrement;
    }()
  }, {
    key: 'onDecrement',
    value: function () {
      function onDecrement(type) {
        var state = this.state;
        var time = void 0;
        if (state[type].value > state[type].min) {
          var input = parseInt(state[type].value);
          input -= 1;
          state[type].value = input < 10 ? '0' + input : input;
          this.setState(state);
          this.onTimeChange();
        }
      }

      return onDecrement;
    }()
  }, {
    key: 'onFocus',
    value: function () {
      function onFocus(e) {
        e.target.select();
      }

      return onFocus;
    }()
  }, {
    key: 'onBlur',
    value: function () {
      function onBlur(e, type) {
        var state = (0, _object2['default'])({}, this.state);
        if (!state[type].value.trim().length) {
          state[type].value = this.props.time.format(state[type].format);
          this.setState(state);
        }
        this.onTimeChange();
      }

      return onBlur;
    }()
  }, {
    key: 'toogleMeridiem',
    value: function () {
      function toogleMeridiem() {
        var state = (0, _object2['default'])({}, this.state);
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

      return toogleMeridiem;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _state2 = this.state,
            hour = _state2.hour,
            minute = _state2.minute,
            meridiem = _state2.meridiem;
        var _props2 = this.props,
            styles = _props2.styles,
            is24HourFormat = _props2.is24HourFormat;

        return _react2['default'].createElement(
          'div',
          (0, _reactWithStyles.css)(styles.TimePicker),
          _react2['default'].createElement(
            'div',
            _extends({
              className: 'hour'
            }, (0, _reactWithStyles.css)(styles.TimePicker_toggleContainer, styles.TimePicker_separator)),
            _react2['default'].createElement(
              'button',
              _extends({
                className: 'time-toogle increment hour-toogle',
                onClick: function () {
                  function onClick() {
                    return _this2.onIncrement('hour');
                  }

                  return onClick;
                }()
              }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)),
              _react2['default'].createElement(_ChevronUp2['default'], null)
            ),
            _react2['default'].createElement('input', _extends({
              type: 'text',
              value: hour.value,
              onChange: function () {
                function onChange(e) {
                  return _this2.onChange(e, 'hour');
                }

                return onChange;
              }(),
              onFocus: this.onFocus,
              onBlur: function () {
                function onBlur(e) {
                  return _this2.onBlur(e, 'hour');
                }

                return onBlur;
              }()
            }, (0, _reactWithStyles.css)(styles.TimePicker_input))),
            _react2['default'].createElement(
              'button',
              _extends({
                className: 'time-toogle decrement hour-toogle',
                onClick: function () {
                  function onClick() {
                    return _this2.onDecrement('hour');
                  }

                  return onClick;
                }()
              }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)),
              _react2['default'].createElement(_ChevronDown2['default'], null)
            )
          ),
          _react2['default'].createElement(
            'div',
            _extends({
              className: 'min'
            }, (0, _reactWithStyles.css)(styles.TimePicker_toggleContainer, !is24HourFormat && styles.TimePicker_separator)),
            _react2['default'].createElement(
              'button',
              _extends({
                className: 'time-toogle increment min-toogle',
                onClick: function () {
                  function onClick() {
                    return _this2.onIncrement('minute');
                  }

                  return onClick;
                }()
              }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)),
              _react2['default'].createElement(_ChevronUp2['default'], null)
            ),
            _react2['default'].createElement('input', _extends({
              type: 'text',
              value: minute.value,
              onFocus: this.onFocus,
              onChange: function () {
                function onChange(e) {
                  return _this2.onChange(e, 'minute');
                }

                return onChange;
              }(),
              onBlur: function () {
                function onBlur(e) {
                  return _this2.onBlur(e, 'minute');
                }

                return onBlur;
              }()
            }, (0, _reactWithStyles.css)(styles.TimePicker_input))),
            _react2['default'].createElement(
              'button',
              _extends({
                className: 'time-toogle decrement min-toogle',
                onClick: function () {
                  function onClick() {
                    return _this2.onDecrement('minute');
                  }

                  return onClick;
                }()
              }, (0, _reactWithStyles.css)(styles.TimePicker_toggle)),
              _react2['default'].createElement(_ChevronDown2['default'], null)
            )
          ),
          !is24HourFormat && _react2['default'].createElement(
            'div',
            _extends({
              className: 'mediterian'
            }, (0, _reactWithStyles.css)(styles.TimePicker_appm_wrapper)),
            _react2['default'].createElement(
              'button',
              _extends({
                onClick: this.toogleMeridiem
              }, (0, _reactWithStyles.css)(styles.TimePicker_appm)),
              meridiem.value
            )
          )
        );
      }

      return render;
    }()
  }]);

  return TimePicker;
}(_react2['default'].Component);

TimePicker.propTypes = propTypes;
exports.PureTimePicker = TimePicker;
exports['default'] = (0, _reactWithStyles.withStyles)(function (props) {
  //console.log(props);
  return {
    TimePicker: {
      width: '50%',
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
    }

  };
})(TimePicker);