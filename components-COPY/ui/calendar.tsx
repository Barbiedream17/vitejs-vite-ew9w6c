import React from 'react';
import { DatePicker as MantineDatePicker, DatePickerProps as MantineDatePickerProps } from '@mantine/dates';

type CalendarProps = MantineDatePickerProps

const Calendar: React.FC<CalendarProps> = (props) => {
  return (
    <MantineDatePicker
      {...props}
      onChange={(value) => {
        if (Array.isArray(value)) {
          // Handle array values
        } else {
          // Handle single value
        }
      }}
    />
  );
};

export default Calendar;
