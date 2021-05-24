"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _constants = require("../constants");

var _DateRangeDisplay = _interopRequireDefault(require("./DateRangeDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  startDate: _reactMomentProptypes["default"].momentObj,
  startDateId: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  endDate: _reactMomentProptypes["default"].momentObj,
  endDateId: _propTypes["default"].string,
  isEndDateFocused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func,
  // accessibility
  isFocused: _propTypes["default"].bool,
  format: _propTypes["default"].object,
  renderDateRangeDisplay: _propTypes["default"].func // i18n,

}) : {};;
var defaultProps = {
  startDate: null,
  startDateId: _constants.START_DATE,
  isStartDateFocused: false,
  endDate: null,
  endDateId: _constants.END_DATE,
  isEndDateFocused: false,
  onFocusChange: function onFocusChange() {},
  // accessibility
  isFocused: false
};

var DateRangeDisplayController = /*#__PURE__*/function (_React$Component) {
  _inherits(DateRangeDisplayController, _React$Component);

  var _super = _createSuper(DateRangeDisplayController);

  function DateRangeDisplayController(props) {
    var _this;

    _classCallCheck(this, DateRangeDisplayController);

    _this = _super.call(this, props);
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_assertThisInitialized(_this));
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateRangeDisplayController, [{
    key: "onEndDateFocus",
    value: function onEndDateFocus() {
      var _this$props = this.props,
          startDate = _this$props.startDate,
          onFocusChange = _this$props.onFocusChange;
      onFocusChange(_constants.END_DATE);
    }
  }, {
    key: "onStartDateFocus",
    value: function onStartDateFocus() {
      var onFocusChange = this.props.onFocusChange;
      onFocusChange(_constants.START_DATE);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          startDate = _this$props2.startDate,
          startDateId = _this$props2.startDateId,
          isStartDateFocused = _this$props2.isStartDateFocused,
          endDate = _this$props2.endDate,
          endDateId = _this$props2.endDateId,
          isEndDateFocused = _this$props2.isEndDateFocused,
          isFocused = _this$props2.isFocused,
          format = _this$props2.format,
          renderDateRangeDisplay = _this$props2.renderDateRangeDisplay;
      return renderDateRangeDisplay ? renderDateRangeDisplay({
        startDate: startDate,
        startDateId: startDateId,
        isStartDateFocused: isStartDateFocused,
        endDate: endDate,
        endDateId: endDateId,
        isEndDateFocused: isEndDateFocused,
        isFocused: isFocused,
        format: format
      }) : /*#__PURE__*/_react["default"].createElement(_DateRangeDisplay["default"], {
        startDate: startDate,
        startDateId: startDateId,
        isStartDateFocused: isStartDateFocused,
        endDate: endDate,
        endDateId: endDateId,
        isEndDateFocused: isEndDateFocused,
        isFocused: isFocused,
        format: format,
        onStartDateFocus: this.onStartDateFocus,
        onEndDateFocus: this.onEndDateFocus
      });
    }
  }]);

  return DateRangeDisplayController;
}(_react["default"].Component);

exports["default"] = DateRangeDisplayController;
DateRangeDisplayController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DateRangeDisplayController.defaultProps = defaultProps;