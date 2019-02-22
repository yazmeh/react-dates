"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDateTimeRangePicker = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactWithStyles = require("react-with-styles");

var _reactPortal = require("react-portal");

var _airbnbPropTypes = require("airbnb-prop-types");

var _consolidatedEvents = require("consolidated-events");

var _isTouchDevice = _interopRequireDefault(require("is-touch-device"));

var _reactOutsideClickHandler = _interopRequireDefault(require("react-outside-click-handler"));

var _DateTimeRangePickerShape = _interopRequireDefault(require("../shapes/DateTimeRangePickerShape"));

var _defaultPhrases = require("../defaultPhrases");

var _getResponsiveContainerStyles = _interopRequireDefault(require("../utils/getResponsiveContainerStyles"));

var _getDetachedContainerStyles = _interopRequireDefault(require("../utils/getDetachedContainerStyles"));

var _getInputHeight = _interopRequireDefault(require("../utils/getInputHeight"));

var _isInclusivelyAfterDay = _interopRequireDefault(require("../utils/isInclusivelyAfterDay"));

var _disableScroll2 = _interopRequireDefault(require("../utils/disableScroll"));

var _noflip = _interopRequireDefault(require("../utils/noflip"));

var _SingleDateRangeController = _interopRequireDefault(require("./SingleDateRangeController"));

var _DayTimePickerRangeController = _interopRequireDefault(require("./DayTimePickerRangeController"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, _DateTimeRangePickerShape["default"])) : {};
var defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,
  // input related props
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateOffset: undefined,
  endDateOffset: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  keepFocusOnInput: false,
  inputDateTimeElement: null,
  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  firstDayOfWeek: null,
  verticalHeight: null,
  transitionDuration: undefined,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  horizontalMonthPadding: undefined,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  minimumNights: 1,
  enableOutsideDays: true,
  isDayBlocked: function isDayBlocked() {
    return false;
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
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  dayAriaLabelFormat: undefined
};

