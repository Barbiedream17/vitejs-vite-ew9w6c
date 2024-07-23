import React from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

export type CalendarProps = DatePickerProps;

export function Calendar({ className, ...props }: CalendarProps) {
  return <DatePicker {...props} className={className} />;
}

Calendar.displayName = 'Calendar';