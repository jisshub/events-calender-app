import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import styles from '../styles/Calendar.module.scss';

interface CalendarProps {
  selectedDate: Dayjs;
  onDateChange: (date: Dayjs) => void;
  onMonthChange: (date: Dayjs) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange, onMonthChange }) => {
  return (
    <div className={styles.calendarContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => {
            if (newDate) onDateChange(newDate);
          }}
          onMonthChange={(newMonth) => {
            if (newMonth) onMonthChange(newMonth);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
