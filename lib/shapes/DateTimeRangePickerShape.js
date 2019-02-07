"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _DateRangePickerShape = _interopRequireDefault(require("./DateRangePickerShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

var _default = _objectSpread({}, _DateRangePickerShape["default"], {
  hideTime: _propTypes["default"].bool,
  disableMinutes: _propTypes["default"].bool,
  is24HourFormat: _propTypes["default"].bool,
  selected: _propTypes["default"].shape({
    startDate: _reactMomentProptypes["default"].momentObj,
    endDate: _reactMomentProptypes["default"].momentObj
  }),
  onApply: _propTypes["default"].func,
  onCancel: _propTypes["default"].func
});

exports["default"] = _default;