var DateTimeRangePicker =
/*#__PURE__*/
function (_ref) {
  _inherits(DateTimeRangePicker, _ref);

  _createClass(DateTimeRangePicker, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function DateTimeRangePicker(props) {
    var _this;

    _classCallCheck(this, DateTimeRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeRangePicker).call(this, props));
    var startDate = props.startDate,
        endDate = props.endDate;
    _this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false,
      selected: {
        startDate: startDate,
        endDate: endDate
      }
    };
    _this.isTouchDevice = false;
    _this.onOutsideClick = _this.onOutsideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.dateChange = _this.dateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocusOut = _this.onDayPickerFocusOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.disableScroll = _this.disableScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DateTimeRangePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.removeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
        passive: true
      });
      this.responsivizePickerPosition();
      this.disableScroll();
      var focusedInput = this.props.focusedInput;

      if (focusedInput) {
        this.setState({
          isDateRangePickerInputFocused: true
        });
      }

      this.isTouchDevice = (0, _isTouchDevice["default"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          focusedInput = _this$props.focusedInput,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate;

      if (!prevProps.focusedInput && focusedInput && this.isOpened()) {
        // The date picker just changed from being closed to being open.
        this.responsivizePickerPosition();
        this.disableScroll();
      } else if (prevProps.focusedInput && !focusedInput && !this.isOpened()) {
        // The date picker just changed from being open to being closed.
        if (this.enableScroll) this.enableScroll();
      }

      if (startDate && endDate) {
        if (!startDate.isSame(this.state.selected.startDate) || !endDate.isSame(this.state.selected.endDate)) {
          this.setState({
            selected: {
              startDate: startDate,
              endDate: endDate
            }
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDayPickerEventListeners();
      if (this.removeEventListener) this.removeEventListener();
      if (this.enableScroll) this.enableScroll();
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(event) {
      var _this$props2 = this.props,
          onFocusChange = _this$props2.onFocusChange,
          onClose = _this$props2.onClose,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate,
          appendToBody = _this$props2.appendToBody;
      if (!this.isOpened()) return;
      if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
      this.setState({
        isDateRangePickerInputFocused: false,
        isDayPickerFocused: false,
        showKeyboardShortcuts: false
      });
      onFocusChange(null);
      onClose({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, {
    key: "dateChange",
    value: function dateChange(_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate;

      if (startDate && endDate) {
        this.setState(_objectSpread({}, this.state, {
          selected: {
            startDate: startDate,
            endDate: endDate
          }
        }));
      }

      this.props.onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, {
    key: "onDateRangePickerInputFocus",
    value: function onDateRangePickerInputFocus(focusedInput) {
      var _this$props3 = this.props,
          onFocusChange = _this$props3.onFocusChange,
          readOnly = _this$props3.readOnly,
          withPortal = _this$props3.withPortal,
          withFullScreenPortal = _this$props3.withFullScreenPortal,
          keepFocusOnInput = _this$props3.keepFocusOnInput;

      if (focusedInput) {
        var withAnyPortal = withPortal || withFullScreenPortal;
        var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

        if (moveFocusToDayPicker) {
          this.onDayPickerFocus();
        } else {
          this.onDayPickerBlur();
        }
      }

      onFocusChange(focusedInput);
    }
  }, {
    key: "onDayPickerFocus",
    value: function onDayPickerFocus() {
      var _this$props4 = this.props,
          focusedInput = _this$props4.focusedInput,
          onFocusChange = _this$props4.onFocusChange;
      if (!focusedInput) onFocusChange(_constants.START_DATE);
      this.setState({
        isDateRangePickerInputFocused: false,
        isDayPickerFocused: true,
        showKeyboardShortcuts: false
      });
    }
  }, {
    key: "onDayPickerFocusOut",
    value: function onDayPickerFocusOut(event) {
      // In cases where **relatedTarget** is not null, it points to the right
      // element here. However, in cases where it is null (such as clicking on a
      // specific day), the appropriate value is **event.target**.
      //
      // We handle both situations here by using the ` || ` operator to fallback
      // to *event.target** when **relatedTarget** is not provided.
      if (this.dayPickerContainer.contains(event.relatedTarget || event.target)) return;
      this.onOutsideClick(event);
    }
  }, {
    key: "onDayPickerBlur",
    value: function onDayPickerBlur() {
      this.setState({
        isDateRangePickerInputFocused: true,
        isDayPickerFocused: false,
        showKeyboardShortcuts: false
      });
    }
  }, {
    key: "setDayPickerContainerRef",
    value: function setDayPickerContainerRef(ref) {
      if (ref === this.dayPickerContainer) return;
      if (this.dayPickerContainer) this.removeDayPickerEventListeners();
      this.dayPickerContainer = ref;
      if (!ref) return;
      this.addDayPickerEventListeners();
    }
  }, {
    key: "setContainerRef",
    value: function setContainerRef(ref) {
      this.container = ref;
    }
  }, {
    key: "addDayPickerEventListeners",
    value: function addDayPickerEventListeners() {
      // NOTE: We are using a manual event listener here, because React doesn't
      // provide FocusOut, while blur and keydown don't provide the information
      // needed in order to know whether we have left focus or not.
      //
      // For reference, this issue is further described here:
      // - https://github.com/facebook/react/issues/6410
      this.removeDayPickerFocusOut = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onDayPickerFocusOut);
    }
  }, {
    key: "removeDayPickerEventListeners",
    value: function removeDayPickerEventListeners() {
      if (this.removeDayPickerFocusOut) this.removeDayPickerFocusOut();
    }
  }, {
    key: "isOpened",
    value: function isOpened() {
      var focusedInput = this.props.focusedInput;
      return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      var _this$props5 = this.props,
          appendToBody = _this$props5.appendToBody,
          propDisableScroll = _this$props5.disableScroll;
      if (!appendToBody && !propDisableScroll) return;
      if (!this.isOpened()) return; // Disable scroll for every ancestor of this DateRangePicker up to the
      // document level. This ensures the input and the picker never move. Other
      // sibling elements or the picker itself can scroll.

      this.enableScroll = (0, _disableScroll2["default"])(this.container);
    }
  }, {
    key: "responsivizePickerPosition",
    value: function responsivizePickerPosition() {
      // It's possible the portal props have been changed in response to window resizes
      // So let's ensure we reset this back to the base state each time
      this.setState({
        dayPickerContainerStyles: {}
      });

      if (!this.isOpened()) {
        return;
      }

      var _this$props6 = this.props,
          openDirection = _this$props6.openDirection,
          anchorDirection = _this$props6.anchorDirection,
          horizontalMargin = _this$props6.horizontalMargin,
          withPortal = _this$props6.withPortal,
          withFullScreenPortal = _this$props6.withFullScreenPortal,
          appendToBody = _this$props6.appendToBody;
      var dayPickerContainerStyles = this.state.dayPickerContainerStyles;
      var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

      if (!withPortal && !withFullScreenPortal) {
        var containerRect = this.dayPickerContainer.getBoundingClientRect();
        var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
        var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
        this.setState({
          dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
        });
      }
    }
  }, {
    key: "showKeyboardShortcutsPanel",
    value: function showKeyboardShortcutsPanel() {
      this.setState({
        isDateRangePickerInputFocused: false,
        isDayPickerFocused: true,
        showKeyboardShortcuts: true
      });
    }
  }, {
    key: "maybeRenderDayPickerWithPortal",
    value: function maybeRenderDayPickerWithPortal() {
      var _this$props7 = this.props,
          withPortal = _this$props7.withPortal,
          withFullScreenPortal = _this$props7.withFullScreenPortal,
          appendToBody = _this$props7.appendToBody;

      if (!this.isOpened()) {
        return null;
      }

      if (withPortal || withFullScreenPortal || appendToBody) {
        return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
      }

      return this.renderDayPicker();
    }
  }, {
    key: "renderDayPicker",
    value: function renderDayPicker() {
      var _this$props8 = this.props,
          anchorDirection = _this$props8.anchorDirection,
          openDirection = _this$props8.openDirection,
          isDayBlocked = _this$props8.isDayBlocked,
          isDayHighlighted = _this$props8.isDayHighlighted,
          isOutsideRange = _this$props8.isOutsideRange,
          numberOfMonths = _this$props8.numberOfMonths,
          orientation = _this$props8.orientation,
          monthFormat = _this$props8.monthFormat,
          renderMonthText = _this$props8.renderMonthText,
          navPrev = _this$props8.navPrev,
          navNext = _this$props8.navNext,
          onPrevMonthClick = _this$props8.onPrevMonthClick,
          onNextMonthClick = _this$props8.onNextMonthClick,
          onDatesChange = _this$props8.onDatesChange,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          onFocusChange = _this$props8.onFocusChange,
          withPortal = _this$props8.withPortal,
          withFullScreenPortal = _this$props8.withFullScreenPortal,
          daySize = _this$props8.daySize,
          enableOutsideDays = _this$props8.enableOutsideDays,
          focusedInput = _this$props8.focusedInput,
          startDate = _this$props8.startDate,
          startDateOffset = _this$props8.startDateOffset,
          endDate = _this$props8.endDate,
          endDateOffset = _this$props8.endDateOffset,
          minimumNights = _this$props8.minimumNights,
          keepOpenOnDateSelect = _this$props8.keepOpenOnDateSelect,
          renderCalendarDay = _this$props8.renderCalendarDay,
          renderDayContents = _this$props8.renderDayContents,
          renderCalendarInfo = _this$props8.renderCalendarInfo,
          renderMonthElement = _this$props8.renderMonthElement,
          calendarInfoPosition = _this$props8.calendarInfoPosition,
          firstDayOfWeek = _this$props8.firstDayOfWeek,
          initialVisibleMonth = _this$props8.initialVisibleMonth,
          hideKeyboardShortcutsPanel = _this$props8.hideKeyboardShortcutsPanel,
          customCloseIcon = _this$props8.customCloseIcon,
          onClose = _this$props8.onClose,
          phrases = _this$props8.phrases,
          dayAriaLabelFormat = _this$props8.dayAriaLabelFormat,
          isRTL = _this$props8.isRTL,
          weekDayFormat = _this$props8.weekDayFormat,
          styles = _this$props8.styles,
          verticalHeight = _this$props8.verticalHeight,
          transitionDuration = _this$props8.transitionDuration,
          verticalSpacing = _this$props8.verticalSpacing,
          horizontalMonthPadding = _this$props8.horizontalMonthPadding,
          small = _this$props8.small,
          disabled = _this$props8.disabled,
          isDateRangePickerInputFocused = _this$props8.isDateRangePickerInputFocused,
          onApply = _this$props8.onApply,
          onCancel = _this$props8.onCancel,
          displayRangeFormat = _this$props8.displayRangeFormat,
          disableMinutes = _this$props8.disableMinutes,
          hideTime = _this$props8.hideTime,
          is24HourFormat = _this$props8.is24HourFormat,
          startDateId = _this$props8.startDateId,
          endDateId = _this$props8.endDateId,
          reactDates = _this$props8.theme.reactDates;
      var _this$state = this.state,
          dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
          isDayPickerFocused = _this$state.isDayPickerFocused,
          showKeyboardShortcuts = _this$state.showKeyboardShortcuts,
          selected = _this$state.selected;
      var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

      var initialVisibleMonthThunk = initialVisibleMonth || function () {
        return startDate || endDate || (0, _moment["default"])();
      };

      var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateTimeRangePicker_closeButton_svg));

      var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
      var withAnyPortal = withPortal || withFullScreenPortal;
      var displayRangeProp = {
        startDate: selected.startDate,
        startDateId: startDateId,
        isStartDateFocused: focusedInput === _constants.START_DATE,
        endDate: selected.endDate,
        endDateId: endDateId,
        format: displayRangeFormat,
        isEndDateFocused: focusedInput === _constants.END_DATE,
        onFocusChange: onFocusChange,
        isFocused: isDateRangePickerInputFocused
      };
      return _react["default"].createElement("div", _extends({
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref: this.setDayPickerContainerRef
      }, (0, _reactWithStyles.css)(styles.DateTimeRangePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.DateTimeRangePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.DateTimeRangePicker_picker__directionRight, orientation === _constants.HORIZONTAL_ORIENTATION && styles.DateTimeRangePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.DateTimeRangePicker_picker__vertical, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
        top: inputHeight + verticalSpacing
      }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
        bottom: inputHeight + verticalSpacing
      }, withAnyPortal && styles.DateTimeRangePicker_picker__portal, withFullScreenPortal && styles.DateTimeRangePicker_picker__fullScreenPortal, isRTL && styles.DateTimeRangePicker_picker__rtl, dayPickerContainerStyles), {
        onClick: onOutsideClick
      }), _react["default"].createElement(_DayTimePickerRangeController["default"], {
        disableMinutes: disableMinutes,
        hideTime: hideTime,
        displayRangeProp: displayRangeProp,
        is24HourFormat: is24HourFormat,
        minDate: minDate,
        maxDate: maxDate,
        orientation: orientation,
        enableOutsideDays: enableOutsideDays,
        numberOfMonths: numberOfMonths,
        onPrevMonthClick: onPrevMonthClick,
        onNextMonthClick: onNextMonthClick,
        onDatesChange: this.dateChange,
        onFocusChange: onFocusChange,
        onClose: onClose,
        focusedInput: focusedInput,
        startDate: startDate,
        startDateOffset: startDateOffset,
        endDate: endDate,
        endDateOffset: endDateOffset,
        monthFormat: monthFormat,
        renderMonthText: renderMonthText,
        withPortal: withAnyPortal,
        daySize: daySize,
        initialVisibleMonth: initialVisibleMonthThunk,
        hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
        navPrev: navPrev,
        navNext: navNext,
        minimumNights: minimumNights,
        isOutsideRange: isOutsideRange,
        isDayHighlighted: isDayHighlighted,
        isDayBlocked: isDayBlocked,
        keepOpenOnDateSelect: keepOpenOnDateSelect,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderCalendarInfo: renderCalendarInfo,
        renderMonthElement: renderMonthElement,
        calendarInfoPosition: calendarInfoPosition,
        isFocused: isDayPickerFocused,
        showKeyboardShortcuts: showKeyboardShortcuts,
        onBlur: this.onDayPickerBlur,
        phrases: phrases,
        dayAriaLabelFormat: dayAriaLabelFormat,
        isRTL: isRTL,
        firstDayOfWeek: firstDayOfWeek,
        weekDayFormat: weekDayFormat,
        verticalHeight: verticalHeight,
        transitionDuration: transitionDuration,
        disabled: disabled,
        horizontalMonthPadding: horizontalMonthPadding
      }), withFullScreenPortal && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.DateTimeRangePicker_closeButton), {
        type: "button",
        onClick: this.onOutsideClick,
        "aria-label": phrases.closeDatePicker
      }), closeIcon));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          startDate = _this$props9.startDate,
          startDateId = _this$props9.startDateId,
          startDatePlaceholderText = _this$props9.startDatePlaceholderText,
          endDate = _this$props9.endDate,
          endDateId = _this$props9.endDateId,
          endDatePlaceholderText = _this$props9.endDatePlaceholderText,
          focusedInput = _this$props9.focusedInput,
          screenReaderInputMessage = _this$props9.screenReaderInputMessage,
          showClearDates = _this$props9.showClearDates,
          showDefaultInputIcon = _this$props9.showDefaultInputIcon,
          inputIconPosition = _this$props9.inputIconPosition,
          customInputIcon = _this$props9.customInputIcon,
          customArrowIcon = _this$props9.customArrowIcon,
          customCloseIcon = _this$props9.customCloseIcon,
          disabled = _this$props9.disabled,
          required = _this$props9.required,
          readOnly = _this$props9.readOnly,
          openDirection = _this$props9.openDirection,
          phrases = _this$props9.phrases,
          isOutsideRange = _this$props9.isOutsideRange,
          minimumNights = _this$props9.minimumNights,
          withPortal = _this$props9.withPortal,
          withFullScreenPortal = _this$props9.withFullScreenPortal,
          inputDateTimeElement = _this$props9.inputDateTimeElement,
          displayFormat = _this$props9.displayFormat,
          reopenPickerOnClearDates = _this$props9.reopenPickerOnClearDates,
          keepOpenOnDateSelect = _this$props9.keepOpenOnDateSelect,
          onDatesChange = _this$props9.onDatesChange,
          onClose = _this$props9.onClose,
          isRTL = _this$props9.isRTL,
          noBorder = _this$props9.noBorder,
          block = _this$props9.block,
          verticalSpacing = _this$props9.verticalSpacing,
          small = _this$props9.small,
          regular = _this$props9.regular,
          styles = _this$props9.styles,
          is24HourFormat = _this$props9.is24HourFormat,
          selected = _this$props9.selected;
      var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;
      var enableOutsideClick = !withPortal && !withFullScreenPortal;
      var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

      var input = _react["default"].createElement(_SingleDateRangeController["default"], {
        inputDateTimeElement: inputDateTimeElement,
        startDate: startDate,
        startDateId: startDateId,
        startDatePlaceholderText: startDatePlaceholderText,
        isStartDateFocused: focusedInput === _constants.START_DATE,
        endDate: endDate,
        endDateId: endDateId,
        endDatePlaceholderText: endDatePlaceholderText,
        isEndDateFocused: focusedInput === _constants.END_DATE,
        displayFormat: displayFormat,
        onFocusChange: this.onDateRangePickerInputFocus,
        small: small
      }, this.maybeRenderDayPickerWithPortal());

      return _react["default"].createElement("div", _extends({
        ref: this.setContainerRef
      }, (0, _reactWithStyles.css)(styles.DateTimeRangePicker, block && styles.DateTimeRangePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
        onOutsideClick: this.onOutsideClick
      }, input), enableOutsideClick || input);
    }
  }]);

  return DateTimeRangePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDateTimeRangePicker = DateTimeRangePicker;
DateTimeRangePicker.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DateTimeRangePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      zIndex = _ref3$reactDates.zIndex,
      sizing = _ref3$reactDates.sizing;
  return {
    DateTimeRangePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    DateTimeRangePicker__block: {
      display: 'block'
    },
    DateTimeRangePicker_pickerWrapper: {
      //padding:'10px',
      boxShadow: '0 2px 19px 0 rgba(0,0,0,0.13)'
    },
    DateTimeRangePicker_pickerWrapperInner: {
      boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.11)'
    },
    DateTimeRangePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    DateTimeRangePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateTimeRangePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    DateTimeRangePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    DateTimeRangePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    DateTimeRangePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    DateTimeRangePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    DateTimeRangePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    },
    DateTimeRangePicker_ConfirmWrapper: {
      height: '50px',
      padding: '10px'
    },
    DateTimeRangePicker_ConfirmButton: {
      padding: "".concat(sizing.confirmButtonPadding.vertical, "px ").concat(sizing.confirmButtonPadding.horizontal, "px"),
      height: "".concat(sizing.confirmButtonHeight, "px"),
      minWidth: "".concat(sizing.confirmButtonMinWidth, "px"),
      border: 0,
      marginRight: '10px',
      fontWeight: 800,
      borderRadius: '5px',
      textTransform: 'uppercase',
      fontSize: 12
    },
    DateTimeRangePicker_Apply: {
      backgroundColor: color.confirmButton.apply.background,
      color: color.confirmButton.apply.text,
      ':disabled': {
        backgroundColor: color.confirmButton.apply.disabled,
        cursor: 'not-allowed'
      }
    },
    DateTimeRangePicker_Cancel: {
      backgroundColor: color.confirmButton.cancel.background,
      color: color.confirmButton.cancel.text,
      ':disabled': {
        backgroundColor: color.confirmButton.cancel.disabled,
        cursor: 'not-allowed'
      }
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateTimeRangePicker);

exports["default"] = _default;