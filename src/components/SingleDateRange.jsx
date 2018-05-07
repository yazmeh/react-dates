import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { START_DATE, END_DATE } from '../constants';

const propTypes={
    startDate:PropTypes.string,
    startDateId: PropTypes.string,
    startDatePlaceholderText: PropTypes.string,
    isStartDateFocused: PropTypes.bool,
    rangeSeparator: PropTypes.string,
    endDate: PropTypes.string,
    endDateId: PropTypes.string,
    endDatePlaceholderText: PropTypes.string,
    isEndDateFocused: PropTypes.bool,
    onStartDateFocus: PropTypes.func,
    isRTL: PropTypes.bool,
}
const defaultProps ={
    startDate: null,
    startDateId: START_DATE,
    startDatePlaceholderText: 'Start Date',
    isStartDateFocused: false,

    endDate: null,
    endDateId: END_DATE,
    endDatePlaceholderText: 'End Date',
    isEndDateFocused: false,

    rangeSeparator: ' - ',
    displayFormat: () => moment.localeData().longDateFormat('L'),
    // accessibility
    isRTL: false,
}

class SingleDateRange extends React.Component{
    render(){
        const {
            startDate,
            endDate,
            rangeSeparator,
            styles,
            small,
            onStartDateFocus,
        } =this.props
        return (
            <div onClick={onStartDateFocus}
                {...css(
                    styles.SingleDateRange,
                    small?styles.SingleDateRange_small:styles.SingleDateRange_normal,
                )}>
                <div>
                    {`${startDate}${rangeSeparator}${endDate}`}
                </div>    
            </div>    
        )
    }
}
SingleDateRange.propTypes=propTypes;
SingleDateRange.defaultProps=defaultProps;
export default withStyles(({reactDates:{border,font,color,spacing}}) =>({
    SingleDateRange:{
        display:'inline-block',   
        backgroundColor:color.background,
        color:color.text,
        boxSizing:'content-box',
        border:border.input.border,
        borderRadius:'10px'
    },
    SingleDateRange_small:{
        height:font.input.lineHeight_small,
        lineHeight: font.input.lineHeight_small,
        padding: `${spacing.displayTextPaddingVertical_small}px ${spacing.displayTextPaddingHorizontal_small}px`,
        paddingTop: spacing.displayTextPaddingTop_small,
        paddingBottom: spacing.displayTextPaddingBottom_small,
        paddingLeft: spacing.displayTextPaddingLeft_small,
        paddingRight: spacing.displayTextPaddingRight_small,
    },
    SingleDateRange_normal: {
        height: font.input.lineHeight,
        lineHeight: font.input.lineHeight,
        padding: `${spacing.displayTextPaddingVertical}px ${spacing.displayTextPaddingHorizontal}px`,
        paddingTop: spacing.displayTextPaddingTop,
        paddingBottom: spacing.displayTextPaddingBottom,
        paddingLeft: spacing.displayTextPaddingLeft,
        paddingRight: spacing.displayTextPaddingRight,
    }

}) )(SingleDateRange)