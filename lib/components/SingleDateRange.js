Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactWithStyles = require('react-with-styles');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    startDate: _propTypes2['default'].string,
    startDateId: _propTypes2['default'].string,
    startDatePlaceholderText: _propTypes2['default'].string,
    isStartDateFocused: _propTypes2['default'].bool,
    rangeSeparator: _propTypes2['default'].string,
    endDate: _propTypes2['default'].string,
    endDateId: _propTypes2['default'].string,
    endDatePlaceholderText: _propTypes2['default'].string,
    isEndDateFocused: _propTypes2['default'].bool,
    onStartDateFocus: _propTypes2['default'].func,
    isRTL: _propTypes2['default'].bool
};
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
    displayFormat: function () {
        function displayFormat() {
            return moment.localeData().longDateFormat('L');
        }

        return displayFormat;
    }(),
    // accessibility
    isRTL: false
};

var SingleDateRange = function (_React$Component) {
    _inherits(SingleDateRange, _React$Component);

    function SingleDateRange() {
        _classCallCheck(this, SingleDateRange);

        return _possibleConstructorReturn(this, (SingleDateRange.__proto__ || Object.getPrototypeOf(SingleDateRange)).apply(this, arguments));
    }

    _createClass(SingleDateRange, [{
        key: 'render',
        value: function () {
            function render() {
                var _props = this.props,
                    startDate = _props.startDate,
                    endDate = _props.endDate,
                    rangeSeparator = _props.rangeSeparator,
                    styles = _props.styles,
                    small = _props.small,
                    onStartDateFocus = _props.onStartDateFocus;

                return _react2['default'].createElement(
                    'div',
                    _extends({ onClick: onStartDateFocus
                    }, (0, _reactWithStyles.css)(styles.SingleDateRange, small ? styles.SingleDateRange_small : styles.SingleDateRange_normal)),
                    _react2['default'].createElement(
                        'div',
                        null,
                        '' + String(startDate) + String(rangeSeparator) + String(endDate)
                    )
                );
            }

            return render;
        }()
    }]);

    return SingleDateRange;
}(_react2['default'].Component);

SingleDateRange.propTypes = propTypes;
SingleDateRange.defaultProps = defaultProps;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
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
            border: border.input.border,
            borderRadius: '10px'
        },
        SingleDateRange_small: {
            height: font.input.lineHeight_small,
            lineHeight: font.input.lineHeight_small,
            padding: String(spacing.displayTextPaddingVertical_small) + 'px ' + String(spacing.displayTextPaddingHorizontal_small) + 'px',
            paddingTop: spacing.displayTextPaddingTop_small,
            paddingBottom: spacing.displayTextPaddingBottom_small,
            paddingLeft: spacing.displayTextPaddingLeft_small,
            paddingRight: spacing.displayTextPaddingRight_small
        },
        SingleDateRange_normal: {
            height: font.input.lineHeight,
            lineHeight: font.input.lineHeight,
            padding: String(spacing.displayTextPaddingVertical) + 'px ' + String(spacing.displayTextPaddingHorizontal) + 'px',
            paddingTop: spacing.displayTextPaddingTop,
            paddingBottom: spacing.displayTextPaddingBottom,
            paddingLeft: spacing.displayTextPaddingLeft,
            paddingRight: spacing.displayTextPaddingRight
        }

    };
})(SingleDateRange);