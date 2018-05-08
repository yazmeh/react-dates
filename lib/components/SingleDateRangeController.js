Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _OpenDirectionShape = require('../shapes/OpenDirectionShape');

var _OpenDirectionShape2 = _interopRequireDefault(_OpenDirectionShape);

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _SingleDateRange = require('./SingleDateRange');

var _SingleDateRange2 = _interopRequireDefault(_SingleDateRange);

var _toMomentObject = require('../utils/toMomentObject');

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _toLocalizedDateString = require('../utils/toLocalizedDateString');

var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  startDate: _reactMomentProptypes2['default'].momentObj,
  startDateId: _propTypes2['default'].string,
  startDatePlaceholderText: _propTypes2['default'].string,
  isStartDateFocused: _propTypes2['default'].bool,

  endDate: _reactMomentProptypes2['default'].momentObj,
  endDateId: _propTypes2['default'].string,
  endDatePlaceholderText: _propTypes2['default'].string,
  isEndDateFocused: _propTypes2['default'].bool,

  rangeSeparator: _propTypes2['default'].string,
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),

  onFocusChange: _propTypes2['default'].func,

  // accessibility
  isFocused: _propTypes2['default'].bool,
  small: _propTypes2['default'].bool,
  // i18n

  isRTL: _propTypes2['default'].bool
});

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
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),

  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),


  // accessibility
  isFocused: false,
  small: false,
  isRTL: false
};

var SingleDateRangeController = function (_React$Component) {
  _inherits(SingleDateRangeController, _React$Component);

  function SingleDateRangeController(props) {
    _classCallCheck(this, SingleDateRangeController);

    var _this = _possibleConstructorReturn(this, (SingleDateRangeController.__proto__ || Object.getPrototypeOf(SingleDateRangeController)).call(this, props));

    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
    return _this;
  }

  _createClass(SingleDateRangeController, [{
    key: 'onStartDateFocus',
    value: function () {
      function onStartDateFocus() {
        var _props = this.props,
            isStartDateFocused = _props.isStartDateFocused,
            isEndDateFocused = _props.isEndDateFocused,
            onFocusChange = _props.onFocusChange;

        if (isStartDateFocused || isEndDateFocused) {
          onFocusChange(null);
        } else {
          onFocusChange(_constants.START_DATE);
        }
      }

      return onStartDateFocus;
    }()
  }, {
    key: 'getDisplayFormat',
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;

        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: 'getDateString',
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();
        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }
        return (0, _toLocalizedDateString2['default'])(date);
      }

      return getDateString;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            startDate = _props2.startDate,
            startDateId = _props2.startDateId,
            startDatePlaceholderText = _props2.startDatePlaceholderText,
            isStartDateFocused = _props2.isStartDateFocused,
            rangeSeparator = _props2.rangeSeparator,
            endDate = _props2.endDate,
            endDateId = _props2.endDateId,
            endDatePlaceholderText = _props2.endDatePlaceholderText,
            isEndDateFocused = _props2.isEndDateFocused,
            isRTL = _props2.isRTL;


        var startDateString = this.getDateString(startDate);
        var endDateString = this.getDateString(endDate);

        return _react2['default'].createElement(_SingleDateRange2['default'], {
          startDate: startDateString,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: isStartDateFocused,
          rangeSeparator: rangeSeparator,
          endDate: endDateString,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: isEndDateFocused,
          onStartDateFocus: this.onStartDateFocus,
          isRTL: isRTL
        });
      }

      return render;
    }()
  }]);

  return SingleDateRangeController;
}(_react2['default'].Component);

exports['default'] = SingleDateRangeController;


SingleDateRangeController.propTypes = propTypes;
SingleDateRangeController.defaultProps = defaultProps;