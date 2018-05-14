Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactWithStyles = require('react-with-styles');

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  date: _reactMomentProptypes2['default'].momentObj,
  align: _propTypes2['default'].string,
  setFocus: _propTypes2['default'].func,
  isFocused: _propTypes2['default'].bool
});
var defaultProps = {
  date: _reactMomentProptypes2['default'].momentObj,
  align: _propTypes2['default'].string,
  setFocus: _propTypes2['default'].func,
  isFocused: _propTypes2['default'].bool
};

var DateDisplay = function (_React$Component) {
  _inherits(DateDisplay, _React$Component);

  function DateDisplay() {
    _classCallCheck(this, DateDisplay);

    return _possibleConstructorReturn(this, (DateDisplay.__proto__ || Object.getPrototypeOf(DateDisplay)).apply(this, arguments));
  }

  _createClass(DateDisplay, [{
    key: 'getDate',
    value: function () {
      function getDate(format) {
        var date = this.props.date;

        if (date) {
          return date.format(format);
        } else {
          return format.split(/./).join('-');
        }
      }

      return getDate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            styles = _props.styles,
            align = _props.align,
            setFocus = _props.setFocus,
            isFocused = _props.isFocused;

        return _react2['default'].createElement(
          'div',
          _extends({ onClick: setFocus
          }, (0, _reactWithStyles.css)(styles.DateDisplay, isFocused && styles.DateDisplay_isFocused)),
          _react2['default'].createElement(
            'div',
            (0, _reactWithStyles.css)(align === 'right' && styles.DateDisplay_alignRight, align === 'left' && styles.DateDisplay_alignLeft),
            _react2['default'].createElement(
              'div',
              _extends({ className: 'day'
              }, (0, _reactWithStyles.css)(styles.DateDisplay_Day)),
              this.getDate("DD")
            ),
            _react2['default'].createElement(
              'div',
              (0, _reactWithStyles.css)(styles.DateDisplay_MonthYearDowWrapper),
              _react2['default'].createElement(
                'div',
                _extends({ className: 'monthDisplay yearDisplay'
                }, (0, _reactWithStyles.css)(styles.DateDisplay_MonthYear)),
                this.getDate("MMMM YYYY")
              ),
              _react2['default'].createElement(
                'div',
                _extends({ className: 'dowDisplay'
                }, (0, _reactWithStyles.css)(styles.DateDisplay_DOW)),
                this.getDate("dddd")
              )
            )
          )
        );
      }

      return render;
    }()
  }]);

  return DateDisplay;
}(_react2['default'].Component);

DateDisplay.propTypes = propTypes;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      border = _ref$reactDates.border,
      color = _ref$reactDates.color,
      sizing = _ref$reactDates.sizing,
      spacing = _ref$reactDates.spacing,
      font = _ref$reactDates.font,
      zIndex = _ref$reactDates.zIndex;
  return {
    DateDisplay: {
      display: 'inline-block',
      width: '50%',
      boxContent: 'border-box',
      padding: '20px 20px',
      borderBottom: '2px solid #fff0',
      ':hover': {
        borderBottom: '2px solid #EAEAEA'
      }
    },
    DateDisplay_alignLeft: {
      float: 'left'
    },
    DateDisplay_alignRight: {
      float: 'right'
    },
    DateDisplay_isFocused: {
      borderBottom: '2px solid ' + String(color.selected.backgroundColor),
      ':hover': {
        borderBottom: '2px solid ' + String(color.selected.backgroundColor)
      }
    },
    DateDisplay_Day: {
      display: 'inline-block',
      fontSize: '25px',
      padding: '0 5px',
      textAlign: 'center',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      color: color.text
    },
    DateDisplay_MonthYearDowWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateDisplay_MonthYear: {
      fontSize: '13px',
      fontWeight: 'bold'
    },
    DateDisplay_DOW: {
      fontSize: '12px'
    }

  };
})(DateDisplay);