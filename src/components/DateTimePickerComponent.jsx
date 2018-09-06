import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimeRangePicker from './DateTimeRangePicker';
import DateRangePickerShape from '../shapes/DateRangePickerShape';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import omit from 'lodash/omit';
import { DateRangePickerPhrases } from '../defaultPhrases';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_RIGHT } from '../constants';
import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import isSameDay from '../utils/isSameDay';
import isSameHour from "../utils/isSameHour";



const propTypes = {
  ...omit(DateRangePickerShape, [
    'startDate',
    'endDate',
    'onDatesChange',
    'focusedInput',
    'onFocusChange',
  ]),
  ...withStylesPropTypes,
  applyOnPreset:PropTypes.bool,
  presetOptions: PropTypes.array
};
const today = moment().hour(12);
const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
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
  applyOnPreset:false,
  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_RIGHT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: true,
  reopenPickerOnClearDates: false,
  isRTL: false,
  hideKeyboardShortcutsPanel:true,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() { },
  onNextMonthClick() { },
  onClose() { },

  //time props
  disableMinutes:true,
  is24HourFormat: true,
  hideTime:false,


  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: day => !day.isBefore(today.clone()),
  isOutsideRange: day => !isInclusivelyAfterDay(day, today),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,

  stateDateWrapper: date => date,
};
class DateTimePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    const {
      endDate,
      startDate,
      autoFocus,
      autoFocusEndDate,
    } = props;
    let focusedInput = null;
    if (autoFocus) {
      focusedInput = START_DATE;
    } else if (autoFocusEndDate) {
      focusedInput = END_DATE;
    }
    this.state = {
      focusedInput,
      startDate,
      endDate,
      selected: {
        startDate,
        endDate,
      },
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onPresetSelect = this.onPresetSelect.bind(this);
    this.generatePresetOption = this.generatePresetOption.bind(this);
    this.onApply = this.onApply.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  componentWillReceiveProps(newProps){
    const {
      startDate,
      endDate
    } =newProps
    if (!startDate.isSame(this.state.selected.startDate) || !endDate.isSame(this.state.selected.endDate)){
      this.setState({
        selected:{
          startDate,
          endDate
        },
        startDate,
        endDate,
      });
    }
  }
  onPresetSelect({startDate,endDate}){
    const {
      selected,
    }=this.state;
    const {
      applyOnPreset,
    } = this.props
    this.onDatesChange({ startDate, endDate })
    if (applyOnPreset){
      this.onApply({ startDate, endDate });
    }
  }
  generatePresetOption() {
    const { styles, presetOptions,presetTime } = this.props;
    const { startDate, endDate } = this.state;
    if (presetOptions){
      return (
        <div {...css(styles.PresetOptionMenu_Wrapper)}>
          <div {...css(styles.DateTimePickerComponent_menu)}>
            <div {...css(styles.PresetOptionMenu)}>
              {presetTime && <div
                {...css(
                  styles.PresetOptionMenu_item_time,
                )}
                >
                <div>Select Hour</div>
                <div
                  {...css(
                    styles.PresetTime_Menu,
                  )}
                >
                  {presetTime.map(
                    ({ text, start, end }) => {
                      const isSelected=isSameHour(start,startDate) && isSameHour(end,endDate)
                      return (<span
                    {...css(
                      styles.PresetTime_Menu_Item,
                      isSelected && styles.PresetTime_Menu_Item_selected,
                    )}
                    ><button onClick={() => this.onPresetSelect({ startDate: start, endDate: end })}>{text}</button></span>)}
                     )}
                </div>
              </div>}
              {presetOptions.map(({ text, start, end }) => {
                const isSelected = isSameDay(start, startDate) && isSameDay(end, endDate);
                return (
                  <button
                    key={text}
                    {...css(
                      styles.PresetOptionMenu_item,
                      isSelected && styles.PresetOptionMenu_item_selected,
                    )}
                    type="button"
                    onClick={() => this.onPresetSelect({ startDate: start, endDate: end })}
                  >
                  {text}
                  </button>
                );
              })}
            </div>
            {!!(this.onApply || this.onCancel) &&
              <div {...css(styles.DateTimeRangePicker_ConfirmWrapper)}>
                {!!this.onApply &&
                <div {...css(styles.DateTimePickerComponent_ConfirmButton_Wrapper)}>
                  <button
                    disabled={!startDate || !endDate}
                    onClick={() => this.onApply({ startDate, endDate })}
                    tabIndex={3}
                    {...css(styles.DateTimePickerComponent_Apply, styles.DateTimePickerComponent_ConfirmButton)}
                  >Apply
                  </button>
                </div>}
                {!!this.onCancel &&
                  <div {...css(styles.DateTimePickerComponent_ConfirmButton_Wrapper)}>
                  <button
                    disabled={!startDate || !endDate}
                    onClick={() => this.onCancel({ startDate, endDate })}
                    tabIndex={4}
                    {...css(styles.DateTimePickerComponent_Cancel, styles.DateTimePickerComponent_ConfirmButton)}
                  >Cancel
                  </button>
              </div> }
            </div>}
        </div>
        </div>
      )
    }
  }
  onApply(newDates) {
    const { onApply } = this.props;
    const { selected: { startDate, endDate } } = this.state;
    const oldDates = {
      startDate,
      endDate,
    };
    this.setState({
      selected: { ...newDates },
    });
    onApply(newDates, oldDates);
    this.onFocusChange(null);
  }
  onCancel() {
    const { selected: { startDate, endDate } } = this.state;
    const { onCancel } = this.props;
    this.setState({
      startDate,
      endDate,
    });
    if(onCancel){
      onCancel({ startDate, endDate });
    }
    this.onFocusChange(null);
  }
  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
  }
  onFocusChange(focusedInput) {
    const {
      selected,
    } = this.state;
    const {
      stateDateWrapper,
    } = this.props;
    if (focusedInput == null) {
      this.setState({
        startDate: selected.startDate && stateDateWrapper(selected.startDate),
        endDate: selected.startDate && stateDateWrapper(selected.startDate),
        focusedInput,
      });
    }
    this.setState({ focusedInput });
  }
  render() {
    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate",
      "stateDateWrapper",
      "onApply",
      "onCancel",
      "selected",
      "startDate",
      "endDate",
      "presetOptions",
      "applyOnPreset",
    ]);
    const {
      startDate,
      endDate,
      focusedInput,
      selected,
    } = this.state;
    return (
      <div>
        <DateTimeRangePicker
          {...props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          selected={selected}
          focusedInput={focusedInput}
          startDate={startDate}
          onApply={this.onApply}
          onCancel={this.onCancel}
          verticalSpacing={10}
          endDate={endDate}
          calendarInfoPosition="after"
          renderCalendarInfo={this.generatePresetOption}
        />
      </div>
    );
  }
}
DateTimePickerComponent.propTypes = propTypes;
DateTimePickerComponent.defaultProps = defaultProps;
export { DateTimePickerComponent as PureDateTimePickerComponent}
export default withStyles(({ reactDates: { color, sizing } }) => (
  {
    PresetOptionMenu_Wrapper: {
      width:200
    },
    PresetOptionMenu_item_time:{
      position: "relative",
      border: 0,
      outline: 0,
      borderBottom: `1px solid ${color.core.borderLight}`,
      display: "block",
      width: 200,
      padding: "5px 10px",
    },
    PresetTime_Menu:{
      margin: '5px auto',
      display: 'table',
      borderRadius:4,
    },
    PresetTime_Menu_Item:{
      border: `1px solid ${color.core.borderLight}`,
      borderRightWidth:0,
      display:'table-cell',
      ':hover': {
        backgroundColor: color.core.primary,
        color: color.background,
      },
      ':first-child':{
        borderRadius:'4px 0 0 4px'
      },
      ':last-child': {
        borderRadius: '0 4px 4px 0',
        borderRightWidth: 1,
      }
    },
    PresetTime_Menu_Item_selected:{
      backgroundColor: color.core.primary,
      color: color.background,
    },
    PresetOptionMenu_item: {
      position: "relative",
      border:0,
      outline:0,
      cursor: 'pointer',
      borderBottom: `1px solid ${color.core.borderLight}`,
      display: "block",
      width: 200,

      padding: "5px 0",
      ':focus': {
        outline: 0
      },
      ':hover': {
        backgroundColor: color.core.primary,
        color: color.background,
      }
    },
    PresetOptionMenu_item_selected: {
      backgroundColor: color.core.primary,
      color: color.background,
    },
    DateTimePickerComponent_ConfirmButton: {
      padding: `${sizing.confirmButtonPadding.vertical}px ${sizing.confirmButtonPadding.horizontal}px`,
      height: `${sizing.confirmButtonHeight}px`,
      width: `${sizing.confirmButtonMinWidth}px`,
      border: 0,
      margin:'0 auto',
      cursor:'pointer',
      fontWeight: 800,
      textAlign:'center',
      display:'block',
      borderRadius: '5px',
      textTransform: 'uppercase',
      fontSize: 12,
    },
    DateTimePickerComponent_Apply: {
      backgroundColor: color.confirmButton.apply.background,
      color: color.confirmButton.apply.text,
      ':disabled': {
        backgroundColor: color.confirmButton.apply.disabled,
        cursor: 'not-allowed',
      },
    },
    DateTimePickerComponent_Cancel: {
      backgroundColor: color.confirmButton.cancel.background,
      color: color.confirmButton.cancel.text,
      ':disabled': {
        backgroundColor: color.confirmButton.cancel.disabled,
        cursor: 'not-allowed',
      },
    },
    DateTimePickerComponent_ConfirmButton_Wrapper:{
      paddingTop:'10px',
      margin:'0 auto',
    },
    DateTimePickerComponent_menu:{
      border: `1px solid ${color.core.borderLight}`,
      position: 'absolute',
      top: 0,
      bottom: 0,
    },
    DateTimeRangePicker_ConfirmWrapper: {
      position:"relative",
      fontWeight:"bold",
      border:0,
      height: "fit-content",
      backgroundColor:"transparent",
    },
  }
))(DateTimePickerComponent);
