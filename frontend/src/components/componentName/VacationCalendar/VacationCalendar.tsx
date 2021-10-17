import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import buildPeriod from './buildPeriod'
import localeData from './localeData'
import Day from '../models/day'

type VacationCalendarProps = {
  setVacationDaysAmount: (days: number) => void;
  startDate?: Day;
  setStartDate: React.Dispatch<React.SetStateAction<Day | undefined>>;
  endDate?: Day;
  setEndDate: React.Dispatch<React.SetStateAction<Day | undefined>>;
};

LocaleConfig.locales['ru'] = localeData;
LocaleConfig.defaultLocale = 'ru';

const VacationCalendar: React.FC<VacationCalendarProps> = (
  {
    setVacationDaysAmount,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  }
) => {

  let [clickCounter, setClickCounter] = useState(0)
  const [daysInterval, setDaysInterval] = useState<any>({})

  useEffect(() => {
    const period = buildPeriod(startDate, endDate, clickCounter)
    setDaysInterval(period)
  }, [clickCounter])

  const setDate = (day: Day) => {

    setClickCounter(clickCounter = clickCounter + 1)
    if (clickCounter >= 2) setClickCounter(0)

    const makeSets = (startDate: Day | undefined = undefined) => {
      setStartDate(startDate)
      setEndDate(undefined)
      setDaysInterval({})
      setVacationDaysAmount(0)
    }

    switch (clickCounter) {
      case 0: return makeSets()
      case 1: return makeSets(day)
      case 2: return setEndDate(day)
      default: return
    }
  }

  return (
    <Calendar
      markingType={'period'}
      minDate={new Date()}
      maxDate={new Date('2022-12-31')}
      firstDay={1}
      enableSwipeMonths={true}
      onDayPress={(day) => setDate(day)}
      markedDates={daysInterval}
    />
  )
};

export default VacationCalendar;
