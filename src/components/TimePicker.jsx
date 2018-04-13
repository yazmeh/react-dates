import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import moment from 'moment';
import ChevronUp from './ChevronUp'
import ChevronDown from './ChevronDown' 
 

const propTypes = {
    is24HourFormat: PropTypes.bool,
    time: PropTypes.object,
    type: PropTypes.string,
    onTimeChange: PropTypes.func,
}
class TimePicker extends React.Component {
    constructor(props){
        super(props);
        const {
            time,
            is24HourFormat
        }=props;
        this.state={
            hour: {
                min: is24HourFormat ? 0 : 1,
                max: is24HourFormat ? 24 : 12,
                format: is24HourFormat ? "HH" : "hh",
                value: time.format(is24HourFormat ? "HH" : "hh")
            },
            minute: {
                min: 0,
                max: 59,
                format: "mm",
                value: time.format("mm")
            },
            meridiem: {
                format: "a",
                value: time.format("a")
            }
        };
        this.onChange = this.onChange.bind(this)
        this.onBlur = this.onBlur.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this); 
        this.toogleMeridiem = this.toogleMeridiem.bind(this);
    }
    onChange(e,type) {
        let state={...this.state};
        let input=e.target.value;
        if(!isNaN(input)){
            if (input.trim().length === 0) {
                state[type].value = input;
                this.setState(state);
                return;
            }
            input = parseInt(input)            
            if (input >= state[type].min && input <= state[type].max){
                if(input<10){
                    input=`0${input}`
                }
                state[type].value=input;
                this.setState(state);
            }

        }
    }
    onTimeChange(){
        const {
            hour,
            minute,
            meridiem,
        } = this.state;
        const {
            is24HourFormat,
            type,
        } = this.props;
        if (is24HourFormat) {
            time = moment(`${hour.value}:${minute.value}`, `${hour.format}:${minute.format}`)
        }
        else {
            time = moment(`${hour.value}:${minute.value} ${meridiem.value}`, `${hour.format}:${minute.format} ${meridiem.format}`)
        }
        this.props.onTimeChange(time,type);
    }
    onIncrement(type){
        let state=this.state;
        let time;
        if (state[type].value < state[type].max){
            let input = parseInt(state[type].value)
            input+=1;
            state[type].value=input<10?`0${input}`:input;
            this.setState(state);
            this.onTimeChange();
        }
    }
    onDecrement(type) {
        let state = this.state;
        let time;
        if (state[type].value > state[type].min) {
            let input = parseInt(state[type].value)
            input -= 1;
            state[type].value = input < 10 ? `0${input}` : input;
            this.setState(state);
            this.onTimeChange();
        }
    }
    onFocus(e){
        e.target.select();
    }
    onBlur(e,type){
        let state = { ...this.state };
        if(!state[type].value.trim().length){
            state[type].value = this.props.time.format(state[type].format);
            this.setState(state);
        }
        this.onTimeChange();

    }
    toogleMeridiem(){
        let state={...this.state}
        if(state.meridiem.value==="am"){
            state.meridiem.value="pm";
            this.setState(state);
            this.onTimeChange();
        }
        else if (state.meridiem.value === "pm"){
            state.meridiem.value = "am";
            this.setState(state);
            this.onTimeChange();
        }
    }
    render() {
        const {
            hour,
            minute,
            meridiem,
        } = this.state;
        const {
            styles,
            is24HourFormat,
        } = this.props;
        return (
            <div
            {...css(styles.TimePicker)}
            >
                <div className={"hour"} 
                    {...css(
                        styles.TimePicker_toggleContainer, 
                        styles.TimePicker_separator
                        )}>
                    <button className={"time-toogle increment hour-toogle"}
                        onClick={() => this.onIncrement('hour')}
                        {...css(styles.TimePicker_toggle)} >
                        {/* &#9652; */}<ChevronUp />
                    </button>
                    <input 
                        type={"text"} 
                        value={hour.value}
                        onChange={(e) => this.onChange(e,"hour")}
                        onFocus={this.onFocus}
                        onBlur={(e) => this.onBlur(e, "hour")}
                        {...css(styles.TimePicker_input)}/>
                    <button className={"time-toogle decrement hour-toogle"}
                        onClick={() => this.onDecrement('hour')}
                        {...css(styles.TimePicker_toggle)} > 
                        {/* &#9662; */}<ChevronDown />
                    </button>
                </div>
                <div className={"min"}
                    {...css(
                        styles.TimePicker_toggleContainer,
                        !is24HourFormat && styles.TimePicker_separator
                        )}>
                    <button className={"time-toogle increment min-toogle"}
                        onClick={() => this.onIncrement('minute')}
                        {...css(styles.TimePicker_toggle)} >
                        {/* &#9652; */}<ChevronUp />
                    </button>
                    <input type={"text"} 
                        value={minute.value}
                        onFocus={this.onFocus}
                        onChange={(e) => this.onChange(e, "minute")}
                        onBlur={(e) => this.onBlur(e, "minute")}
                        {...css(styles.TimePicker_input)}/>
                    <button className={"time-toogle decrement min-toogle"}
                        onClick={() => this.onDecrement('minute')}
                        {...css(styles.TimePicker_toggle)}>
                        {/* &#9662; */}<ChevronDown />
                    </button>
                </div>
                {!is24HourFormat && <div className={"mediterian"}
                    {...css(styles.TimePicker_appm_wrapper)}>
                    <button
                        onClick={this.toogleMeridiem} 
                        {...css(styles.TimePicker_appm)}>{meridiem.value}</button>
                </div>}
            </div>
        )
    }
}

TimePicker.propTypes=propTypes;
export { TimePicker as PureTimePicker};
export default withStyles((props) =>{
    console.log(props);
    return {
    TimePicker:{
        width:'50%',
        height:'90px',
        backgroundColor: '#F0F6FB',
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center',
        border: '1px solid #E7EAF0',
    },
    TimePicker_toggleContainer: {
        display:'inline-block',
        width:'80px',
        height:'100%',
        padding:'0 25px',
        position:'relative',
    },
    TimePicker_separator:{
        '::after': {
            content: "':'",
            position: 'absolute',
            right: '0',
            display: 'inline-block',
            height: '30px',
            lineHeight: '30px',
            fontWeight: '800',
            top: 'calc(50% - 15px)',
        }
    },
    TimePicker_toggle:{
        textAlign: 'center',
        fontSize:'20px',
        height:'30px',
        lineHeight:'30px',
        cursor:'pointer',
        width:'100%',
        backgroundColor:'transparent',
        border:'0px solid transparent',
        outline: '0px solid transparent',
    },
    TimePicker_appm_wrapper:{
        width:'80px',
        textAlign:'center',
    },
    TimePicker_appm:{
        backgroundColor: '#3290DE',
        border:'0 solid transparent',
        color:'white',
        fontWeight:'400',
        height:'26px',
        lineHeight:'26px',
        borderRadius:'3px',
    },
    TimePicker_input: {
        width:'100%',
        height:'30px',
        textAlign:"center",
        margin:'auto',
    }

}})(TimePicker)