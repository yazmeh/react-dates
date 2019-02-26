import React from 'react';
import moment from 'moment';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { Portal } from 'react-portal';
import { forbidExtraProps } from 'airbnb-prop-types';
import { addEventListener } from 'consolidated-events';
import isTouchDevice from 'is-touch-device';
import OutsideClickHandler from 'react-outside-click-handler';

import DateTimeRangePickerShape from '../shapes/DateTimeRangePickerShape';
import { DateRangePickerPhrases } from '../defaultPhrases';

import getResponsiveContainerStyles from '../utils/getResponsiveContainerStyles';
import getDetachedContainerStyles from '../utils/getDetachedContainerStyles';
import getInputHeight from '../utils/getInputHeight';
import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import disableScroll from '../utils/disableScroll';
import noflip from '../utils/noflip';
import SingleDateRangeController from './SingleDateRangeController';
import DayTimePickerRangeController from './DayTimePickerRangeController';
import CloseButton from './CloseButton';

import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  ANCHOR_LEFT,
  ANCHOR_RIGHT,
  OPEN_DOWN,
  OPEN_UP,
  DAY_SIZE,
  ICON_BEFORE_POSITION,
  INFO_POSITION_BOTTOM,
  FANG_HEIGHT_PX,
  DEFAULT_VERTICAL_SPACING,
} from '../constants';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  ...DateTimeRangePickerShape,
});

const defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,

  // input related props
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateOffset: undefined,
  endDateOffset: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  inputIconPosition: ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  keepFocusOnInput: false,
  inputDateTimeElement:null,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  openDirection: OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  calendarInfoPosition: INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: DAY_SIZE,
  isRTL: false,
  firstDayOfWeek: null,
  verticalHeight: null,
  transitionDuration: undefined,
  verticalSpacing: DEFAULT_VERTICAL_SPACING,
  horizontalMonthPadding: undefined,

  // navigation related props
  navPrev: null,
  navNext: null,

  onPrevMonthClick() { },
  onNextMonthClick() { },

  onClose() { },

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  minimumNights: 1,
  enableOutsideDays: true,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: DateRangePickerPhrases,
  dayAriaLabelFormat: undefined,
};

class DateTimeRangePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      startDate,
      endDate,
    } = props;

    this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false,
      selected:{
        startDate,
        endDate,
      }
    };

    this.isTouchDevice = false;

    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.onDateRangePickerInputFocus = this.onDateRangePickerInputFocus.bind(this);
    this.onDayPickerFocus = this.onDayPickerFocus.bind(this);
    this.onDayPickerFocusOut = this.onDayPickerFocusOut.bind(this);
    this.onDayPickerBlur = this.onDayPickerBlur.bind(this);
    this.showKeyboardShortcutsPanel = this.showKeyboardShortcutsPanel.bind(this);

    this.responsivizePickerPosition = this.responsivizePickerPosition.bind(this);
    this.disableScroll = this.disableScroll.bind(this);

    this.setDayPickerContainerRef = this.setDayPickerContainerRef.bind(this);
    this.setContainerRef = this.setContainerRef.bind(this);
  }

  componentDidMount() {
    this.removeEventListener = addEventListener(
      window,
      'resize',
      this.responsivizePickerPosition,
      { passive: true },
    );
    this.responsivizePickerPosition();
    this.disableScroll();

    const { focusedInput } = this.props;
    if (focusedInput) {
      this.setState({
        isDateRangePickerInputFocused: true,
      });
    }

    this.isTouchDevice = isTouchDevice();
  }

  componentDidUpdate(prevProps) {
    const { 
      focusedInput, 
      startDate,
      endDate,
    } = this.props;
    if (!prevProps.focusedInput && focusedInput && this.isOpened()) {
      // The date picker just changed from being closed to being open.
      this.responsivizePickerPosition();
      this.disableScroll();
    } else if (prevProps.focusedInput && !focusedInput && !this.isOpened()) {
      // The date picker just changed from being open to being closed.
      if (this.enableScroll) this.enableScroll();
    }
    if(startDate&& endDate){
      if (!startDate.isSame(this.state.selected.startDate) || !endDate.isSame(this.state.selected.endDate)) {            
        this.setState({            
          selected: {            
            startDate,            
            endDate            
          }            
        });            
      }
    }
  }

  componentWillUnmount() {
    this.removeDayPickerEventListeners();
    if (this.removeEventListener) this.removeEventListener();
    if (this.enableScroll) this.enableScroll();
  }

  onOutsideClick(event) {
    const {
      onFocusChange,
      onClose,
      startDate,
      endDate,
      appendToBody,
    } = this.props;

    if (!this.isOpened()) return;
    if (appendToBody && this.dayPickerContainer.contains(event.target)) return;

    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false,
    });

    onFocusChange(null);
    onClose({ startDate, endDate });
  }
  dateChange({ startDate, endDate }) {            
      // if (startDate && endDate) {            
      // }            
      this.setState({ ...this.state, selected: { startDate, endDate } });            
      this.props.onDatesChange({ startDate, endDate });            
  }
  onDateRangePickerInputFocus(focusedInput) {
    const {
      onFocusChange,
      readOnly,
      withPortal,
      withFullScreenPortal,
      keepFocusOnInput,
    } = this.props;

    if (focusedInput) {
      const withAnyPortal = withPortal || withFullScreenPortal;
      const moveFocusToDayPicker = withAnyPortal
        || (readOnly && !keepFocusOnInput)
        || (this.isTouchDevice && !keepFocusOnInput);

      if (moveFocusToDayPicker) {
        this.onDayPickerFocus();
      } else {
        this.onDayPickerBlur();
      }
    }

    onFocusChange(focusedInput);
  }

  onDayPickerFocus() {
    const { focusedInput, onFocusChange } = this.props;
    if (!focusedInput) onFocusChange(START_DATE);

    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: false,
    });
  }

  onDayPickerFocusOut(event) {
    // In cases where **relatedTarget** is not null, it points to the right
    // element here. However, in cases where it is null (such as clicking on a
    // specific day), the appropriate value is **event.target**.
    //
    // We handle both situations here by using the ` || ` operator to fallback
    // to *event.target** when **relatedTarget** is not provided.
    if (this.dayPickerContainer.contains(event.relatedTarget || event.target)) return;
    this.onOutsideClick(event);
  }

  onDayPickerBlur() {
    this.setState({
      isDateRangePickerInputFocused: true,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false,
    });
  }

  setDayPickerContainerRef(ref) {
    if (ref === this.dayPickerContainer) return;
    if (this.dayPickerContainer) this.removeDayPickerEventListeners();

    this.dayPickerContainer = ref;
    if (!ref) return;

    this.addDayPickerEventListeners();
  }

  setContainerRef(ref) {
    this.container = ref;
  }

  addDayPickerEventListeners() {
    // NOTE: We are using a manual event listener here, because React doesn't
    // provide FocusOut, while blur and keydown don't provide the information
    // needed in order to know whether we have left focus or not.
    //
    // For reference, this issue is further described here:
    // - https://github.com/facebook/react/issues/6410
    this.removeDayPickerFocusOut = addEventListener(
      this.dayPickerContainer,
      'focusout',
      this.onDayPickerFocusOut,
    );
  }

  removeDayPickerEventListeners() {
    if (this.removeDayPickerFocusOut) this.removeDayPickerFocusOut();
  }

  isOpened() {
    const { focusedInput } = this.props;
    return focusedInput === START_DATE || focusedInput === END_DATE;
  }

  disableScroll() {
    const { appendToBody, disableScroll: propDisableScroll } = this.props;
    if (!appendToBody && !propDisableScroll) return;
    if (!this.isOpened()) return;

    // Disable scroll for every ancestor of this DateRangePicker up to the
    // document level. This ensures the input and the picker never move. Other
    // sibling elements or the picker itself can scroll.
    this.enableScroll = disableScroll(this.container);
  }

  responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    this.setState({ dayPickerContainerStyles: {} });

    if (!this.isOpened()) {
      return;
    }

    const {
      openDirection,
      anchorDirection,
      horizontalMargin,
      withPortal,
      withFullScreenPortal,
      appendToBody,
    } = this.props;
    const { dayPickerContainerStyles } = this.state;

    const isAnchoredLeft = anchorDirection === ANCHOR_LEFT;
    if (!withPortal && !withFullScreenPortal) {
      const containerRect = this.dayPickerContainer.getBoundingClientRect();
      const currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      const containerEdge = isAnchoredLeft
        ? containerRect[ANCHOR_RIGHT]
        : containerRect[ANCHOR_LEFT];

      this.setState({
        dayPickerContainerStyles: {
          ...getResponsiveContainerStyles(
            anchorDirection,
            currentOffset,
            containerEdge,
            horizontalMargin,
          ),
          ...(appendToBody && getDetachedContainerStyles(
            openDirection,
            anchorDirection,
            this.container,
          )),
        },
      });
    }
  }

  showKeyboardShortcutsPanel() {
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: true,
    });
  }

  maybeRenderDayPickerWithPortal() {
    const { withPortal, withFullScreenPortal, appendToBody } = this.props;

    if (!this.isOpened()) {
      return null;
    }

    if (withPortal || withFullScreenPortal || appendToBody) {
      return (
        <Portal>
          {this.renderDayPicker()}
        </Portal>
      );
    }

    return this.renderDayPicker();
  }

  renderDayPicker() {
    const {
      anchorDirection,
      openDirection,
      isDayBlocked,
      isDayHighlighted,
      isOutsideRange,
      numberOfMonths,
      orientation,
      monthFormat,
      renderMonthText,
      navPrev,
      navNext,
      onPrevMonthClick,
      onNextMonthClick,
      onDatesChange,
      minDate,
      maxDate,
      onFocusChange,
      withPortal,
      withFullScreenPortal,
      daySize,
      enableOutsideDays,
      focusedInput,
      startDate,
      startDateOffset,
      endDate,
      endDateOffset,
      minimumNights,
      keepOpenOnDateSelect,
      renderCalendarDay,
      renderDayContents,
      renderCalendarInfo,
      renderMonthElement,
      calendarInfoPosition,
      firstDayOfWeek,
      initialVisibleMonth,
      hideKeyboardShortcutsPanel,
      customCloseIcon,
      onClose,
      phrases,
      dayAriaLabelFormat,
      isRTL,
      weekDayFormat,
      styles,
      verticalHeight,
      transitionDuration,
      verticalSpacing,
      horizontalMonthPadding,
      small,
      disabled,
      isDateRangePickerInputFocused,
      onApply,
      onCancel,
      displayRangeFormat,
      disableMinutes,
      hideTime,
      is24HourFormat,
      startDateId,
      endDateId,
      theme: { reactDates },
    } = this.props;

    const { dayPickerContainerStyles, isDayPickerFocused, showKeyboardShortcuts,selected } = this.state;

    const onOutsideClick = (!withFullScreenPortal && withPortal)
      ? this.onOutsideClick
      : undefined;
    const initialVisibleMonthThunk = initialVisibleMonth || (
      () => (startDate || endDate || moment())
    );

    const closeIcon = customCloseIcon || (
      <CloseButton {...css(styles.DateTimeRangePicker_closeButton_svg)} />
    );

    const inputHeight = getInputHeight(reactDates, small);

    const withAnyPortal = withPortal || withFullScreenPortal;
    const displayRangeProp={            
      startDate:selected.startDate,            
      startDateId:startDateId,            
      isStartDateFocused:(focusedInput === START_DATE ),            
      endDate: selected.endDate,             
      endDateId:endDateId,            
      format:displayRangeFormat,
      isEndDateFocused:(focusedInput === END_DATE) ,            
      onFocusChange:onFocusChange,            
      isFocused: isDateRangePickerInputFocused             
    }
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={this.setDayPickerContainerRef}
        {...css(
          styles.DateTimeRangePicker_picker,
          anchorDirection === ANCHOR_LEFT && styles.DateTimeRangePicker_picker__directionLeft,
          anchorDirection === ANCHOR_RIGHT && styles.DateTimeRangePicker_picker__directionRight,
          orientation === HORIZONTAL_ORIENTATION && styles.DateTimeRangePicker_picker__horizontal,
          orientation === VERTICAL_ORIENTATION && styles.DateTimeRangePicker_picker__vertical,
          !withAnyPortal && openDirection === OPEN_DOWN && {
            top: inputHeight + verticalSpacing,
          },
          !withAnyPortal && openDirection === OPEN_UP && {
            bottom: inputHeight + verticalSpacing,
          },
          withAnyPortal && styles.DateTimeRangePicker_picker__portal,
          withFullScreenPortal && styles.DateTimeRangePicker_picker__fullScreenPortal,
          isRTL && styles.DateTimeRangePicker_picker__rtl,
          dayPickerContainerStyles,
        )}
        onClick={onOutsideClick}
      >
        <DayTimePickerRangeController
          disableMinutes={disableMinutes}   
          hideTime={hideTime}
          displayRangeProp={displayRangeProp}
          is24HourFormat={is24HourFormat}
          minDate={minDate}
          maxDate={maxDate}
          orientation={orientation}
          enableOutsideDays={enableOutsideDays}
          numberOfMonths={numberOfMonths}
          onPrevMonthClick={onPrevMonthClick}
          onNextMonthClick={onNextMonthClick}
          onDatesChange={this.dateChange}
          onFocusChange={onFocusChange}
          onClose={onClose}
          focusedInput={focusedInput}
          startDate={startDate}
          startDateOffset={startDateOffset}
          endDate={endDate}
          endDateOffset={endDateOffset}
          monthFormat={monthFormat}
          renderMonthText={renderMonthText}
          withPortal={withAnyPortal}
          daySize={daySize}
          initialVisibleMonth={initialVisibleMonthThunk}
          hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
          navPrev={navPrev}
          navNext={navNext}
          minimumNights={minimumNights}
          isOutsideRange={isOutsideRange}
          isDayHighlighted={isDayHighlighted}
          isDayBlocked={isDayBlocked}
          keepOpenOnDateSelect={keepOpenOnDateSelect}
          renderCalendarDay={renderCalendarDay}
          renderDayContents={renderDayContents}
          renderCalendarInfo={renderCalendarInfo}
          renderMonthElement={renderMonthElement}
          calendarInfoPosition={calendarInfoPosition}
          isFocused={isDayPickerFocused}
          showKeyboardShortcuts={showKeyboardShortcuts}
          onBlur={this.onDayPickerBlur}
          phrases={phrases}
          dayAriaLabelFormat={dayAriaLabelFormat}
          isRTL={isRTL}
          firstDayOfWeek={firstDayOfWeek}
          weekDayFormat={weekDayFormat}
          verticalHeight={verticalHeight}
          transitionDuration={transitionDuration}
          disabled={disabled}
          horizontalMonthPadding={horizontalMonthPadding}
        />
        {withFullScreenPortal && (
          <button
            {...css(styles.DateTimeRangePicker_closeButton)}
            type="button"
            onClick={this.onOutsideClick}
            aria-label={phrases.closeDatePicker}
          >
            {closeIcon}
          </button>
        )}
      </div>
    );
  }

  render() {
    const {
      startDate,
      startDateId,
      startDatePlaceholderText,
      endDate,
      endDateId,
      endDatePlaceholderText,
      focusedInput,
      screenReaderInputMessage,
      showClearDates,
      showDefaultInputIcon,
      inputIconPosition,
      customInputIcon,
      customArrowIcon,
      customCloseIcon,
      disabled,
      required,
      readOnly,
      openDirection,
      phrases,
      isOutsideRange,
      minimumNights,
      withPortal,
      withFullScreenPortal,
      inputDateTimeElement,
      displayFormat,
      reopenPickerOnClearDates,
      keepOpenOnDateSelect,
      onDatesChange,
      onClose,
      isRTL,
      noBorder,
      block,
      verticalSpacing,
      small,
      regular,
      styles,
      is24HourFormat,
      selected,
    } = this.props;

    const { isDateRangePickerInputFocused } = this.state;

    const enableOutsideClick = (!withPortal && !withFullScreenPortal);

    const hideFang = verticalSpacing < FANG_HEIGHT_PX;

    const input = (
      <SingleDateRangeController
        inputDateTimeElement={inputDateTimeElement}
        startDate={startDate}
        startDateId={startDateId}
        startDatePlaceholderText={startDatePlaceholderText}
        isStartDateFocused={focusedInput === START_DATE}
        endDate={endDate}
        endDateId={endDateId}
        endDatePlaceholderText={endDatePlaceholderText}
        isEndDateFocused={focusedInput === END_DATE}
        displayFormat={displayFormat}
        onFocusChange={this.onDateRangePickerInputFocus}
        small={small}
      >
        {this.maybeRenderDayPickerWithPortal()}
      </SingleDateRangeController>
    );

    return (
      <div
        ref={this.setContainerRef}
        {...css(
          styles.DateTimeRangePicker,
          block && styles.DateTimeRangePicker__block,
        )}
      >
        {enableOutsideClick && (
          <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
            {input}
          </OutsideClickHandler>
        )}
        {enableOutsideClick || input}
      </div>
    );
  }
}

