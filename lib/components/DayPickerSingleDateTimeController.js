"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _moment = _interopRequireDefault(require("moment"));

var _object = _interopRequireDefault(require("object.values"));

var _isTouchDevice = _interopRequireDefault(require("is-touch-device"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _isSameDay = _interopRequireDefault(require("../utils/isSameDay"));

var _isAfterDay = _interopRequireDefault(require("../utils/isAfterDay"));

var _getVisibleDays = _interopRequireDefault(require("../utils/getVisibleDays"));

var _isDayVisible = _interopRequireDefault(require("../utils/isDayVisible"));

var _toISODateString = _interopRequireDefault(require("../utils/toISODateString"));

var _toISOMonthString = _interopRequireDefault(require("../utils/toISOMonthString"));

var _ScrollableOrientationShape = _interopRequireDefault(require("../shapes/ScrollableOrientationShape"));

var _DayOfWeekShape = _interopRequireDefault(require("../shapes/DayOfWeekShape"));

var _CalendarInfoPositionShape = _interopRequireDefault(require("../shapes/CalendarInfoPositionShape"));

var _constants = require("../constants");

var _DayTimePicker = _interopRequireDefault(require("./DayTimePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)({
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  isOutsideRange: _propTypes["default"].func,
  isDayBlocked: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // DayPicker props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  enableOutsideDays: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  orientation: _ScrollableOrientationShape["default"],
  withPortal: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes["default"].bool,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onOutsideClick: _propTypes["default"].func,
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  // accessibility
  onBlur: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool,
  showKeyboardShortcuts: _propTypes["default"].bool,
  onTab: _propTypes["default"].func,
  onShiftTab: _propTypes["default"].func,
  // i18n
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string,
  isRTL: _propTypes["default"].bool,
  //timePicker
  is24HourFormat: _propTypes["default"].bool,
  hidetime: _propTypes["default"].bool,
  disableMinutes: _propTypes["default"].bool
}) : {};;
var defaultProps = {
  date: undefined,
  // TODO: use null
  onDateChange: function onDateChange() {},
  focused: false,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  // DayPicker props
  renderMonthText: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: _constants.DAY_SIZE,
  verticalHeight: null,
  noBorder: false,
  verticalBorderSpacing: undefined,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var DayPickerSingleDateTimeController = /*#__PURE__*/function (_ref) {
  _inherits(DayPickerSingleDateTimeController, _ref);

  var _super = _createSuper(DayPickerSingleDateTimeController);

  function DayPickerSingleDateTimeController(props) {
    var _this;

    _classCallCheck(this, DayPickerSingleDateTimeController);

    _this = _super.call(this, props);
    _this.isTouchDevice = false;
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      selected: function selected(day) {
        return _this.isSelected(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    var date = _this.props.date;
    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays,
      time: Boolean(date) && date || (0, _moment["default"])('12:00', 'hh:mm')
    };
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_assertThisInitialized(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_assertThisInitialized(_this));
    _this.onDayClick = _this.onDayClick.bind(_assertThisInitialized(_this));
    _this.onTimeChange = _this.onTimeChange.bind(_assertThisInitialized(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_this));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_this));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DayPickerSingleDateTimeController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isTouchDevice = (0, _isTouchDevice["default"])();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var date = nextProps.date,
          focused = nextProps.focused,
          isOutsideRange = nextProps.isOutsideRange,
          isDayBlocked = nextProps.isDayBlocked,
          isDayHighlighted = nextProps.isDayHighlighted,
          initialVisibleMonth = nextProps.initialVisibleMonth,
          numberOfMonths = nextProps.numberOfMonths,
          enableOutsideDays = nextProps.enableOutsideDays;
      var _this$props = this.props,
          prevIsOutsideRange = _this$props.isOutsideRange,
          prevIsDayBlocked = _this$props.isDayBlocked,
          prevIsDayHighlighted = _this$props.isDayHighlighted,
          prevNumberOfMonths = _this$props.numberOfMonths,
          prevEnableOutsideDays = _this$props.enableOutsideDays,
          prevInitialVisibleMonth = _this$props.initialVisibleMonth,
          prevFocused = _this$props.focused,
          prevDate = _this$props.date;
      var visibleDays = this.state.visibleDays;
      var recomputeOutsideRange = false;
      var recomputeDayBlocked = false;
      var recomputeDayHighlighted = false;

      if (isOutsideRange !== prevIsOutsideRange) {
        this.modifiers['blocked-out-of-range'] = function (day) {
          return isOutsideRange(day);
        };

        recomputeOutsideRange = true;
      }

      if (isDayBlocked !== prevIsDayBlocked) {
        this.modifiers['blocked-calendar'] = function (day) {
          return isDayBlocked(day);
        };

        recomputeDayBlocked = true;
      }

      if (isDayHighlighted !== prevIsDayHighlighted) {
        this.modifiers['highlighted-calendar'] = function (day) {
          return isDayHighlighted(day);
        };

        recomputeDayHighlighted = true;
      }

      var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

      if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocused && focused) {
        var newMonthState = this.getStateForNewMonth(nextProps);
        var currentMonth = newMonthState.currentMonth;
        visibleDays = newMonthState.visibleDays;
        this.setState({
          currentMonth: currentMonth,
          visibleDays: visibleDays
        });
      }

      var didDateChange = date !== prevDate;
      var didFocusChange = focused !== prevFocused;
      var modifiers = {};

      if (didDateChange) {
        modifiers = this.deleteModifier(modifiers, prevDate, 'selected');
        modifiers = this.addModifier(modifiers, date, 'selected');
      }

      if (didFocusChange || recomputePropModifiers) {
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);

            if (_this2.isBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
            }

            if (didFocusChange || recomputeOutsideRange) {
              if (isOutsideRange(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
              }
            }

            if (didFocusChange || recomputeDayBlocked) {
              if (isDayBlocked(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
              }
            }

            if (didFocusChange || recomputeDayHighlighted) {
              if (isDayHighlighted(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
              }
            }
          });
        });
      }

      var today = (0, _moment["default"])();

      if (!(0, _isSameDay["default"])(this.today, today)) {
        modifiers = this.deleteModifier(modifiers, this.today, 'today');
        modifiers = this.addModifier(modifiers, today, 'today');
        this.today = today;
      }

      if (Object.keys(modifiers).length > 0) {
        this.setState({
          visibleDays: _objectSpread(_objectSpread({}, visibleDays), modifiers)
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.today = (0, _moment["default"])();
    }
  }, {
    key: "onDayClick",
    value: function onDayClick(selday, e) {
      if (e) e.preventDefault();
      if (this.isBlocked(selday)) return;
      var _this$props2 = this.props,
          onDateChange = _this$props2.onDateChange,
          keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
          onFocusChange = _this$props2.onFocusChange,
          onClose = _this$props2.onClose,
          hideTime = _this$props2.hideTime;
      var day = hideTime ? selday.clone().startOf('day') : selday.clone().set({
        hour: this.state.time.hour(),
        minute: this.state.time.minute()
      });
      onDateChange(day);

      if (!keepOpenOnDateSelect) {
        onFocusChange({
          focused: false
        });
        onClose({
          date: day
        });
      }
    }
  }, {
    key: "onDayMouseEnter",
    value: function onDayMouseEnter(day) {
      if (this.isTouchDevice) return;
      var _this$state = this.state,
          hoverDate = _this$state.hoverDate,
          visibleDays = _this$state.visibleDays;
      var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
      modifiers = this.addModifier(modifiers, day, 'hovered');
      this.setState({
        hoverDate: day,
        visibleDays: _objectSpread(_objectSpread({}, visibleDays), modifiers)
      });
    }
  }, {
    key: "onDayMouseLeave",
    value: function onDayMouseLeave() {
      var _this$state2 = this.state,
          hoverDate = _this$state2.hoverDate,
          visibleDays = _this$state2.visibleDays;
      if (this.isTouchDevice || !hoverDate) return;
      var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
      this.setState({
        hoverDate: null,
        visibleDays: _objectSpread(_objectSpread({}, visibleDays), modifiers)
      });
    }
  }, {
    key: "onPrevMonthClick",
    value: function onPrevMonthClick() {
      var _this$props3 = this.props,
          onPrevMonthClick = _this$props3.onPrevMonthClick,
          numberOfMonths = _this$props3.numberOfMonths,
          enableOutsideDays = _this$props3.enableOutsideDays;
      var _this$state3 = this.state,
          currentMonth = _this$state3.currentMonth,
          visibleDays = _this$state3.visibleDays;
      var newVisibleDays = {};
      Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
        newVisibleDays[month] = visibleDays[month];
      });
      var prevMonth = currentMonth.clone().subtract(1, 'month');
      var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays);
      this.setState({
        currentMonth: prevMonth,
        visibleDays: _objectSpread(_objectSpread({}, newVisibleDays), this.getModifiers(prevMonthVisibleDays))
      }, function () {
        onPrevMonthClick(prevMonth.clone());
      });
    }
  }, {
    key: "onNextMonthClick",
    value: function onNextMonthClick() {
      var _this$props4 = this.props,
          onNextMonthClick = _this$props4.onNextMonthClick,
          numberOfMonths = _this$props4.numberOfMonths,
          enableOutsideDays = _this$props4.enableOutsideDays;
      var _this$state4 = this.state,
          currentMonth = _this$state4.currentMonth,
          visibleDays = _this$state4.visibleDays;
      var newVisibleDays = {};
      Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
        newVisibleDays[month] = visibleDays[month];
      });
      var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
      var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays);
      var newCurrentMonth = currentMonth.clone().add(1, 'month');
      this.setState({
        currentMonth: newCurrentMonth,
        visibleDays: _objectSpread(_objectSpread({}, newVisibleDays), this.getModifiers(nextMonthVisibleDays))
      }, function () {
        onNextMonthClick(newCurrentMonth.clone());
      });
    }
  }, {
    key: "onTimeChange",
    value: function onTimeChange(time, type) {
      var _this$props5 = this.props,
          date = _this$props5.date,
          onDateChange = _this$props5.onDateChange;

      if (type) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          time: time
        }));

        if (date) {
          var date1 = date.clone().hour(time.hour()).minute(time.minute());
          onDateChange(date1);
        }
      }
    }
  }, {
    key: "onMonthChange",
    value: function onMonthChange(newMonth) {
      var _this$props6 = this.props,
          numberOfMonths = _this$props6.numberOfMonths,
          enableOutsideDays = _this$props6.enableOutsideDays,
          orientation = _this$props6.orientation;
      var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
      var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
      this.setState({
        currentMonth: newMonth.clone(),
        visibleDays: this.getModifiers(newVisibleDays)
      });
    }
  }, {
    key: "onYearChange",
    value: function onYearChange(newMonth) {
      var _this$props7 = this.props,
          numberOfMonths = _this$props7.numberOfMonths,
          enableOutsideDays = _this$props7.enableOutsideDays,
          orientation = _this$props7.orientation;
      var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
      var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
      this.setState({
        currentMonth: newMonth.clone(),
        visibleDays: this.getModifiers(newVisibleDays)
      });
    }
  }, {
    key: "getFirstFocusableDay",
    value: function getFirstFocusableDay(newMonth) {
      var _this3 = this;

      var _this$props8 = this.props,
          date = _this$props8.date,
          numberOfMonths = _this$props8.numberOfMonths;
      var focusedDate = newMonth.clone().startOf('month');

      if (date) {
        focusedDate = date.clone();
      }

      if (this.isBlocked(focusedDate)) {
        var days = [];
        var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
        var currentDay = focusedDate.clone();

        while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
          currentDay = currentDay.clone().add(1, 'day');
          days.push(currentDay);
        }

        var viableDays = days.filter(function (day) {
          return !_this3.isBlocked(day) && (0, _isAfterDay["default"])(day, focusedDate);
        });

        if (viableDays.length > 0) {
          var _viableDays = _slicedToArray(viableDays, 1);

          focusedDate = _viableDays[0];
        }
      }

      return focusedDate;
    }
  }, {
    key: "getModifiers",
    value: function getModifiers(visibleDays) {
      var _this4 = this;

      var modifiers = {};
      Object.keys(visibleDays).forEach(function (month) {
        modifiers[month] = {};
        visibleDays[month].forEach(function (day) {
          modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
        });
      });
      return modifiers;
    }
  }, {
    key: "getModifiersForDay",
    value: function getModifiersForDay(day) {
      var _this5 = this;

      return new Set(Object.keys(this.modifiers).filter(function (modifier) {
        return _this5.modifiers[modifier](day);
      }));
    }
  }, {
    key: "getStateForNewMonth",
    value: function getStateForNewMonth(nextProps) {
      var _this6 = this;

      var initialVisibleMonth = nextProps.initialVisibleMonth,
          date = nextProps.date,
          numberOfMonths = nextProps.numberOfMonths,
          enableOutsideDays = nextProps.enableOutsideDays;
      var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
        return date;
      } : function () {
        return _this6.today;
      });
      var currentMonth = initialVisibleMonthThunk();
      var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays));
      return {
        currentMonth: currentMonth,
        visibleDays: visibleDays
      };
    }
  }, {
    key: "addModifier",
    value: function addModifier(updatedDays, day, modifier) {
      var _this$props9 = this.props,
          numberOfVisibleMonths = _this$props9.numberOfMonths,
          enableOutsideDays = _this$props9.enableOutsideDays,
          orientation = _this$props9.orientation;
      var _this$state5 = this.state,
          firstVisibleMonth = _this$state5.currentMonth,
          visibleDays = _this$state5.visibleDays;
      var currentMonth = firstVisibleMonth;
      var numberOfMonths = numberOfVisibleMonths;

      if (orientation === _constants.VERTICAL_SCROLLABLE) {
        numberOfMonths = Object.keys(visibleDays).length;
      } else {
        currentMonth = currentMonth.clone().subtract(1, 'month');
        numberOfMonths += 2;
      }

      if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
        return updatedDays;
      }

      var iso = (0, _toISODateString["default"])(day);

      var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

      if (enableOutsideDays) {
        var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
          return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
        });
        updatedDaysAfterAddition = monthsToUpdate.reduce(function (days, monthIso) {
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers.add(modifier);
          return _objectSpread(_objectSpread({}, days), {}, _defineProperty({}, monthIso, _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers))));
        }, updatedDaysAfterAddition);
      } else {
        var monthIso = (0, _toISOMonthString["default"])(day);
        var month = updatedDays[monthIso] || visibleDays[monthIso];
        var modifiers = new Set(month[iso]);
        modifiers.add(modifier);
        updatedDaysAfterAddition = _objectSpread(_objectSpread({}, updatedDaysAfterAddition), {}, _defineProperty({}, monthIso, _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers))));
      }

      return updatedDaysAfterAddition;
    }
  }, {
    key: "deleteModifier",
    value: function deleteModifier(updatedDays, day, modifier) {
      var _this$props10 = this.props,
          numberOfVisibleMonths = _this$props10.numberOfMonths,
          enableOutsideDays = _this$props10.enableOutsideDays,
          orientation = _this$props10.orientation;
      var _this$state6 = this.state,
          firstVisibleMonth = _this$state6.currentMonth,
          visibleDays = _this$state6.visibleDays;
      var currentMonth = firstVisibleMonth;
      var numberOfMonths = numberOfVisibleMonths;

      if (orientation === _constants.VERTICAL_SCROLLABLE) {
        numberOfMonths = Object.keys(visibleDays).length;
      } else {
        currentMonth = currentMonth.clone().subtract(1, 'month');
        numberOfMonths += 2;
      }

      if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
        return updatedDays;
      }

      var iso = (0, _toISODateString["default"])(day);

      var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

      if (enableOutsideDays) {
        var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
          return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
        });
        updatedDaysAfterDeletion = monthsToUpdate.reduce(function (days, monthIso) {
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers["delete"](modifier);
          return _objectSpread(_objectSpread({}, days), {}, _defineProperty({}, monthIso, _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers))));
        }, updatedDaysAfterDeletion);
      } else {
        var monthIso = (0, _toISOMonthString["default"])(day);
        var month = updatedDays[monthIso] || visibleDays[monthIso];
        var modifiers = new Set(month[iso]);
        modifiers["delete"](modifier);
        updatedDaysAfterDeletion = _objectSpread(_objectSpread({}, updatedDaysAfterDeletion), {}, _defineProperty({}, monthIso, _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers))));
      }

      return updatedDaysAfterDeletion;
    }
  }, {
    key: "isBlocked",
    value: function isBlocked(day) {
      var _this$props11 = this.props,
          isDayBlocked = _this$props11.isDayBlocked,
          isOutsideRange = _this$props11.isOutsideRange;
      return isDayBlocked(day) || isOutsideRange(day);
    }
  }, {
    key: "isHovered",
    value: function isHovered(day) {
      var _ref2 = this.state || {},
          hoverDate = _ref2.hoverDate;

      return (0, _isSameDay["default"])(day, hoverDate);
    }
  }, {
    key: "isSelected",
    value: function isSelected(day) {
      var date = this.props.date;
      return (0, _isSameDay["default"])(day, date);
    }
  }, {
    key: "isToday",
    value: function isToday(day) {
      return (0, _isSameDay["default"])(day, this.today);
    }
  }, {
    key: "isFirstDayOfWeek",
    value: function isFirstDayOfWeek(day) {
      var firstDayOfWeek = this.props.firstDayOfWeek;
      return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
    }
  }, {
    key: "isLastDayOfWeek",
    value: function isLastDayOfWeek(day) {
      var firstDayOfWeek = this.props.firstDayOfWeek;
      return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props12 = this.props,
          numberOfMonths = _this$props12.numberOfMonths,
          orientation = _this$props12.orientation,
          monthFormat = _this$props12.monthFormat,
          renderMonthText = _this$props12.renderMonthText,
          navPrev = _this$props12.navPrev,
          navNext = _this$props12.navNext,
          onOutsideClick = _this$props12.onOutsideClick,
          onShiftTab = _this$props12.onShiftTab,
          onTab = _this$props12.onTab,
          withPortal = _this$props12.withPortal,
          focused = _this$props12.focused,
          enableOutsideDays = _this$props12.enableOutsideDays,
          hideKeyboardShortcutsPanel = _this$props12.hideKeyboardShortcutsPanel,
          daySize = _this$props12.daySize,
          firstDayOfWeek = _this$props12.firstDayOfWeek,
          renderCalendarDay = _this$props12.renderCalendarDay,
          renderDayContents = _this$props12.renderDayContents,
          renderCalendarInfo = _this$props12.renderCalendarInfo,
          renderMonthElement = _this$props12.renderMonthElement,
          calendarInfoPosition = _this$props12.calendarInfoPosition,
          isFocused = _this$props12.isFocused,
          isRTL = _this$props12.isRTL,
          phrases = _this$props12.phrases,
          dayAriaLabelFormat = _this$props12.dayAriaLabelFormat,
          onBlur = _this$props12.onBlur,
          showKeyboardShortcuts = _this$props12.showKeyboardShortcuts,
          weekDayFormat = _this$props12.weekDayFormat,
          verticalHeight = _this$props12.verticalHeight,
          noBorder = _this$props12.noBorder,
          transitionDuration = _this$props12.transitionDuration,
          verticalBorderSpacing = _this$props12.verticalBorderSpacing,
          horizontalMonthPadding = _this$props12.horizontalMonthPadding,
          hideTime = _this$props12.hideTime,
          is24HourFormat = _this$props12.is24HourFormat,
          disableMinutes = _this$props12.disableMinutes;
      var _this$state7 = this.state,
          currentMonth = _this$state7.currentMonth,
          visibleDays = _this$state7.visibleDays;
      return /*#__PURE__*/_react["default"].createElement(_DayTimePicker["default"], {
        singleTime: this.state.time,
        hideTime: hideTime,
        is24HourFormat: is24HourFormat,
        disableMinutes: disableMinutes,
        onTimeChange: this.onTimeChange,
        focused: focused,
        orientation: orientation,
        enableOutsideDays: enableOutsideDays,
        modifiers: visibleDays,
        numberOfMonths: numberOfMonths,
        onDayClick: this.onDayClick,
        onDayMouseEnter: this.onDayMouseEnter,
        onDayMouseLeave: this.onDayMouseLeave,
        onPrevMonthClick: this.onPrevMonthClick,
        onNextMonthClick: this.onNextMonthClick,
        onMonthChange: this.onMonthChange,
        onYearChange: this.onYearChange,
        monthFormat: monthFormat,
        withPortal: withPortal,
        hidden: !focused,
        hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
        initialVisibleMonth: function initialVisibleMonth() {
          return currentMonth;
        },
        firstDayOfWeek: firstDayOfWeek,
        onOutsideClick: onOutsideClick,
        navPrev: navPrev,
        navNext: navNext,
        renderMonthText: renderMonthText,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderCalendarInfo: renderCalendarInfo,
        renderMonthElement: renderMonthElement,
        calendarInfoPosition: calendarInfoPosition,
        isFocused: isFocused,
        getFirstFocusableDay: this.getFirstFocusableDay,
        onBlur: onBlur,
        onTab: onTab,
        onShiftTab: onShiftTab,
        phrases: phrases,
        daySize: daySize,
        isRTL: isRTL,
        showKeyboardShortcuts: showKeyboardShortcuts,
        weekDayFormat: weekDayFormat,
        dayAriaLabelFormat: dayAriaLabelFormat,
        verticalHeight: verticalHeight,
        noBorder: noBorder,
        transitionDuration: transitionDuration,
        verticalBorderSpacing: verticalBorderSpacing,
        horizontalMonthPadding: horizontalMonthPadding
      });
    }
  }]);

  return DayPickerSingleDateTimeController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayPickerSingleDateTimeController;
DayPickerSingleDateTimeController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayPickerSingleDateTimeController.defaultProps = defaultProps;