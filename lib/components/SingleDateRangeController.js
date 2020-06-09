"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _OpenDirectionShape = _interopRequireDefault(require("../shapes/OpenDirectionShape"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _SingleDateRange = _interopRequireDefault(require("./SingleDateRange"));

var _toMomentObject = _interopRequireDefault(require("../utils/toMomentObject"));

var _toLocalizedDateString = _interopRequireDefault(require("../utils/toLocalizedDateString"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  children: _propTypes["default"].node,
  startDateId: _propTypes["default"].string,
  startDatePlaceholderText: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputDateTimeElement: _propTypes["default"].func,
  endDate: _reactMomentProptypes["default"].momentObj,
  endDateId: _propTypes["default"].string,
  endDatePlaceholderText: _propTypes["default"].string,
  isEndDateFocused: _propTypes["default"].bool,
  rangeSeparator: _propTypes["default"].string,
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  onFocusChange: _propTypes["default"].func,
  // accessibility
  isFocused: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  // i18n
  isRTL: _propTypes["default"].bool
}) : {};;
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
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onFocusChange: function onFocusChange() {},
  // accessibility
  isFocused: false,
  small: false,
  isRTL: false
};

var SingleDateRangeController = /*#__PURE__*/function (_React$Component) {
  _inherits(SingleDateRangeController, _React$Component);

  var _super = _createSuper(SingleDateRangeController);

  function SingleDateRangeController(props) {
    var _this;

    _classCallCheck(this, SingleDateRangeController);

    _this = _super.call(this, props);
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SingleDateRangeController, [{
    key: "onStartDateFocus",
    value: function onStartDateFocus() {
      var _this$props = this.props,
          isStartDateFocused = _this$props.isStartDateFocused,
          isEndDateFocused = _this$props.isEndDateFocused,
          onFocusChange = _this$props.onFocusChange;

      if (isStartDateFocused || isEndDateFocused) {
        onFocusChange(null);
      } else {
        onFocusChange(_constants.START_DATE);
      }
    }
  }, {
    key: "getDisplayFormat",
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;
      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }
  }, {
    key: "getDateString",
    value: function getDateString(date) {
      var displayFormat = this.getDisplayFormat();

      if (date && displayFormat) {
        return date && date.format(displayFormat);
      }

      return (0, _toLocalizedDateString["default"])(date);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          startDate = _this$props2.startDate,
          startDateId = _this$props2.startDateId,
          startDatePlaceholderText = _this$props2.startDatePlaceholderText,
          isStartDateFocused = _this$props2.isStartDateFocused,
          rangeSeparator = _this$props2.rangeSeparator,
          endDate = _this$props2.endDate,
          showDefaultInputIcon = _this$props2.showDefaultInputIcon,
          endDateId = _this$props2.endDateId,
          inputDateTimeElement = _this$props2.inputDateTimeElement,
          endDatePlaceholderText = _this$props2.endDatePlaceholderText,
          isEndDateFocused = _this$props2.isEndDateFocused,
          isRTL = _this$props2.isRTL,
          children = _this$props2.children;
      var startDateString = this.getDateString(startDate);
      var endDateString = this.getDateString(endDate);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SingleDateRange["default"], {
        inputDateTimeElement: inputDateTimeElement,
        dateValues: {
          startDate: startDate,
          endDate: endDate
        },
        startDate: startDateString,
        startDateId: startDateId,
        startDatePlaceholderText: startDatePlaceholderText,
        isStartDateFocused: isStartDateFocused,
        rangeSeparator: rangeSeparator,
        endDate: endDateString,
        endDateId: endDateId,
        showDefaultInputIcon: showDefaultInputIcon,
        endDatePlaceholderText: endDatePlaceholderText,
        isEndDateFocused: isEndDateFocused,
        onStartDateFocus: this.onStartDateFocus,
        isRTL: isRTL
      }), children);
    }
  }]);

  return SingleDateRangeController;
}(_react["default"].Component);

exports["default"] = SingleDateRangeController;
SingleDateRangeController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
SingleDateRangeController.defaultProps = defaultProps;