DateTimeRangePicker.propTypes = propTypes;
DateTimeRangePicker.defaultProps = defaultProps;

export { DateTimeRangePicker as PureDateTimeRangePicker };
export default withStyles(({ reactDates: { color, zIndex,sizing } }) => ({
  DateTimeRangePicker: {
    position: 'relative',
    display: 'inline-block',
  },

  DateTimeRangePicker__block: {
    display: 'block',
  },
   DateTimeRangePicker_pickerWrapper:{
     //padding:'10px',
     boxShadow: '0 2px 19px 0 rgba(0,0,0,0.13)'
   },
   DateTimeRangePicker_pickerWrapperInner: {
     boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.11)'
   },
  DateTimeRangePicker_picker: {
    zIndex: zIndex + 1,
    backgroundColor: color.background,
    position: 'absolute',
  },

  DateTimeRangePicker_picker__rtl: {
    direction: noflip('rtl'),
  },

  DateTimeRangePicker_picker__directionLeft: {
    left: noflip(0),
  },

  DateTimeRangePicker_picker__directionRight: {
    right: noflip(0),
  },

  DateTimeRangePicker_picker__portal: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'fixed',
    top: 0,
    left: noflip(0),
    height: '100%',
    width: '100%',
  },

  DateTimeRangePicker_picker__fullScreenPortal: {
    backgroundColor: color.background,
  },

  DateTimeRangePicker_closeButton: {
    background: 'none',
    border: 0,
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    overflow: 'visible',
    cursor: 'pointer',

    position: 'absolute',
    top: 0,
    right: noflip(0),
    padding: 15,
    zIndex: zIndex + 2,

    ':hover': {
      color: `darken(${color.core.grayLighter}, 10%)`,
      textDecoration: 'none',
    },

    ':focus': {
      color: `darken(${color.core.grayLighter}, 10%)`,
      textDecoration: 'none',
    },
  },

  DateTimeRangePicker_closeButton_svg: {
    height: 15,
    width: 15,
    fill: color.core.grayLighter,
  },
  DateTimeRangePicker_ConfirmWrapper: {
     height: '50px',
     padding: '10px',
   },
   DateTimeRangePicker_ConfirmButton: {
     padding: `${sizing.confirmButtonPadding.vertical}px ${sizing.confirmButtonPadding.horizontal}px`,
     height: `${sizing.confirmButtonHeight}px`,
     minWidth: `${sizing.confirmButtonMinWidth}px`,
     border: 0,
     marginRight: '10px',
     fontWeight: 800,
     borderRadius: '5px',
     textTransform: 'uppercase',
     fontSize: 12,
   },
   DateTimeRangePicker_Apply: {
     backgroundColor: color.confirmButton.apply.background,
     color: color.confirmButton.apply.text,
     ':disabled': {
       backgroundColor: color.confirmButton.apply.disabled,
       cursor: 'not-allowed',
     },
   },
   DateTimeRangePicker_Cancel: {
     backgroundColor: color.confirmButton.cancel.background,
     color: color.confirmButton.cancel.text,
     ':disabled': {
       backgroundColor: color.confirmButton.cancel.disabled,
       cursor: 'not-allowed',
     },
   },
}), { pureComponent: typeof React.PureComponent !== 'undefined' })(DateTimeRangePicker);
