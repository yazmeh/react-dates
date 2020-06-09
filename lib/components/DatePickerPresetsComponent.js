"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PurePresetsComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateRangePicker = _interopRequireDefault(require("./DateRangePicker"));

var _DateRangePickerShape = _interopRequireDefault(require("../shapes/DateRangePickerShape"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _reactWithStyles = require("react-with-styles");

var _defaultPhrases = require("../defaultPhrases");

var _constants = require("../constants");

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _isSameDay = _interopRequireDefault(require("../utils/isSameDay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = process.env.NODE_ENV !== "production" ? _objectSpread(_objectSpread(_objectSpread({}, (0, _omit["default"])(_DateRangePickerShape["default"], ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange'])), _reactWithStyles.withStylesPropTypes), {}, {
  onApply: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  presetOptions: _propTypes["default"].array
}) : {};;
var today = (0, _moment["default"])().hour(12);
var defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
  // input related props
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,
  //Wrappers Props
  onApply: function onApply() {},
  onCancel: function onCancel() {},
  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_RIGHT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: true,
  reopenPickerOnClearDates: false,
  isRTL: false,
  hideKeyboardShortcutsPanel: true,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked(day) {
    return day.isBefore(today);
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {
    return false;
  },
  // internationalization
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  stateDateWrapper: function stateDateWrapper(date) {
    return date;
  }
};

var DatePickerPresetsComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePickerPresetsComponent, _React$Component);

  var _super = _createSuper(DatePickerPresetsComponent);

  function DatePickerPresetsComponent(props) {
    var _this;

    _classCallCheck(this, DatePickerPresetsComponent);

    _this = _super.call(this, props);
    var endDate = props.endDate,
        startDate = props.startDate,
        autoFocus = props.autoFocus,
        autoFocusEndDate = props.autoFocusEndDate;
    var focusedInput = null;

    if (autoFocus) {
      focusedInput = _constants.START_DATE;
    } else if (autoFocusEndDate) {
      focusedInput = _constants.END_DATE;
    }

    _this.state = {
      focusedInput: focusedInput,
      startDate: startDate,
      endDate: endDate,
      initialVisibleMonth: (startDate || (0, _moment["default"])()).month - 1,
      selected: {
        startDate: startDate,
        endDate: endDate
      }
    };
    _this.onDatesChange = _this.onDatesChange.bind(_assertThisInitialized(_this));
    _this.onFocusChange = _this.onFocusChange.bind(_assertThisInitialized(_this));
    _this.generatePresetOption = _this.generatePresetOption.bind(_assertThisInitialized(_this));
    _this.onApply = _this.onApply.bind(_assertThisInitialized(_this));
    _this.onCancel = _this.onCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePickerPresetsComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var startDate = newProps.startDate,
          endDate = newProps.endDate;

      if (!startDate.isSame(this.state.selected.startDate) || !endDate.isSame(this.state.selected.endDate)) {
        this.setState({
          selected: {
            startDate: startDate,
            endDate: endDate
          },
          startDate: startDate,
          endDate: endDate
        });
      }
    }
  }, {
    key: "onApply",
    value: function onApply(newDates) {
      var onApply = this.props.onApply;
      var _this$state$selected = this.state.selected,
          startDate = _this$state$selected.startDate,
          endDate = _this$state$selected.endDate;
      var oldDates = {
        startDate: startDate,
        endDate: endDate
      };
      this.setState({
        selected: _objectSpread({}, newDates)
      });
      onApply(newDates, oldDates);
      this.onFocusChange(null);
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      var _this$state$selected2 = this.state.selected,
          startDate = _this$state$selected2.startDate,
          endDate = _this$state$selected2.endDate;
      var onCancel = this.props.onCancel;
      this.setState({
        startDate: startDate,
        endDate: endDate
      });

      if (onCancel) {
        onCancel({
          startDate: startDate,
          endDate: endDate
        });
      }

      this.onFocusChange(null);
    }
  }, {
    key: "onDatesChange",
    value: function onDatesChange(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      var stateDateWrapper = this.props.stateDateWrapper;
      this.setState({
        startDate: startDate && stateDateWrapper(startDate),
        endDate: endDate && stateDateWrapper(endDate)
      });
    }
  }, {
    key: "generatePresetOption",
    value: function generatePresetOption() {
      var _this2 = this;

      var _this$props = this.props,
          styles = _this$props.styles,
          presetOptions = _this$props.presetOptions;
      var _this$state = this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.PresetOptionMenu), presetOptions.map(function (_ref2) {
        var text = _ref2.text,
            start = _ref2.start,
            end = _ref2.end;
        var isSelected = (0, _isSameDay["default"])(start, startDate) && (0, _isSameDay["default"])(end, endDate);
        return /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: text
        }, (0, _reactWithStyles.css)(styles.PresetOptionMenu_item, isSelected && styles.PresetOptionMenu_item_selected), {
          type: "button",
          onClick: function onClick() {
            return _this2.onDatesChange({
              startDate: start,
              endDate: end
            });
          }
        }), text);
      }));
    }
  }, {
    key: "onFocusChange",
    value: function onFocusChange(focusedInput) {
      var selected = this.state.selected;
      var stateDateWrapper = this.props.stateDateWrapper;

      if (focusedInput == null) {
        this.setState({
          startDate: selected.startDate && stateDateWrapper(selected.startDate),
          endDate: selected.startDate && stateDateWrapper(selected.startDate),
          focusedInput: focusedInput
        });
      }

      this.setState({
        focusedInput: focusedInput
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = (0, _omit["default"])(this.props, ['autoFocus', 'autoFocusEndDate', 'initialStartDate', 'initialEndDate', 'stateDateWrapper', 'onApply', 'onCancel', 'selected', 'startDate', 'endDate', 'presetOptions']);
      var _this$state2 = this.state,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate,
          focusedInput = _this$state2.focusedInput,
          selected = _this$state2.selected,
          initialVisibleMonth = _this$state2.initialVisibleMonth;
      var presetOptions = this.props.presetOptions;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_DateRangePicker["default"], _extends({}, props, {
        initialVisibleMonth: function initialVisibleMonth() {
          return (startDate || (0, _moment["default"])()).subtract(1, "month");
        },
        onDatesChange: this.onDatesChange,
        onFocusChange: this.onFocusChange,
        focusedInput: focusedInput,
        startDate: startDate,
        verticalSpacing: 10,
        endDate: endDate,
        calendarInfoPosition: "after",
        renderCalendarInfo: this.generatePresetOption
      })));
    }
  }]);

  return DatePickerPresetsComponent;
}(_react["default"].Component);

exports.PurePresetsComponent = DatePickerPresetsComponent;
DatePickerPresetsComponent.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DatePickerPresetsComponent.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var color = _ref3.reactDates.color;
  return {
    PresetOptionMenu: {
      // position:"absolute",
      // width:300,
      // top:0 ,
      // left:-300, 
      // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)',
      // backgroundColor:color.background,
      height: '100%'
    },
    PresetOptionMenu_item: {
      position: "relative",
      display: "block",
      width: 300,
      padding: "10px 0",
      ':focus': {
        outline: 0
      },
      ':hover': {
        backgroundColor: color.core.primary,
        color: color.background
      }
    },
    PresetOptionMenu_item_selected: {
      backgroundColor: color.core.primary,
      color: color.background
    }
  };
})(DatePickerPresetsComponent);

exports["default"] = _default;