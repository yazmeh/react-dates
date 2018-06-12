import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateRangePicker from './DateRangePicker';
import DateRangePickerShape from '../shapes/DateRangePickerShape';
import omit from 'lodash/omit';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { DateRangePickerPhrases } from '../defaultPhrases';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_RIGHT } from '../constants';
import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import isSameDay from '../utils/isSameDay';
const propTypes = {
  ...omit(DateRangePickerShape, [
    'startDate',
    'endDate',
    'onDatesChange',
    'focusedInput',
    'onFocusChange',
  ]),
  ...withStylesPropTypes,
  onApply:PropTypes.func,
  onCancel:PropTypes.func,
  presetOptions:PropTypes.array
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

  //Wrappers Props
  onApply:()=>{},
  onCancel:()=>{},

  // calendar presentation and interaction related props
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
  

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: day => day.isBefore(today),
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,

  stateDateWrapper: date => date,
};
class DatePickerPresetsComponent extends React.Component {
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
      initialVisibleMonth:(startDate||moment()).month - 1,
      selected: {
        startDate,
        endDate,
      },
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
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
  generatePresetOption(){
    const {styles,presetOptions} =  this.props;
    const {startDate,endDate} = this.state;
    return (
      <div {...css(styles.PresetOptionMenu)}>
        {presetOptions.map(({text,start,end})=>{
          const isSelected = isSameDay(start, startDate) && isSameDay(end, endDate);
          return (
            <button 
              key={text}
              {...css(
                styles.PresetOptionMenu_item,
                isSelected && styles.PresetOptionMenu_item_selected,
              )}
              type="button"
              onClick={() => this.onDatesChange({ startDate: start, endDate: end })}
              >
              {text}
            </button>
          );
       })}
      </div>
    )
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
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
      'onApply',
      'onCancel',
      'selected',
      'startDate',
      'endDate',
      'presetOptions',
    ]);
    const {
      startDate,
      endDate,
      focusedInput,
      selected,
      initialVisibleMonth,
    } = this.state;
    const {
      presetOptions
    } = this.props
    return (
      <div>
        <DateRangePicker
          {...props}
          initialVisibleMonth={()=>((startDate||moment()).subtract(1,"month"))}
          calendarInfoPosition="after"
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          verticalSpacing={10}
          endDate={endDate}
          renderCalendarInfo={this.generatePresetOption}
        />
      </div>
    );
  }
}

DatePickerPresetsComponent.propTypes = propTypes;
DatePickerPresetsComponent.defaultProps = defaultProps;
export { DatePickerPresetsComponent as PurePresetsComponent};
export default withStyles(({ reactDates: { color } })=>(
  {
    PresetOptionMenu:{
      // position:"absolute",
      // width:300,
      // top:0 ,
      // left:-300, 
      // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)',
      // backgroundColor:color.background,
      height:'100%'
    },
    PresetOptionMenu_item:{
      position:"relative",  
      display:"block",
      width:300,

      padding:"10px 0",
      ':focus':{
        outline:0
      },
      ':hover':{
        backgroundColor:color.core.primary,
        color:color.background,
      }
    },
    PresetOptionMenu_item_selected:{
      backgroundColor:color.core.primary,
      color:color.background,  
    },
  }
))(DatePickerPresetsComponent);