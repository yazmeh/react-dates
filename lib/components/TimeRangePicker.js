Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _TimePicker = require('./TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  is24HourFormat: _propTypes2['default'].bool,
  endTime: _propTypes2['default'].object,
  startTime: _propTypes2['default'].object,
  onTimeChange: _propTypes2['default'].func
};

var TimeRangePicker = function (_React$Component) {
  _inherits(TimeRangePicker, _React$Component);

  function TimeRangePicker() {
    _classCallCheck(this, TimeRangePicker);

    return _possibleConstructorReturn(this, (TimeRangePicker.__proto__ || Object.getPrototypeOf(TimeRangePicker)).apply(this, arguments));
  }

  _createClass(TimeRangePicker, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            is24HourFormat = _props.is24HourFormat,
            endTime = _props.endTime,
            startTime = _props.startTime,
            onTimeChange = _props.onTimeChange,
            disableMinutes = _props.disableMinutes;


        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_TimePicker2['default'], {
            key: 'start',
            type: _constants.START_DATE,
            time: startTime,
            is24HourFormat: is24HourFormat,
            onTimeChange: this.props.onTimeChange,
            disableMinutes: disableMinutes,
            hourProps: { tabIndex: 1 }
          }),
          _react2['default'].createElement(_TimePicker2['default'], {
            key: 'end',
            type: _constants.END_DATE,
            time: endTime,
            is24HourFormat: is24HourFormat,
            onTimeChange: this.props.onTimeChange,
            disableMinutes: disableMinutes,
            hourProps: { tabIndex: 2 }
          })
        );
      }

      return render;
    }()
  }]);

  return TimeRangePicker;
}(_react2['default'].Component);

TimeRangePicker.propTypes = propTypes;
exports['default'] = TimeRangePicker;