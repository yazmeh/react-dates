"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDateTimePickerComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateTimeRangePicker = _interopRequireDefault(require("./DateTimeRangePicker"));

var _DateRangePickerShape = _interopRequireDefault(require("../shapes/DateRangePickerShape"));

var _reactWithStyles = require("react-with-styles");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _defaultPhrases = require("../defaultPhrases");

var _constants = require("../constants");

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _isSameDay = _interopRequireDefault(require("../utils/isSameDay"));

var _isSameHour = _interopRequireDefault(require("../utils/isSameHour"));

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

var propTypes = process.env.NODE_ENV !== "production" ? _objectSpread(_objectSpread(_objectSpread({}, (0, _omit["default"])(_DateRangePickerShape["default"], ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange'])), {}, {
  applyOnSelect: _propTypes["default"].bool
}, _reactWithStyles.withStylesPropTypes), {}, {
  applyOnPreset: _propTypes["default"].bool,
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
  // calendar presentation and interaction related props
  applyOnPreset: false,
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
  applyOnSelect: false,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  //time props
  disableMinutes: true,
  is24HourFormat: true,
  hideTime: false,
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked(day) {
    return !day.isBefore(today.clone());
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, today);
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

var DateTimePickerComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(DateTimePickerComponent, _React$Component);

  var _super = _createSuper(DateTimePickerComponent);

  function DateTimePickerComponent(props) {
    var _this;

    _classCallCheck(this, DateTimePickerComponent);

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
      selected: {
        startDate: startDate,
        endDate: endDate
      }
    };
    _this.onDatesChange = _this.onDatesChange.bind(_assertThisInitialized(_this));
    _this.onFocusChange = _this.onFocusChange.bind(_assertThisInitialized(_this));
    _this.onPresetSelect = _this.onPresetSelect.bind(_assertThisInitialized(_this));
    _this.generatePresetOption = _this.generatePresetOption.bind(_assertThisInitialized(_this));
    _this.onApply = _this.onApply.bind(_assertThisInitialized(_this));
    _this.onCancel = _this.onCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimePickerComponent, [{
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
    key: "onPresetSelect",
    value: function onPresetSelect(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      var selected = this.state.selected;
      var applyOnPreset = this.props.applyOnPreset;
      this.onDatesChange({
        startDate: startDate,
        endDate: endDate
      });

      if (applyOnPreset) {
        this.onApply({
          startDate: startDate,
          endDate: endDate
        });
      }
    }
  }, {
    key: "generatePresetOption",
    value: function generatePresetOption() {
      var _this2 = this;

      var _this$props = this.props,
          styles = _this$props.styles,
          preOpt = _this$props.presetOptions,
          preTime = _this$props.presetTime,
          renderCalendarInfo = _this$props.renderCalendarInfo;
      var _this$state = this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var presetOptions = typeof preOpt === 'function' ? preOpt((0, _moment["default"])()) : preOpt;
      var presetTime = typeof preTime === "function" ? preTime((0, _moment["default"])()) : preTime;

      if (presetOptions) {
        return /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.PresetOptionMenu_Wrapper), /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateTimePickerComponent_menu), /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.PresetOptionMenu), presetTime && /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.PresetOptionMenu_item_time), /*#__PURE__*/_react["default"].createElement("div", null, "Latest Hour"), /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.PresetTime_Menu), presetTime.map(function (_ref2) {
          var text = _ref2.text,
              start = _ref2.start,
              end = _ref2.end;
          var isSelected = (0, _isSameHour["default"])(start, startDate) && (0, _isSameHour["default"])(end, endDate);
          return /*#__PURE__*/_react["default"].createElement("span", (0, _reactWithStyles.css)(styles.PresetTime_Menu_Item, isSelected && styles.PresetTime_Menu_Item_selected), /*#__PURE__*/_react["default"].createElement("button", {
            onClick: function onClick() {
              return _this2.onPresetSelect({
                startDate: start,
                endDate: end
              });
            }
          }, text));
        }))), presetOptions.map(function (_ref3) {
          var text = _ref3.text,
              start = _ref3.start,
              end = _ref3.end;
          var isSelected = (0, _isSameDay["default"])(start, startDate) && (0, _isSameDay["default"])(end, endDate);
          return /*#__PURE__*/_react["default"].createElement("button", _extends({
            key: text
          }, (0, _reactWithStyles.css)(styles.PresetOptionMenu_item, isSelected && styles.PresetOptionMenu_item_selected), {
            type: "button",
            onClick: function onClick() {
              return _this2.onPresetSelect({
                startDate: start,
                endDate: end
              });
            }
          }), text);
        })), !!(this.onApply || this.onCancel) && /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateTimeRangePicker_ConfirmWrapper), !!this.onApply && /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateTimePickerComponent_ConfirmButton_Wrapper), /*#__PURE__*/_react["default"].createElement("button", _extends({
          disabled: !startDate || !endDate,
          onClick: function onClick() {
            return _this2.onApply({
              startDate: startDate,
              endDate: endDate
            });
          },
          tabIndex: 3
        }, (0, _reactWithStyles.css)(styles.DateTimePickerComponent_Apply, styles.DateTimePickerComponent_ConfirmButton)), "Apply")), !!this.onCancel && /*#__PURE__*/_react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateTimePickerComponent_ConfirmButton_Wrapper), /*#__PURE__*/_react["default"].createElement("button", _extends({
          disabled: !startDate || !endDate,
          onClick: function onClick() {
            return _this2.onCancel({
              startDate: startDate,
              endDate: endDate
            });
          },
          tabIndex: 4
        }, (0, _reactWithStyles.css)(styles.DateTimePickerComponent_Cancel, styles.DateTimePickerComponent_ConfirmButton)), "Cancel")))));
      }

      if (renderCalendarInfo) {
        return renderCalendarInfo({
          onFocusChange: this.onFocusChange,
          onDatesChange: this.onDatesChange
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

      if (onApply) {
        onApply(newDates, oldDates);
      }

      this.onFocusChange(null);
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      var selected = this.state.selected;
      var onCancel = this.props.onCancel;
      this.onDatesChange(selected);

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
    value: function onDatesChange(_ref4) {
      var startDate = _ref4.startDate,
          endDate = _ref4.endDate;
      var _this$props2 = this.props,
          stateDateWrapper = _this$props2.stateDateWrapper,
          applyOnSelect = _this$props2.applyOnSelect,
          onApply = _this$props2.onApply;
      this.setState({
        startDate: startDate && stateDateWrapper(startDate),
        endDate: endDate && stateDateWrapper(endDate)
      });

      if (applyOnSelect && !!startDate && !!endDate) {
        this.setState({
          selected: {
            startDate: startDate,
            endDate: endDate
          }
        });

        if (this.state.focusedInput === _constants.END_DATE) {
          this.onFocusChange(_constants.START_DATE);
        }

        if (onApply) {
          onApply({
            startDate: startDate,
            endDate: endDate
          }, {
            startDate: this.state.startDate,
            endDate: this.state.endDate
          });
        }
      }
    }
  }, {
    key: "onFocusChange",
    value: function onFocusChange(focusedInput) {
      var _this$state$selected2 = this.state.selected,
          startDate = _this$state$selected2.startDate,
          endDate = _this$state$selected2.endDate;

      if (!focusedInput) {
        this.setState({
          startDate: startDate,
          endDate: endDate,
          focusedInput: focusedInput
        });
      } else {
        this.setState({
          focusedInput: focusedInput
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = (0, _omit["default"])(this.props, ["autoFocus", "autoFocusEndDate", "initialStartDate", "initialEndDate", "stateDateWrapper", "onApply", "onCancel", "selected", "startDate", "endDate", "presetOptions", "applyOnSelect", "applyOnPreset"]);
      var _this$state2 = this.state,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate,
          focusedInput = _this$state2.focusedInput,
          selected = _this$state2.selected;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_DateTimeRangePicker["default"], _extends({}, props, {
        onDatesChange: this.onDatesChange,
        onFocusChange: this.onFocusChange,
        onApply: this.onApply,
        onCancel: this.onCancel,
        selected: selected,
        focusedInput: focusedInput,
        startDate: startDate,
        verticalSpacing: 10,
        endDate: endDate,
        calendarInfoPosition: "after",
        renderCalendarInfo: this.generatePresetOption
      })));
    }
  }]);

  return DateTimePickerComponent;
}(_react["default"].Component);

