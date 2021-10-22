import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import buildPeriod, { period } from './buildPeriod';
import localeData from './localeData';
import Day from '../models/day';

type VacationCalendarProps = {
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
    setVacationDaysAmount,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  },
) => {
  const [isEndDay, setIsEndDay] = useState(false);
  const [daysInterval, setDaysInterval] = useState<any>({});
  // console.log(isEndDay);

  useEffect(() => {
    buildPeriod(startDate, endDate, isEndDay);
    setDaysInterval(period);
  }, [isEndDay]);// eslint-disable-this-line

  const setDate = (day: Day) => {
    setIsEndDay(!isEndDay);

    const makeSets = (startDay: Day) => {
      setStartDate(startDay);
      setEndDate(undefined);
      setDaysInterval({});
      setVacationDaysAmount(0);
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
      markedDates={daysInterval}
    // markedDates={
    //   Object.assign({
    //     '2021-11-04': {
    //       disabled: true, startingDay: true, endingDay: true,
    //       textColor: '#50cebb'
    //     },
    //     '2021-11-05': {
    //       disabled: true,
    // textColor: '#50cebb'
    //     },
    //   }, daysInterval)}
    />
  );
};

export default VacationCalendar;
