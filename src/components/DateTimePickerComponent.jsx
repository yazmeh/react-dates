import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimeRangePicker from './DateTimeRangePicker';
import DateRangePickerShape from '../shapes/DateRangePickerShape';
import { DateRangePickerPhrases } from '../defaultPhrases';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../constants';

const propTypes = {
    ...omit(DateRangePickerShape, [
        'startDate',
        'endDate',
        'onDatesChange',
        'focusedInput',
        'onFocusChange',
    ]),
}
const today=moment().hour(12);
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
    renderMonth: null,
    is24HourFormat:true,
    orientation: HORIZONTAL_ORIENTATION,
    anchorDirection: ANCHOR_LEFT,
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
    onPrevMonthClick() { },
    onNextMonthClick() { },
    onClose() { },

    // day presentation and interaction related props
    renderCalendarDay: undefined,
    renderDayContents: null,
    minimumNights: 1,
    enableOutsideDays: false,
    isDayBlocked: (day) => day.isBefore(today),
    isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    isDayHighlighted: () => false,
    
    // internationalization
    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY',
    phrases: DateRangePickerPhrases,

    stateDateWrapper: date => date,
};
class DateTimePickerComponent extends React.Component{
    constructor(props){
        super(props);
        const {
            endDate,
            startDate,
            autoFocus,
            autoFocusEndDate,
        }=props;
        let focusedInput=null;
        if(autoFocus){
            focusedInput = START_DATE;
        }
        else if (autoFocusEndDate){
            focusedInput = END_DATE;
        }
        this.state = {
            focusedInput,
            startDate,
            endDate,
            selected:{
                startDate,
                endDate,
            }
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }
    onDatesChange({ startDate, endDate }) {
        const { stateDateWrapper } = this.props;
        if(startDate && endDate){
            this.setState({
                selected:{
                    startDate,
                    endDate,
                },
                startDate: startDate && stateDateWrapper(startDate),
                endDate: endDate && stateDateWrapper(endDate),
            })
        }
        this.setState({
            startDate: startDate && stateDateWrapper(startDate),
            endDate: endDate && stateDateWrapper(endDate),
        });
    }
    onFocusChange(focusedInput) {
        const {
            selected
        }=this.state;
        if (focusedInput==null){
            this.setState({
                startDate: selected.startDate && stateDateWrapper(selected.startDate),
                endDate: selected.startDate && stateDateWrapper(selected.startDate),
                focusedInput,
            })  
        }
        else{
            this.setState({ focusedInput });
        }
    }
    render(){
        <div>
            <DateTimeRangePicker
                {...props}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                displayFormat="DD/MM/YYYY HH:mm:ss"
                focusedInput={focusedInput}
                startDate={startDate}
                verticalSpacing={10}
                isDayBlocked={(day) => moment().isBefore()}
                endDate={endDate}
            />
        </div>
    }
}