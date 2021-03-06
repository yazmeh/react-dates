import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DateTimePickerComponent from '../src/components/DateTimePickerComponent';
import DatePickerPresetsComponent from '../src/components/DatePickerPresetsComponent';
import DateTimeRangePickerWrapper from '../examples/DateTimeRangePickerWrapper';
import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';
import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';
import PresetDateRangePickerWrapper from '../examples/PresetDateRangePicker';

function App() {

  return (
    <div>
      <DateTimePickerComponent autoFocus />
      <DatePickerPresetsComponent presetOptions={[{
        text:'',
        end:moment(),
        start:moment(),
      }]} autoFocus />
      <DateTimeRangePickerWrapper autoFocus />
      <DateRangePickerWrapper autoFocus />
      <SingleDatePickerWrapper autoFocus />
      <PresetDateRangePickerWrapper autoFocus />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
