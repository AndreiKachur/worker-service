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
  setVacationDaysAmount: (days: number) => void;
  startDate?: Day;
  setStartDate: React.Dispatch<React.SetStateAction<Day | undefined>>;
  endDate?: Day;
  setEndDate: React.Dispatch<React.SetStateAction<Day | undefined>>;
};

LocaleConfig.locales.ru = localeData;
LocaleConfig.defaultLocale = 'ru';

const VacationCalendar: React.FC<VacationCalendarProps> = (
  {
    setHolidaysInPeriod,
    setVacationDaysAmount,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  },
) => {
  const [isEndDay, setIsEndDay] = useState(false);
  const [daysInterval, setDaysInterval] = useState<any>({});
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

  const setDate = (day: Day) => {
    setIsEndDay(!isEndDay);

    const makeSets = (startDay: Day) => {
      setStartDate(startDay);
      setEndDate(undefined);
      setDaysInterval({});
      setVacationDaysAmount(0);
      setHolidaysInPeriod(0);
    };

    return isEndDay ? setEndDate(day) : makeSets(day);
  };

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
