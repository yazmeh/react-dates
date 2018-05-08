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

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _defaultPhrases = require('../defaultPhrases');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _object2['default'])({}, (0, _omit2['default'])(_DateRangePickerShape2['default'], ['startDate', 'endDate', 'onDatesChange', 'focusedInput', 'onFocusChange']));
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
    renderMonth: null,
    is24HourFormat: true,
    orientation: _constants.HORIZONTAL_ORIENTATION,
    anchorDirection: _constants.ANCHOR_LEFT,
    horizontalMargin: 0,
    withPortal: false,
    withFullScreenPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 2,
    keepOpenOnDateSelect: true,
    reopenPickerOnClearDates: false,
    isRTL: false,

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
            return !isInclusivelyAfterDay(day, (0, _moment2['default'])());
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
        return _this;
    }

    _createClass(DateTimePickerComponent, [{
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
                onCanel({ startDate: startDate, endDate: endDate });
            }

            return onCancel;
        }()
    }, {
        key: 'onDatesChange',
        value: function () {
            function onDatesChange(_ref) {
                var startDate = _ref.startDate,
                    endDate = _ref.endDate;
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

                if (focusedInput == null) {
                    this.setState({
                        startDate: selected.startDate && stateDateWrapper(selected.startDate),
                        endDate: selected.startDate && stateDateWrapper(selected.startDate),
                        focusedInput: focusedInput
                    });
                } else {
                    this.setState({ focusedInput: focusedInput });
                }
            }

            return onFocusChange;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_DateTimeRangePicker2['default'], _extends({}, props, {
                        onDatesChange: this.onDatesChange,
                        onFocusChange: this.onFocusChange,
                        displayFormat: 'DD/MM/YYYY HH:mm:ss',
                        focusedInput: focusedInput,
                        startDate: startDate,
                        onApply: this.onApply,
                        onCancel: this.onCancel,
                        verticalSpacing: 10,
                        isDayBlocked: function () {
                            function isDayBlocked(day) {
                                return (0, _moment2['default'])().isBefore();
                            }

                            return isDayBlocked;
                        }(),
                        endDate: endDate
                    }))
                );
            }

            return render;
        }()
    }]);

    return DateTimePickerComponent;
}(_react2['default'].Component);