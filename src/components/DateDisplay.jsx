import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import momentPropTypes from 'react-moment-proptypes';


const propTypes = {
  ...withStylesPropTypes,
	date: momentPropTypes.momentObj,
  align:PropTypes.string,
  setFocus:PropTypes.func,
  isFocused:PropTypes.bool,
}
const defaultProps ={
  date: momentPropTypes.momentObj,
  align: PropTypes.string,
  setFocus: PropTypes.func,
  isFocused: PropTypes.bool,
}
class DateDisplay extends React.Component {
  getDate(format){
  const {
      date
    } = this.props;
    if(date){
      return date.format(format);
    }
    else{
      return format.split(/./).join('-')
    }
  }
  render(){
    const {
      styles,
      align,
      setFocus,
      isFocused,
    } = this.props
    return (
      <div onClick={setFocus}
        {...css(
          styles.DateDisplay,
          isFocused && styles.DateDisplay_isFocused,
        )} >
        <div {...css(
          (align === 'right') && styles.DateDisplay_alignRight,
          (align === 'left') && styles.DateDisplay_alignLeft,
        )}>
          <div className={'day'}
            {...css(
              styles.DateDisplay_Day
            )}>
            {this.getDate("DD")}
          </div>
          <div
            {...css(
              styles.DateDisplay_MonthYearDowWrapper
            )}
          >
            <div className={'monthDisplay yearDisplay'}
              {...css(
                styles.DateDisplay_MonthYear
              )}>{this.getDate("MMMM YYYY")}</div>
            <div className={'dowDisplay'}
              {...css(
                styles.DateDisplay_DOW
              )}>{this.getDate("dddd")}</div>
          </div>
        </div>
      </div>
    )
  }
}
DateDisplay.propTypes=propTypes;
export default withStyles(({
  reactDates: {
    border, color, sizing, spacing, font, zIndex,
  },
}) =>({
   DateDisplay:{
     display:'inline-block',
     width:'50%',
     boxContent:'border-box',
     padding: '20px 20px',
     borderBottom:'2px solid tranparent'
   },
  DateDisplay_alignLeft:{
    float: 'left'
  },
  DateDisplay_alignRight:{
    float:'right'
  },
  DateDisplay_isFocused:{
    borderBottom:`2px solid ${color.selected.backgroundColor}`,
  },
  DateDisplay_Day: {
    display: 'inline-block',
    fontSize:'25px',
    padding:'0 5px',
    textAlign:'center',
    fontWeight:'bold',
    verticalAlign: 'middle',
    color: color.text,
  },
  DateDisplay_MonthYearDowWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: color.text,
  },
  DateDisplay_MonthYear:{
    fontSize:'13px',
    fontWeight: 'bold'
  },
  DateDisplay_DOW: {
    fontSize: '12px'
  }

}) )(DateDisplay) ;