Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureDateTimePickerComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateTimeRangePicker = require('./DateTimeRangePicker');

var _DateTimeRangePicker2 = _interopRequireDefault(_DateTimeRangePicker);

var _DateRangePickerShape = require('../shapes/DateRangePickerShape');

var _DateRangePickerShape2 = _interopRequireDefault(_DateRangePickerShape);

var _reactWithStyles = require('react-with-styles');

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _defaultPhrases = require('../defaultPhrases');

var _constants = require('../constants');

var _isInclusivelyAfterDay = require('../utils/isInclusivelyAfterDay');

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _isSameDay = require('../utils/isSameDay');

var _isSameDay2 = _interopRequireDefault(_isSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _object2['default'])({}, (0, _omit2['default'])(_DateRangePickerShape2['default'], ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange']), _reactWithStyles.withStylesPropTypes, {
  applyOnPreset: _propTypes2['default'].bool,
  presetOptions: _propTypes2['default'].array
});
var today = (0, _moment2['default'])().hour(12);
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
  renderMonth: null,
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
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),


  //time props
  disableMinutes: true,
  is24HourFormat: true,
  hideTime: false,

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked(day) {
      return day.isBefore(today);
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {
      return false;
    }

    return isDayHighlighted;
  }(),

  // internationalization
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.DateRangePickerPhrases,

  stateDateWrapper: function () {
    function stateDateWrapper(date) {
      return date;
    }

    return stateDateWrapper;
  }()
};

