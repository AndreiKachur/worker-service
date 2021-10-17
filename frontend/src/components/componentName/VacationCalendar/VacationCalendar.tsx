import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import colors from '../../../themes'

LocaleConfig.locales['ru'] = {
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв.', 'Фев.', 'Мрт.', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'],
  dayNames: ['Воскресень', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
};
LocaleConfig.defaultLocale = 'ru';

type VacationCalendarProps = {
};

type Day = {
  dateString: string,
  day: number,
  month: number,
  timestamp: number,
  year: number
}

const VacationCalendar: React.FC<VacationCalendarProps> = observer(() => {

  const [startDate, setStartDate] = useState<Day>()
  const [endDate, setEndDate] = useState<Day>()
  let [clickCounter, setClickCounter] = useState(0)
  const [daysInterval, setDaysInterval] = useState<any>({})

  useEffect(() => {
    buildPeriod()
  }, [clickCounter])

  const buildPeriod = () => {
    if (!startDate || !endDate) return
    const period: any = {}

    period[startDate.dateString] = { startingDay: true, color: '#50cebb', textColor: 'white' }
    period[endDate.dateString] = { endingDay: true, color: '#50cebb', textColor: 'white' }

    for (let index = startDate.day + 1; index < endDate.day; index++) {

      const dateParts = startDate.dateString.split('-')
      const day = +dateParts[2] + (index - startDate.day)
      dateParts[2] = day > 9 ? day.toString() : ['0', day].join('')
      const dateString = dateParts.join('-')

      period[dateString] = { color: '#70d7c7', textColor: 'white' }
    }
    setDaysInterval(period)
  }

  const setDate = (day: Day) => {

    setClickCounter(clickCounter = clickCounter + 1)
    if (clickCounter >= 2) setClickCounter(-1)
    console.log(clickCounter);

    switch (clickCounter) {
      case 0:
        setStartDate(undefined)
        setEndDate(undefined)
        setDaysInterval({})
        return
      case 1:
        setStartDate(day)
        setDaysInterval({})
        return
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
});

export default VacationCalendar;
