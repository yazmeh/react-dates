import React from 'react';
import ReactDOM from 'react-dom';

import DateTimePickerComponent from '../src/components/DateTimePickerComponent';
import DateTimeRangePickerWrapper from '../examples/DateTimeRangePickerWrapper';
import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';
import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';
import PresetDateRangePickerWrapper from '../examples/PresetDateRangePicker';

function App() {
  return (
    <div>
      <DateTimePickerComponent autoFocus />
      <DateTimeRangePickerWrapper autoFocus />
      <DateRangePickerWrapper autoFocus />
      <SingleDatePickerWrapper autoFocus />
      <PresetDateRangePickerWrapper autoFocus />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
