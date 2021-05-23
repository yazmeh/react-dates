"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactWithStyles = require("react-with-styles");

var _constants = require("../constants");

var _CalendarIcon = _interopRequireDefault(require("./CalendarIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = process.env.NODE_ENV !== "production" ? _objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  dateValues: _propTypes["default"].object,
  inputDateTimeElement: _propTypes["default"].func,
  startDate: _propTypes["default"].string,
  startDateId: _propTypes["default"].string,
  showDefaultInputIcon: _propTypes["default"].bool,
  startDatePlaceholderText: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  rangeSeparator: _propTypes["default"].string,
  endDate: _propTypes["default"].string,
  endDateId: _propTypes["default"].string,
  endDatePlaceholderText: _propTypes["default"].string,
  isEndDateFocused: _propTypes["default"].bool,
  onStartDateFocus: _propTypes["default"].func,
  isRTL: _propTypes["default"].bool
}) : {};;
var defaultProps = {
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,
  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,
  rangeSeparator: ' - ',
  displayFormat: function displayFormat() {
    return moment.localeData().longDateFormat('L');
  },
  // accessibility
  isRTL: false
};

var SingleDateRange = /*#__PURE__*/function (_React$Component) {
  _inherits(SingleDateRange, _React$Component);

  var _super = _createSuper(SingleDateRange);

  function SingleDateRange() {
    _classCallCheck(this, SingleDateRange);

    return _super.apply(this, arguments);
  }

  _createClass(SingleDateRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateValues = _this$props.dateValues,
          inputDateTimeElement = _this$props.inputDateTimeElement,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          showDefaultInputIcon = _this$props.showDefaultInputIcon,
          rangeSeparator = _this$props.rangeSeparator,
          styles = _this$props.styles,
          small = _this$props.small,
          onStartDateFocus = _this$props.onStartDateFocus;
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        onClick: onStartDateFocus
      }, (0, _reactWithStyles.css)(styles.SingleDateRange, small ? styles.SingleDateRange_small : styles.SingleDateRange_normal)), inputDateTimeElement ? inputDateTimeElement(dateValues) : /*#__PURE__*/_react["default"].createElement("div", null, "".concat(startDate).concat(rangeSeparator).concat(endDate)), showDefaultInputIcon && /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDateRange_calendarIcon), /*#__PURE__*/_react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.SingleDateRange_calendarIcon_svg))));
    }
  }]);

  return SingleDateRange;
}(_react["default"].Component);

SingleDateRange.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
SingleDateRange.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      border = _ref$reactDates.border,
      font = _ref$reactDates.font,
      color = _ref$reactDates.color,
      spacing = _ref$reactDates.spacing;
  return {
    SingleDateRange: {
      display: 'inline-block',
      backgroundColor: color.background,
      color: color.text,
      boxSizing: 'content-box',
      position: 'relative',
      border: border.input.border,
      borderRadius: '5px',
      ':hover': {
        border: border.input.borderHover
      }
    },
    SingleDateRange_small: {
      height: font.input.lineHeight_small,
      lineHeight: font.input.lineHeight_small,
      padding: "".concat(spacing.displayTextPaddingVertical_small, "px ").concat(spacing.displayTextPaddingHorizontal_small, "px"),
      paddingTop: spacing.displayTextPaddingTop_small,
      paddingBottom: spacing.displayTextPaddingBottom_small,
      paddingLeft: spacing.displayTextPaddingLeft_small,
      paddingRight: spacing.displayTextPaddingRight_small
    },
    SingleDateRange_normal: {
      height: font.input.lineHeight,
      lineHeight: font.input.lineHeight,
      padding: "".concat(spacing.displayTextPaddingVertical, "px ").concat(spacing.displayTextPaddingHorizontal, "px"),
      paddingTop: spacing.displayTextPaddingTop,
      paddingBottom: spacing.displayTextPaddingBottom,
      paddingLeft: spacing.displayTextPaddingLeft,
      paddingRight: spacing.displayTextPaddingRight
    },
    SingleDateRange_calendarIcon: {
      position: 'absolute',
      height: font.input.lineHeight,
      lineHeight: font.input.lineHeight,
      paddingTop: spacing.displayTextPaddingTop || spacing.displayTextPaddingVertical - 1,
      paddingBottom: spacing.displayTextPaddingBottom || spacing.displayTextPaddingVertical - 1,
      width: '30px',
      top: '0',
      right: '0',
      textAlign: 'center'
    },
    SingleDateRange_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
})(SingleDateRange);

exports["default"] = _default;