exports.PureDateTimePickerComponent = DateTimePickerComponent;
DateTimePickerComponent.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DateTimePickerComponent.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref5) {
  var _ref5$reactDates = _ref5.reactDates,
      color = _ref5$reactDates.color,
      sizing = _ref5$reactDates.sizing;
  return {
    PresetOptionMenu_Wrapper: {
      width: 200
    },
    PresetOptionMenu_item_time: {
      position: "relative",
      border: 0,
      outline: 0,
      borderBottom: "1px solid ".concat(color.core.borderLight),
      display: "block",
      width: 200,
      padding: "5px 10px"
    },
    PresetTime_Menu: {
      margin: '5px auto',
      display: 'table',
      borderRadius: 4
    },
    PresetTime_Menu_Item: {
      border: "1px solid ".concat(color.core.borderLight),
      borderRightWidth: 0,
      display: 'table-cell',
      ':hover': {
        backgroundColor: color.core.primary,
        color: color.background
      },
      ':first-child': {
        borderRadius: '4px 0 0 4px'
      },
      ':last-child': {
        borderRadius: '0 4px 4px 0',
        borderRightWidth: 1
      }
    },
    PresetTime_Menu_Item_selected: {
      backgroundColor: color.core.primary,
      color: color.background
    },
    PresetOptionMenu_item: {
      position: "relative",
      border: 0,
      outline: 0,
      cursor: 'pointer',
      borderBottom: "1px solid ".concat(color.core.borderLight),
      display: "block",
      width: 200,
      padding: "5px 0",
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
    },
    DateTimePickerComponent_ConfirmButton: {
      padding: "".concat(sizing.confirmButtonPadding.vertical, "px ").concat(sizing.confirmButtonPadding.horizontal, "px"),
      height: "".concat(sizing.confirmButtonHeight, "px"),
      width: "".concat(sizing.confirmButtonMinWidth, "px"),
      border: 0,
      margin: '0 auto',
      cursor: 'pointer',
      fontWeight: 800,
      textAlign: 'center',
      display: 'block',
      borderRadius: '5px',
      textTransform: 'uppercase',
      fontSize: 12
    },
    DateTimePickerComponent_Apply: {
      backgroundColor: color.confirmButton.apply.background,
      color: color.confirmButton.apply.text,
      ':disabled': {
        backgroundColor: color.confirmButton.apply.disabled,
        cursor: 'not-allowed'
      }
    },
    DateTimePickerComponent_Cancel: {
      backgroundColor: color.confirmButton.cancel.background,
      color: color.confirmButton.cancel.text,
      ':disabled': {
        backgroundColor: color.confirmButton.cancel.disabled,
        cursor: 'not-allowed'
      }
    },
    DateTimePickerComponent_ConfirmButton_Wrapper: {
      paddingTop: '10px',
      margin: '0 auto'
    },
    DateTimePickerComponent_menu: {
      border: "1px solid ".concat(color.core.borderLight),
      position: 'absolute',
      top: 0,
      bottom: 0
    },
    DateTimeRangePicker_ConfirmWrapper: {
      position: "relative",
      fontWeight: "bold",
      border: 0,
      height: "fit-content",
      backgroundColor: "transparent"
    }
  };
})(DateTimePickerComponent);

exports["default"] = _default;