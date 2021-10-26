import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import { getHolidays, holidaysList } from './getHolidays';
import localeData from './localeData';
import Day from '../models/day';
import vacationStore from '../../../stores/vacationStore';
import getPeriod from './buildPeriod';

type VacationCalendarProps = {
  setHolidaysInPeriod: React.Dispatch<React.SetStateAction<number>>,
  startDate?: Day;
  endDate?: Day;
  setDate: (day: Day) => void;
  isEndDay: boolean;
  daysInterval: any;
  setDaysInterval: React.Dispatch<any>
};

LocaleConfig.locales.ru = localeData;
LocaleConfig.defaultLocale = 'ru';

const VacationCalendar: React.FC<VacationCalendarProps> = (
  {
    setHolidaysInPeriod,
    startDate,
    endDate,
    setDate,
    isEndDay,
    daysInterval,
    setDaysInterval
  },
) => {
  const [holidays, setHolidays] = useState<any>(holidaysList);

  useEffect(() => {
    getHolidays(vacationStore.holidaysData);
    setHolidays(holidaysList);
  }, [vacationStore.holidaysData]);// eslint-disable-this-line

  useEffect(() => {
    const result = getPeriod(startDate, endDate, isEndDay, holidaysList);
    setDaysInterval(result.period);
    setHolidaysInPeriod(result.holidaysInPeriod);
  }, [isEndDay]);// eslint-disable-this-line

  return (
    <Calendar
      markingType="period"
      minDate={new Date()}
      maxDate={new Date('2022-12-31')}
      firstDay={1}
      enableSwipeMonths
      onDayPress={(day) => setDate(day)}
      markedDates={({ ...holidays, ...daysInterval })}
    />
  );
};

export default observer(VacationCalendar);
