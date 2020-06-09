"use strict";

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

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _isNextDay = _interopRequireDefault(require("../utils/isNextDay"));

var _isSameDay = _interopRequireDefault(require("../utils/isSameDay"));

var _isAfterDay = _interopRequireDefault(require("../utils/isAfterDay"));

var _isBeforeDay = _interopRequireDefault(require("../utils/isBeforeDay"));

var _getVisibleDays = _interopRequireDefault(require("../utils/getVisibleDays"));

var _isDayVisible = _interopRequireDefault(require("../utils/isDayVisible"));

var _getSelectedDateOffset = _interopRequireDefault(require("../utils/getSelectedDateOffset"));

var _toISODateString = _interopRequireDefault(require("../utils/toISODateString"));

var _toISOMonthString = _interopRequireDefault(require("../utils/toISOMonthString"));

var _DisabledShape = _interopRequireDefault(require("../shapes/DisabledShape"));

var _FocusedInputShape = _interopRequireDefault(require("../shapes/FocusedInputShape"));

var _ScrollableOrientationShape = _interopRequireDefault(require("../shapes/ScrollableOrientationShape"));

var _DayOfWeekShape = _interopRequireDefault(require("../shapes/DayOfWeekShape"));

var _CalendarInfoPositionShape = _interopRequireDefault(require("../shapes/CalendarInfoPositionShape"));

var _constants = require("../constants");

var _DayTimePicker = _interopRequireDefault(require("./DayTimePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)({
  startDate: _reactMomentProptypes["default"].momentObj,
  endDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func,
  startDateOffset: _propTypes["default"].func,
  endDateOffset: _propTypes["default"].func,
  minDate: _reactMomentProptypes["default"].momentObj,
  maxDate: _reactMomentProptypes["default"].momentObj,
  focusedInput: _FocusedInputShape["default"],
  onFocusChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  minimumNights: _propTypes["default"].number,
  disabled: _DisabledShape["default"],
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
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes["default"].bool,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  noNavButtons: _propTypes["default"].bool,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onOutsideClick: _propTypes["default"].func,
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  firstDayOfWeek: _DayOfWeekShape["default"],
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
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
  displayRangeProp: _propTypes["default"].object,
  // Timepicker props            
  is24HourFormat: _propTypes["default"].bool,
  disableMinutes: _propTypes["default"].bool,
  hideTime: _propTypes["default"].bool
}) : {};;
var defaultProps = {
  startDate: undefined,
  // TODO: use null
  endDate: undefined,
  // TODO: use null
  minDate: null,
  maxDate: null,
  onDatesChange: function onDatesChange() {},
  startDateOffset: undefined,
  endDateOffset: undefined,
  focusedInput: null,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  minimumNights: 1,
  disabled: false,
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
  daySize: _constants.DAY_SIZE,
  navPrev: null,
  navNext: null,
  noNavButtons: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  firstDayOfWeek: null,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
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
  isRTL: false,
  displayRangeProp: {}
};

var getChooseAvailableDatePhrase = function getChooseAvailableDatePhrase(phrases, focusedInput) {
  if (focusedInput === _constants.START_DATE) {
    return phrases.chooseAvailableStartDate;
  }

  if (focusedInput === _constants.END_DATE) {
    return phrases.chooseAvailableEndDate;
  }

  return phrases.chooseAvailableDate;
};

