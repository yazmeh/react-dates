'use strict';

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

var _constants = require('../constants');

var _DateRangeDisplay = require('./DateRangeDisplay');

var _DateRangeDisplay2 = _interopRequireDefault(_DateRangeDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  startDate: _reactMomentProptypes2['default'].momentObj,
  startDateId: _propTypes2['default'].string,
  isStartDateFocused: _propTypes2['default'].bool,

  endDate: _reactMomentProptypes2['default'].momentObj,
  endDateId: _propTypes2['default'].string,
  isEndDateFocused: _propTypes2['default'].bool,

  onFocusChange: _propTypes2['default'].func,
  // accessibility
  isFocused: _propTypes2['default'].bool

  // i18n,
});

var defaultProps = {
  startDate: null,
  startDateId: _constants.START_DATE,
  isStartDateFocused: false,

  endDate: null,
  endDateId: _constants.END_DATE,
  isEndDateFocused: false,

  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),


  // accessibility
  isFocused: false
};

var DateRangeDisplayController = function (_React$Component) {
  _inherits(DateRangeDisplayController, _React$Component);

  function DateRangeDisplayController(props) {
    _classCallCheck(this, DateRangeDisplayController);

    var _this = _possibleConstructorReturn(this, (DateRangeDisplayController.__proto__ || Object.getPrototypeOf(DateRangeDisplayController)).call(this, props));

    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
    return _this;
  }

  _createClass(DateRangeDisplayController, [{
    key: 'onEndDateFocus',
    value: function () {
      function onEndDateFocus() {
        var _props = this.props,
            startDate = _props.startDate,
            onFocusChange = _props.onFocusChange;

        onFocusChange(_constants.END_DATE);
      }

      return onEndDateFocus;
    }()
  }, {
    key: 'onStartDateFocus',
    value: function () {
      function onStartDateFocus() {
        var onFocusChange = this.props.onFocusChange;

        onFocusChange(_constants.START_DATE);
      }

      return onStartDateFocus;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            startDate = _props2.startDate,
            startDateId = _props2.startDateId,
            isStartDateFocused = _props2.isStartDateFocused,
            endDate = _props2.endDate,
            endDateId = _props2.endDateId,
            isEndDateFocused = _props2.isEndDateFocused,
            isFocused = _props2.isFocused;


        return _react2['default'].createElement(_DateRangeDisplay2['default'], {
          startDate: startDate,
          startDateId: startDateId,
          isStartDateFocused: isStartDateFocused,
          endDate: endDate,
          endDateId: endDateId,
          isEndDateFocused: isEndDateFocused,
          isFocused: isFocused,
          onStartDateFocus: this.onStartDateFocus,
          onEndDateFocus: this.onEndDateFocus
        });
      }

      return render;
    }()
  }]);

  return DateRangeDisplayController;
}(_react2['default'].Component);

exports['default'] = DateRangeDisplayController;


DateRangeDisplayController.propTypes = propTypes;
DateRangeDisplayController.defaultProps = defaultProps;