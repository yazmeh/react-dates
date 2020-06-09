"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var propTypes = process.env.NODE_ENV !== "production" ? {
  is24HourFormat: _propTypes["default"].bool,
  endTime: _propTypes["default"].object,
  startTime: _propTypes["default"].object,
  onTimeChange: _propTypes["default"].func
} : {};;

var TimeRangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeRangePicker, _React$Component);

  var _super = _createSuper(TimeRangePicker);

  function TimeRangePicker() {
    _classCallCheck(this, TimeRangePicker);

    return _super.apply(this, arguments);
  }

  _createClass(TimeRangePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is24HourFormat = _this$props.is24HourFormat,
          endTime = _this$props.endTime,
          startTime = _this$props.startTime,
          onTimeChange = _this$props.onTimeChange,
          disableMinutes = _this$props.disableMinutes;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TimePicker["default"], {
        key: "start",
        type: _constants.START_DATE,
        time: startTime,
        is24HourFormat: is24HourFormat,
        onTimeChange: this.props.onTimeChange,
        disableMinutes: disableMinutes,
        hourProps: {
          tabIndex: 1
        }
      }), /*#__PURE__*/_react["default"].createElement(_TimePicker["default"], {
        key: "end",
        type: _constants.END_DATE,
        time: endTime,
        is24HourFormat: is24HourFormat,
        onTimeChange: this.props.onTimeChange,
        disableMinutes: disableMinutes,
        hourProps: {
          tabIndex: 2
        }
      }));
    }
  }]);

  return TimeRangePicker;
}(_react["default"].Component);

TimeRangePicker.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = TimeRangePicker;
exports["default"] = _default;