var DateTimePickerComponent = function (_React$Component) {
  _inherits(DateTimePickerComponent, _React$Component);

  function DateTimePickerComponent(props) {
    _classCallCheck(this, DateTimePickerComponent);

    var _this = _possibleConstructorReturn(this, (DateTimePickerComponent.__proto__ || Object.getPrototypeOf(DateTimePickerComponent)).call(this, props));

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
    _this.onDatesChange = _this.onDatesChange.bind(_this);
    _this.onFocusChange = _this.onFocusChange.bind(_this);
    _this.onPresetSelect = _this.onPresetSelect.bind(_this);
    _this.generatePresetOption = _this.generatePresetOption.bind(_this);
    _this.onApply = _this.onApply.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    return _this;
  }

  _createClass(DateTimePickerComponent, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(newProps) {
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

      return componentWillReceiveProps;
    }()
  }, {
    key: 'onPresetSelect',
    value: function () {
      function onPresetSelect(_ref) {
        var startDate = _ref.startDate,
            endDate = _ref.endDate;
        var selected = this.state.selected;
        var applyOnPreset = this.props.applyOnPreset;

        this.onDatesChange({ startDate: startDate, endDate: endDate });
        if (applyOnPreset) {
          this.onApply({ startDate: startDate, endDate: endDate });
        }
      }

      return onPresetSelect;
    }()
  }, {
    key: 'generatePresetOption',
    value: function () {
      function generatePresetOption() {
        var _this2 = this;

        var _props = this.props,
            styles = _props.styles,
            presetOptions = _props.presetOptions;
        var _state = this.state,
            startDate = _state.startDate,
            endDate = _state.endDate;

        if (presetOptions) {
          return _react2['default'].createElement(
            'div',
            (0, _reactWithStyles.css)(styles.PresetOptionMenu_Wrapper),
            _react2['default'].createElement(
              'div',
              (0, _reactWithStyles.css)(styles.DateTimePickerComponent_menu),
              _react2['default'].createElement(
                'div',
                (0, _reactWithStyles.css)(styles.PresetOptionMenu),
                presetOptions.map(function (_ref2) {
                  var text = _ref2.text,
                      start = _ref2.start,
                      end = _ref2.end;

                  var isSelected = (0, _isSameDay2['default'])(start, startDate) && (0, _isSameDay2['default'])(end, endDate);
                  return _react2['default'].createElement(
                    'button',
                    _extends({
                      key: text
                    }, (0, _reactWithStyles.css)(styles.PresetOptionMenu_item, isSelected && styles.PresetOptionMenu_item_selected), {
                      type: 'button',
                      onClick: function () {
                        function onClick() {
                          return _this2.onPresetSelect({ startDate: start, endDate: end });
                        }

                        return onClick;
                      }()
                    }),
                    text
                  );
                })
              ),
              !!(this.onApply || this.onCancel) && _react2['default'].createElement(
                'div',
                (0, _reactWithStyles.css)(styles.DateTimeRangePicker_ConfirmWrapper),
                !!this.onApply && _react2['default'].createElement(
                  'div',
                  (0, _reactWithStyles.css)(styles.DateTimePickerComponent_ConfirmButton_Wrapper),
                  _react2['default'].createElement(
                    'button',
                    _extends({
                      disabled: !startDate || !endDate,
                      onClick: function () {
                        function onClick() {
                          return _this2.onApply({ startDate: startDate, endDate: endDate });
                        }

                        return onClick;
                      }(),
                      tabIndex: 3
                    }, (0, _reactWithStyles.css)(styles.DateTimePickerComponent_Apply, styles.DateTimePickerComponent_ConfirmButton)),
                    'Apply'
                  )
                ),
                !!this.onCancel && _react2['default'].createElement(
                  'div',
                  (0, _reactWithStyles.css)(styles.DateTimePickerComponent_ConfirmButton_Wrapper),
                  _react2['default'].createElement(
                    'button',
                    _extends({
                      disabled: !startDate || !endDate,
                      onClick: function () {
                        function onClick() {
                          return _this2.onCancel({ startDate: startDate, endDate: endDate });
                        }

                        return onClick;
                      }(),
                      tabIndex: 4
                    }, (0, _reactWithStyles.css)(styles.DateTimePickerComponent_Cancel, styles.DateTimePickerComponent_ConfirmButton)),
                    'Cancel'
                  )
                )
              )
            )
          );
        }
      }

      return generatePresetOption;
    }()
  }, {
    key: 'onApply',
    value: function () {
      function onApply(newDates) {
        var onApply = this.props.onApply;
        var _state$selected = this.state.selected,
            startDate = _state$selected.startDate,
            endDate = _state$selected.endDate;

        var oldDates = {
          startDate: startDate,
          endDate: endDate
        };
        this.setState({
          selected: (0, _object2['default'])({}, newDates)
        });
        onApply(newDates, oldDates);
        this.onFocusChange(null);
      }

      return onApply;
    }()
  }, {
    key: 'onCancel',
    value: function () {
      function onCancel() {
        var _state$selected2 = this.state.selected,
            startDate = _state$selected2.startDate,
            endDate = _state$selected2.endDate;
        var onCancel = this.props.onCancel;

        this.setState({
          startDate: startDate,
          endDate: endDate
        });
        if (onCancel) {
          onCancel({ startDate: startDate, endDate: endDate });
        }
        this.onFocusChange(null);
      }

      return onCancel;
    }()
  }, {
    key: 'onDatesChange',
    value: function () {
      function onDatesChange(_ref3) {
        var startDate = _ref3.startDate,
            endDate = _ref3.endDate;
        var stateDateWrapper = this.props.stateDateWrapper;

        this.setState({
          startDate: startDate && stateDateWrapper(startDate),
          endDate: endDate && stateDateWrapper(endDate)
        });
      }

      return onDatesChange;
    }()
  }, {
    key: 'onFocusChange',
    value: function () {
      function onFocusChange(focusedInput) {
        var selected = this.state.selected;
        var stateDateWrapper = this.props.stateDateWrapper;

        if (focusedInput == null) {
          this.setState({
            startDate: selected.startDate && stateDateWrapper(selected.startDate),
            endDate: selected.startDate && stateDateWrapper(selected.startDate),
            focusedInput: focusedInput
          });
        }
        this.setState({ focusedInput: focusedInput });
      }

      return onFocusChange;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var props = (0, _omit2['default'])(this.props, ["autoFocus", "autoFocusEndDate", "initialStartDate", "initialEndDate", "stateDateWrapper", "onApply", "onCancel", "selected", "startDate", "endDate", "presetOptions", "applyOnPreset"]);
        var _state2 = this.state,
            startDate = _state2.startDate,
            endDate = _state2.endDate,
            focusedInput = _state2.focusedInput,
            selected = _state2.selected;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_DateTimeRangePicker2['default'], _extends({}, props, {
            onDatesChange: this.onDatesChange,
            onFocusChange: this.onFocusChange,
            selected: selected,
            focusedInput: focusedInput,
            startDate: startDate,
            onApply: this.onApply,
            onCancel: this.onCancel,
            verticalSpacing: 10,
            endDate: endDate,
            calendarInfoPosition: 'after',
            renderCalendarInfo: this.generatePresetOption
          }))
        );
      }

      return render;
    }()
  }]);

  return DateTimePickerComponent;
}(_react2['default'].Component);

DateTimePickerComponent.propTypes = propTypes;
DateTimePickerComponent.defaultProps = defaultProps;
exports.PureDateTimePickerComponent = DateTimePickerComponent;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref4) {
  var _ref4$reactDates = _ref4.reactDates,
      color = _ref4$reactDates.color,
      sizing = _ref4$reactDates.sizing;
  return {
    PresetOptionMenu_Wrapper: {
      width: 200
    },
    PresetOptionMenu_item: {
      position: "relative",
      border: 0,
      outline: 0,
      cursor: 'pointer',
      borderBottom: '1px solid ' + String(color.core.borderLight),
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
      padding: String(sizing.confirmButtonPadding.vertical) + 'px ' + String(sizing.confirmButtonPadding.horizontal) + 'px',
      height: String(sizing.confirmButtonHeight) + 'px',
      width: String(sizing.confirmButtonMinWidth) + 'px',
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
      border: '1px solid ' + String(color.core.borderLight),
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