var DayTimePickerRangeController = /*#__PURE__*/function (_ref) {
  _inherits(DayTimePickerRangeController, _ref);

  var _super = _createSuper(DayTimePickerRangeController);

  _createClass(DayTimePickerRangeController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function DayTimePickerRangeController(props) {
    var _this;

    _classCallCheck(this, DayTimePickerRangeController);

    _this = _super.call(this, props);
    _this.isTouchDevice = (0, _isTouchDevice["default"])();
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
      'selected-start': function selectedStart(day) {
        return _this.isStartDate(day);
      },
      'selected-end': function selectedEnd(day) {
        return _this.isEndDate(day);
      },
      'blocked-minimum-nights': function blockedMinimumNights(day) {
        return _this.doesNotMeetMinimumNights(day);
      },
      'selected-span': function selectedSpan(day) {
        return _this.isInSelectedSpan(day);
      },
      'last-in-range': function lastInRange(day) {
        return _this.isLastInRange(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      'hovered-span': function hoveredSpan(day) {
        return _this.isInHoveredSpan(day);
      },
      'hovered-offset': function hoveredOffset(day) {
        return _this.isInHoveredSpan(day);
      },
      'after-hovered-start': function afterHoveredStart(day) {
        return _this.isDayAfterHoveredStartDate(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      }
    };
    var _this$props = _this.props,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays; // initialize phrases
    // set the appropriate CalendarDay phrase based on focusedInput


    var chooseAvailableDate = getChooseAvailableDatePhrase(props.phrases, props.focusedInput);
    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      phrases: _objectSpread(_objectSpread({}, props.phrases), {}, {
        chooseAvailableDate: chooseAvailableDate
      }),
      visibleDays: visibleDays,
      disablePrev: _this.shouldDisableMonthNavigation(props.minDate, currentMonth),
      disableNext: _this.shouldDisableMonthNavigation(props.maxDate, currentMonth),
      startTime: Boolean(startDate) && startDate || (0, _moment["default"])('12:00', 'hh:mm'),
      endTime: Boolean(endDate) && endDate || (0, _moment["default"])('12:00', 'hh:mm')
    };
    _this.onDayClick = _this.onDayClick.bind(_assertThisInitialized(_this));
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_assertThisInitialized(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_assertThisInitialized(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_this));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_this));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_this));
    _this.onMultiplyScrollableMonths = _this.onMultiplyScrollableMonths.bind(_assertThisInitialized(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_assertThisInitialized(_this));
    _this.onTimeChange = _this.onTimeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DayTimePickerRangeController, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var startDate = nextProps.startDate,
          endDate = nextProps.endDate,
          focusedInput = nextProps.focusedInput,
          minimumNights = nextProps.minimumNights,
          isOutsideRange = nextProps.isOutsideRange,
          isDayBlocked = nextProps.isDayBlocked,
          isDayHighlighted = nextProps.isDayHighlighted,
          phrases = nextProps.phrases,
          initialVisibleMonth = nextProps.initialVisibleMonth,
          numberOfMonths = nextProps.numberOfMonths,
          enableOutsideDays = nextProps.enableOutsideDays;
      var _this$props2 = this.props,
          prevStartDate = _this$props2.startDate,
          prevEndDate = _this$props2.endDate,
          prevFocusedInput = _this$props2.focusedInput,
          prevMinimumNights = _this$props2.minimumNights,
          prevIsOutsideRange = _this$props2.isOutsideRange,
          prevIsDayBlocked = _this$props2.isDayBlocked,
          prevIsDayHighlighted = _this$props2.isDayHighlighted,
          prevPhrases = _this$props2.phrases,
          prevInitialVisibleMonth = _this$props2.initialVisibleMonth,
          prevNumberOfMonths = _this$props2.numberOfMonths,
          prevEnableOutsideDays = _this$props2.enableOutsideDays;
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
      var didStartDateChange = startDate !== prevStartDate;
      var didEndDateChange = endDate !== prevEndDate;
      var didFocusChange = focusedInput !== prevFocusedInput;

      if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocusedInput && didFocusChange) {
        var newMonthState = this.getStateForNewMonth(nextProps);
        var currentMonth = newMonthState.currentMonth;
        visibleDays = newMonthState.visibleDays;
        this.setState({
          currentMonth: currentMonth,
          visibleDays: visibleDays
        });
      }

      var modifiers = {};

      if (didStartDateChange) {
        modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start');
        modifiers = this.addModifier(modifiers, startDate, 'selected-start');

        if (prevStartDate) {
          var startSpan = prevStartDate.clone().add(1, 'day');
          var endSpan = prevStartDate.clone().add(prevMinimumNights + 1, 'days');
          modifiers = this.deleteModifierFromRange(modifiers, startSpan, endSpan, 'after-hovered-start');
        }
      }

      if (didEndDateChange) {
        modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end');
        modifiers = this.addModifier(modifiers, endDate, 'selected-end');
      }

      if (didStartDateChange || didEndDateChange) {
        if (prevStartDate && prevEndDate) {
          modifiers = this.deleteModifierFromRange(modifiers, prevStartDate, prevEndDate.clone().add(1, 'day'), 'selected-span');
        }

        if (startDate && endDate) {
          modifiers = this.deleteModifierFromRange(modifiers, startDate, endDate.clone().add(1, 'day'), 'hovered-span');
          modifiers = this.addModifierToRange(modifiers, startDate.clone().add(1, 'day'), endDate, 'selected-span');
        }
      }

      if (!this.isTouchDevice && didStartDateChange && startDate && !endDate) {
        var _startSpan = startDate.clone().add(1, 'day');

        var _endSpan = startDate.clone().add(minimumNights + 1, 'days');

        modifiers = this.addModifierToRange(modifiers, _startSpan, _endSpan, 'after-hovered-start');
      }

      if (prevMinimumNights > 0) {
        if (didFocusChange || didStartDateChange || minimumNights !== prevMinimumNights) {
          var _startSpan2 = prevStartDate || this.today;

          modifiers = this.deleteModifierFromRange(modifiers, _startSpan2, _startSpan2.clone().add(prevMinimumNights, 'days'), 'blocked-minimum-nights');
          modifiers = this.deleteModifierFromRange(modifiers, _startSpan2, _startSpan2.clone().add(prevMinimumNights, 'days'), 'blocked');
        }
      }

      if (didFocusChange || recomputePropModifiers) {
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);
            var isBlocked = false;

            if (didFocusChange || recomputeOutsideRange) {
              if (isOutsideRange(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
                isBlocked = true;
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
              }
            }

            if (didFocusChange || recomputeDayBlocked) {
              if (isDayBlocked(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
                isBlocked = true;
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
              }
            }

            if (isBlocked) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
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

      if (minimumNights > 0 && startDate && focusedInput === _constants.END_DATE) {
        modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
        modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked');
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

      if (didFocusChange || phrases !== prevPhrases) {
        // set the appropriate CalendarDay phrase based on focusedInput
        var chooseAvailableDate = getChooseAvailableDatePhrase(phrases, focusedInput);
        this.setState({
          phrases: _objectSpread(_objectSpread({}, phrases), {}, {
            chooseAvailableDate: chooseAvailableDate
          })
        });
      }

      if (didStartDateChange || didEndDateChange) {
        this.setState({
          startTime: Boolean(startDate) && startDate || (0, _moment["default"])('12:00', 'hh:mm'),
          endTime: Boolean(endDate) && endDate || (0, _moment["default"])('12:00', 'hh:mm')
        });
      }
    }
  }, {
    key: "onDayClick",
    value: function onDayClick(selDay, e) {
      var _this$props3 = this.props,
          keepOpenOnDateSelect = _this$props3.keepOpenOnDateSelect,
          minimumNights = _this$props3.minimumNights,
          onBlur = _this$props3.onBlur,
          focusedInput = _this$props3.focusedInput,
          onFocusChange = _this$props3.onFocusChange,
          onClose = _this$props3.onClose,
          onDatesChange = _this$props3.onDatesChange,
          startDateOffset = _this$props3.startDateOffset,
          endDateOffset = _this$props3.endDateOffset,
          disabled = _this$props3.disabled,
          hideTime = _this$props3.hideTime;
      if (e) e.preventDefault();
      if (this.isBlocked(selDay)) return;
      var _this$props4 = this.props,
          startDate = _this$props4.startDate,
          endDate = _this$props4.endDate;
      var day;

      if (focusedInput === _constants.START_DATE && startDate) {
        day = hideTime ? selDay.clone().set({
          hour: startDate.hour(),
          minute: startDate.minute()
        }) : selDay.clone().set({
          hour: this.state.startTime.hour(),
          minute: this.state.startTime.minute()
        });
      } else if (focusedInput === _constants.END_DATE && endDate) {
        day = hideTime ? selDay.clone().set({
          hour: endDate.hour(),
          minute: endDate.minute()
        }) : selDay.clone().set({
          hour: this.state.endTime.hour(),
          minute: this.state.endTime.minute()
        });
      } else if (focusedInput) {
        day = selDay;
      }

      if (startDateOffset || endDateOffset) {
        startDate = (0, _getSelectedDateOffset["default"])(startDateOffset, selDay);
        endDate = (0, _getSelectedDateOffset["default"])(endDateOffset, selDay);

        if (this.isBlocked(startDate) || this.isBlocked(endDate)) {
          return;
        }

        if (!keepOpenOnDateSelect) {
          onFocusChange(null);
          onClose({
            startDate: startDate,
            endDate: endDate
          });
        }
      } else if (focusedInput === _constants.START_DATE) {
        var lastAllowedStartDate = endDate && endDate.clone().subtract(minimumNights, 'days');
        var isStartDateAfterEndDate = (0, _isBeforeDay["default"])(lastAllowedStartDate, day) || (0, _isAfterDay["default"])(startDate, endDate);
        var isEndDateDisabled = disabled === _constants.END_DATE;

        if (!isEndDateDisabled || !isStartDateAfterEndDate) {
          startDate = day;

          if (isStartDateAfterEndDate) {
            endDate = null;
          }
        }

        if (isEndDateDisabled && !isStartDateAfterEndDate) {
          onFocusChange(null);
          onClose({
            startDate: startDate,
            endDate: endDate
          });
        } else if (!isEndDateDisabled) {
          onFocusChange(_constants.END_DATE);
        }
      } else if (focusedInput === _constants.END_DATE) {
        var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

        if (!startDate) {
          endDate = day;
          onFocusChange(_constants.START_DATE);
        } else if ((0, _isInclusivelyAfterDay["default"])(day, firstAllowedEndDate)) {
          endDate = day;

          if (!keepOpenOnDateSelect) {
            onFocusChange(null);
            onClose({
              startDate: startDate,
              endDate: endDate
            });
          }
        } else if (disabled !== _constants.START_DATE) {
          startDate = day;
          endDate = null;
        }
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
      onBlur();
    }
  }, {
    key: "onDayMouseEnter",
    value: function onDayMouseEnter(day) {
      /* eslint react/destructuring-assignment: 1 */
      if (this.isTouchDevice) return;
      var _this$props5 = this.props,
          startDate = _this$props5.startDate,
          endDate = _this$props5.endDate,
          focusedInput = _this$props5.focusedInput,
          minimumNights = _this$props5.minimumNights,
          startDateOffset = _this$props5.startDateOffset,
          endDateOffset = _this$props5.endDateOffset;
      var _this$state = this.state,
          hoverDate = _this$state.hoverDate,
          visibleDays = _this$state.visibleDays,
          dateOffset = _this$state.dateOffset;
      var nextDateOffset = null;

      if (focusedInput) {
        var hasOffset = startDateOffset || endDateOffset;
        var modifiers = {};

        if (hasOffset) {
          var start = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
          var end = (0, _getSelectedDateOffset["default"])(endDateOffset, day, function (rangeDay) {
            return rangeDay.add(1, 'day');
          });
          nextDateOffset = {
            start: start,
            end: end
          }; // eslint-disable-next-line react/destructuring-assignment

          if (dateOffset && dateOffset.start && dateOffset.end) {
            modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
          }

          modifiers = this.addModifierToRange(modifiers, start, end, 'hovered-offset');
        }

        if (!hasOffset) {
          modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');
          modifiers = this.addModifier(modifiers, day, 'hovered');

          if (startDate && !endDate && focusedInput === _constants.END_DATE) {
            if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
              var endSpan = hoverDate.clone().add(1, 'day');
              modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
            }

            if (!this.isBlocked(day) && (0, _isAfterDay["default"])(day, startDate)) {
              var _endSpan2 = day.clone().add(1, 'day');

              modifiers = this.addModifierToRange(modifiers, startDate, _endSpan2, 'hovered-span');
            }
          }

          if (!startDate && endDate && focusedInput === _constants.START_DATE) {
            if ((0, _isBeforeDay["default"])(hoverDate, endDate)) {
              modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
            }

            if (!this.isBlocked(day) && (0, _isBeforeDay["default"])(day, endDate)) {
              modifiers = this.addModifierToRange(modifiers, day, endDate, 'hovered-span');
            }
          }

          if (startDate) {
            var startSpan = startDate.clone().add(1, 'day');

            var _endSpan3 = startDate.clone().add(minimumNights + 1, 'days');

            modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan3, 'after-hovered-start');

            if ((0, _isSameDay["default"])(day, startDate)) {
              var newStartSpan = startDate.clone().add(1, 'day');
              var newEndSpan = startDate.clone().add(minimumNights + 1, 'days');
              modifiers = this.addModifierToRange(modifiers, newStartSpan, newEndSpan, 'after-hovered-start');
            }
          }
        }

        this.setState({
          hoverDate: day,
          dateOffset: nextDateOffset,
          visibleDays: _objectSpread(_objectSpread({}, visibleDays), modifiers)
        });
      }
    }
  }, {
    key: "onDayMouseLeave",
    value: function onDayMouseLeave(day) {
      var _this$props6 = this.props,
          startDate = _this$props6.startDate,
          endDate = _this$props6.endDate,
          minimumNights = _this$props6.minimumNights;
      var _this$state2 = this.state,
          hoverDate = _this$state2.hoverDate,
          visibleDays = _this$state2.visibleDays,
          dateOffset = _this$state2.dateOffset;
      if (this.isTouchDevice || !hoverDate) return;
      var modifiers = {};
      modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');

      if (dateOffset) {
        modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
      }

      if (startDate && !endDate && (0, _isAfterDay["default"])(hoverDate, startDate)) {
        var endSpan = hoverDate.clone().add(1, 'day');
        modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
      }

      if (!startDate && endDate && (0, _isAfterDay["default"])(endDate, hoverDate)) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
      }

      if (startDate && (0, _isSameDay["default"])(day, startDate)) {
        var startSpan = startDate.clone().add(1, 'day');

        var _endSpan4 = startDate.clone().add(minimumNights + 1, 'days');

        modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan4, 'after-hovered-start');
      }

      this.setState({
        hoverDate: null,
        visibleDays: _objectSpread(_objectSpread({}, visibleDays), modifiers)
      });
    }
  }, {
    key: "onPrevMonthClick",
    value: function onPrevMonthClick() {
      var _this$props7 = this.props,
          enableOutsideDays = _this$props7.enableOutsideDays,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          numberOfMonths = _this$props7.numberOfMonths,
          onPrevMonthClick = _this$props7.onPrevMonthClick;
      var _this$state3 = this.state,
          currentMonth = _this$state3.currentMonth,
          visibleDays = _this$state3.visibleDays;
      var newVisibleDays = {};
      Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
        newVisibleDays[month] = visibleDays[month];
      });
      var prevMonth = currentMonth.clone().subtract(2, 'months');
      var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays, true);
      var newCurrentMonth = currentMonth.clone().subtract(1, 'month');
      this.setState({
        currentMonth: newCurrentMonth,
        disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
        disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
        visibleDays: _objectSpread(_objectSpread({}, newVisibleDays), this.getModifiers(prevMonthVisibleDays))
      }, function () {
        onPrevMonthClick(newCurrentMonth.clone());
      });
    }
  }, {
    key: "onNextMonthClick",
    value: function onNextMonthClick() {
      var _this$props8 = this.props,
          enableOutsideDays = _this$props8.enableOutsideDays,
          maxDate = _this$props8.maxDate,
          minDate = _this$props8.minDate,
          numberOfMonths = _this$props8.numberOfMonths,
          onNextMonthClick = _this$props8.onNextMonthClick;
      var _this$state4 = this.state,
          currentMonth = _this$state4.currentMonth,
          visibleDays = _this$state4.visibleDays;
      var newVisibleDays = {};
      Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
        newVisibleDays[month] = visibleDays[month];
      });
      var nextMonth = currentMonth.clone().add(numberOfMonths + 1, 'month');
      var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays, true);
      var newCurrentMonth = currentMonth.clone().add(1, 'month');
      this.setState({
        currentMonth: newCurrentMonth,
        disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
        disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
        visibleDays: _objectSpread(_objectSpread({}, newVisibleDays), this.getModifiers(nextMonthVisibleDays))
      }, function () {
        onNextMonthClick(newCurrentMonth.clone());
      });
    }
  }, {
    key: "onTimeChange",
    value: function onTimeChange(time, type) {
      var _this$props9 = this.props,
          startDate = _this$props9.startDate,
          endDate = _this$props9.endDate,
          onDatesChange = _this$props9.onDatesChange;

      if (type === _constants.START_DATE) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          startTime: time
        }));

        if (startDate) {
          var startDate1 = startDate.clone().hour(time.hour()).minute(time.minute());
          onDatesChange({
            startDate: startDate1,
            endDate: endDate
          });
        }
      } else if (type === _constants.END_DATE) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          endTime: time
        }));

        if (endDate) {
          var endDate1 = endDate.clone().hour(time.hour()).minute(time.minute());
          onDatesChange({
            startDate: startDate,
            endDate: endDate1
          });
        }
      }
    }
  }, {
    key: "onMonthChange",
    value: function onMonthChange(newMonth) {
      var _this$props10 = this.props,
          numberOfMonths = _this$props10.numberOfMonths,
          enableOutsideDays = _this$props10.enableOutsideDays,
          orientation = _this$props10.orientation,
          maxDate = _this$props10.maxDate,
          minDate = _this$props10.minDate;
      var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
      var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
      this.setState({
        currentMonth: newMonth.clone(),
        disablePrev: this.shouldDisableMonthNavigation(minDate, newMonth.clone()),
        disableNext: this.shouldDisableMonthNavigation(maxDate, newMonth.clone()),
        visibleDays: this.getModifiers(newVisibleDays)
      });
    }
  }, {
    key: "onYearChange",
    value: function onYearChange(newMonth) {
      var _this$props11 = this.props,
          numberOfMonths = _this$props11.numberOfMonths,
          enableOutsideDays = _this$props11.enableOutsideDays,
          orientation = _this$props11.orientation,
          maxDate = _this$props11.maxDate,
          minDate = _this$props11.minDate;
      var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
      var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
      this.setState({
        currentMonth: newMonth.clone(),
        disablePrev: this.shouldDisableMonthNavigation(minDate, newMonth.clone()),
        disableNext: this.shouldDisableMonthNavigation(maxDate, newMonth.clone()),
        visibleDays: this.getModifiers(newVisibleDays)
      });
    }
  }, {
    key: "onMultiplyScrollableMonths",
    value: function onMultiplyScrollableMonths() {
      var _this$props12 = this.props,
          numberOfMonths = _this$props12.numberOfMonths,
          enableOutsideDays = _this$props12.enableOutsideDays;
      var _this$state5 = this.state,
          currentMonth = _this$state5.currentMonth,
          visibleDays = _this$state5.visibleDays;
      var numberOfVisibleMonths = Object.keys(visibleDays).length;
      var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
      var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
      this.setState({
        visibleDays: _objectSpread(_objectSpread({}, visibleDays), this.getModifiers(newVisibleDays))
      });
    }
  }, {
    key: "getFirstFocusableDay",
    value: function getFirstFocusableDay(newMonth) {
      var _this3 = this;

      var _this$props13 = this.props,
          startDate = _this$props13.startDate,
          endDate = _this$props13.endDate,
          focusedInput = _this$props13.focusedInput,
          minimumNights = _this$props13.minimumNights,
          numberOfMonths = _this$props13.numberOfMonths;
      var focusedDate = newMonth.clone().startOf('month');

      if (focusedInput === _constants.START_DATE && startDate) {
        focusedDate = startDate.clone();
      } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
        focusedDate = startDate.clone().add(minimumNights, 'days');
      } else if (focusedInput === _constants.END_DATE && endDate) {
        focusedDate = endDate.clone();
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
          return !_this3.isBlocked(day);
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
          numberOfMonths = nextProps.numberOfMonths,
          enableOutsideDays = nextProps.enableOutsideDays,
          orientation = nextProps.orientation,
          startDate = nextProps.startDate;
      var initialVisibleMonthThunk = initialVisibleMonth || (startDate ? function () {
        return startDate;
      } : function () {
        return _this6.today;
      });
      var currentMonth = initialVisibleMonthThunk();
      var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
      var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
      return {
        currentMonth: currentMonth,
        visibleDays: visibleDays
      };
    }
  }, {
    key: "shouldDisableMonthNavigation",
    value: function shouldDisableMonthNavigation(date, visibleMonth) {
      if (!date) return false;
      var _this$props14 = this.props,
          numberOfMonths = _this$props14.numberOfMonths,
          enableOutsideDays = _this$props14.enableOutsideDays;
      return (0, _isDayVisible["default"])(date, visibleMonth, numberOfMonths, enableOutsideDays);
    }
  }, {
    key: "addModifier",
    value: function addModifier(updatedDays, day, modifier) {
      var _this$props15 = this.props,
          numberOfVisibleMonths = _this$props15.numberOfMonths,
          enableOutsideDays = _this$props15.enableOutsideDays,
          orientation = _this$props15.orientation;
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
    key: "addModifierToRange",
    value: function addModifierToRange(updatedDays, start, end, modifier) {
      var days = updatedDays;
      var spanStart = start.clone();

      while ((0, _isBeforeDay["default"])(spanStart, end)) {
        days = this.addModifier(days, spanStart, modifier);
        spanStart = spanStart.clone().add(1, 'day');
      }

      return days;
    }
  }, {
    key: "deleteModifier",
    value: function deleteModifier(updatedDays, day, modifier) {
      var _this$props16 = this.props,
          numberOfVisibleMonths = _this$props16.numberOfMonths,
          enableOutsideDays = _this$props16.enableOutsideDays,
          orientation = _this$props16.orientation;
      var _this$state7 = this.state,
          firstVisibleMonth = _this$state7.currentMonth,
          visibleDays = _this$state7.visibleDays;
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
    key: "deleteModifierFromRange",
    value: function deleteModifierFromRange(updatedDays, start, end, modifier) {
      var days = updatedDays;
      var spanStart = start.clone();

      while ((0, _isBeforeDay["default"])(spanStart, end)) {
        days = this.deleteModifier(days, spanStart, modifier);
        spanStart = spanStart.clone().add(1, 'day');
      }

      return days;
    }
  }, {
    key: "doesNotMeetMinimumNights",
    value: function doesNotMeetMinimumNights(day) {
      var _this$props17 = this.props,
          startDate = _this$props17.startDate,
          isOutsideRange = _this$props17.isOutsideRange,
          focusedInput = _this$props17.focusedInput,
          minimumNights = _this$props17.minimumNights;
      if (focusedInput !== _constants.END_DATE) return false;

      if (startDate) {
        var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
        return dayDiff < minimumNights && dayDiff >= 0;
      }

      return isOutsideRange((0, _moment["default"])(day).subtract(minimumNights, 'days'));
    }
  }, {
    key: "isDayAfterHoveredStartDate",
    value: function isDayAfterHoveredStartDate(day) {
      var _this$props18 = this.props,
          startDate = _this$props18.startDate,
          endDate = _this$props18.endDate,
          minimumNights = _this$props18.minimumNights;

      var _ref2 = this.state || {},
          hoverDate = _ref2.hoverDate;

      return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, startDate);
    }
  }, {
    key: "isEndDate",
    value: function isEndDate(day) {
      var endDate = this.props.endDate;
      return (0, _isSameDay["default"])(day, endDate);
    }
  }, {
    key: "isHovered",
    value: function isHovered(day) {
      var _ref3 = this.state || {},
          hoverDate = _ref3.hoverDate;

      var focusedInput = this.props.focusedInput;
      return !!focusedInput && (0, _isSameDay["default"])(day, hoverDate);
    }
  }, {
    key: "isInHoveredSpan",
    value: function isInHoveredSpan(day) {
      var _this$props19 = this.props,
          startDate = _this$props19.startDate,
          endDate = _this$props19.endDate;

      var _ref4 = this.state || {},
          hoverDate = _ref4.hoverDate;

      var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay["default"])(hoverDate, day));
      var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay["default"])(hoverDate, day));
      var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);
      return (isForwardRange || isBackwardRange) && isValidDayHovered;
    }
  }, {
    key: "isInSelectedSpan",
    value: function isInSelectedSpan(day) {
      var _this$props20 = this.props,
          startDate = _this$props20.startDate,
          endDate = _this$props20.endDate;
      return day.isBetween(startDate, endDate);
    }
  }, {
    key: "isLastInRange",
    value: function isLastInRange(day) {
      var endDate = this.props.endDate;
      return this.isInSelectedSpan(day) && (0, _isNextDay["default"])(day, endDate);
    }
  }, {
    key: "isStartDate",
    value: function isStartDate(day) {
      var startDate = this.props.startDate;
      return (0, _isSameDay["default"])(day, startDate);
    }
  }, {
    key: "isBlocked",
    value: function isBlocked(day) {
      var _this$props21 = this.props,
          isDayBlocked = _this$props21.isDayBlocked,
          isOutsideRange = _this$props21.isOutsideRange;
      return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
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
      var _this$props22 = this.props,
          numberOfMonths = _this$props22.numberOfMonths,
          orientation = _this$props22.orientation,
          monthFormat = _this$props22.monthFormat,
          renderMonthText = _this$props22.renderMonthText,
          navPrev = _this$props22.navPrev,
          navNext = _this$props22.navNext,
          noNavButtons = _this$props22.noNavButtons,
          onOutsideClick = _this$props22.onOutsideClick,
          withPortal = _this$props22.withPortal,
          enableOutsideDays = _this$props22.enableOutsideDays,
          firstDayOfWeek = _this$props22.firstDayOfWeek,
          hideKeyboardShortcutsPanel = _this$props22.hideKeyboardShortcutsPanel,
          daySize = _this$props22.daySize,
          focusedInput = _this$props22.focusedInput,
          renderCalendarDay = _this$props22.renderCalendarDay,
          renderDayContents = _this$props22.renderDayContents,
          renderCalendarInfo = _this$props22.renderCalendarInfo,
          renderMonthElement = _this$props22.renderMonthElement,
          calendarInfoPosition = _this$props22.calendarInfoPosition,
          onBlur = _this$props22.onBlur,
          onShiftTab = _this$props22.onShiftTab,
          onTab = _this$props22.onTab,
          isFocused = _this$props22.isFocused,
          showKeyboardShortcuts = _this$props22.showKeyboardShortcuts,
          isRTL = _this$props22.isRTL,
          weekDayFormat = _this$props22.weekDayFormat,
          dayAriaLabelFormat = _this$props22.dayAriaLabelFormat,
          verticalHeight = _this$props22.verticalHeight,
          noBorder = _this$props22.noBorder,
          transitionDuration = _this$props22.transitionDuration,
          verticalBorderSpacing = _this$props22.verticalBorderSpacing,
          horizontalMonthPadding = _this$props22.horizontalMonthPadding,
          is24HourFormat = _this$props22.is24HourFormat,
          displayRangeProp = _this$props22.displayRangeProp,
          hideTime = _this$props22.hideTime,
          disableMinutes = _this$props22.disableMinutes;
      var _this$state8 = this.state,
          currentMonth = _this$state8.currentMonth,
          phrases = _this$state8.phrases,
          visibleDays = _this$state8.visibleDays,
          disablePrev = _this$state8.disablePrev,
          disableNext = _this$state8.disableNext;
      return /*#__PURE__*/_react["default"].createElement(_DayTimePicker["default"], {
        disableMinutes: disableMinutes,
        hideTime: hideTime,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        onTimeChange: this.onTimeChange,
        displayRangeProp: displayRangeProp,
        is24HourFormat: is24HourFormat,
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
        onTab: onTab,
        onShiftTab: onShiftTab,
        onYearChange: this.onYearChange,
        onMultiplyScrollableMonths: this.onMultiplyScrollableMonths,
        monthFormat: monthFormat,
        renderMonthText: renderMonthText,
        withPortal: withPortal,
        hidden: !focusedInput,
        initialVisibleMonth: function initialVisibleMonth() {
          return currentMonth;
        },
        daySize: daySize,
        onOutsideClick: onOutsideClick,
        disablePrev: disablePrev,
        disableNext: disableNext,
        navPrev: navPrev,
        navNext: navNext,
        noNavButtons: noNavButtons,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderCalendarInfo: renderCalendarInfo,
        renderMonthElement: renderMonthElement,
        calendarInfoPosition: calendarInfoPosition,
        firstDayOfWeek: firstDayOfWeek,
        hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
        isFocused: isFocused,
        getFirstFocusableDay: this.getFirstFocusableDay,
        onBlur: onBlur,
        showKeyboardShortcuts: showKeyboardShortcuts,
        phrases: phrases,
        isRTL: isRTL,
        weekDayFormat: weekDayFormat,
        dayAriaLabelFormat: dayAriaLabelFormat,
        verticalHeight: verticalHeight,
        verticalBorderSpacing: verticalBorderSpacing,
        noBorder: noBorder,
        transitionDuration: transitionDuration,
        horizontalMonthPadding: horizontalMonthPadding
      });
    }
  }]);

  return DayTimePickerRangeController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayTimePickerRangeController;
DayTimePickerRangeController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayTimePickerRangeController.defaultProps = defaultProps;