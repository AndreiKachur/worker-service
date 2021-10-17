import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import VacationCalendar from '../VacationCalendar'
import Button from '../../common/Button'
import Separator from '../../common/Separator'
import styles from './VacationForm.styles';
import colors from '../../../themes'

type VacationFormProps = {
};
export type Day = {
  dateString: string;
  day: number;
  month: number;
  year: number
  timestamp: number;
}

const monthNames = ['янв.', 'фев.', 'мрт.', 'апр.', 'мая', 'июня',
  'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.']

const VacationForm: React.FC<VacationFormProps> = observer(() => {
  const { restDaysAmount } = vacationStore.data.thisYear

  const [calendarView, setCalendarView] = useState(true);
  const [vacationDaysAmount, setVacationDaysAmount] = useState(0);
  const [startDate, setStartDate] = useState<Day>()
  const [endDate, setEndDate] = useState<Day>()

  const computeDaysAmount = () => {
    if (!startDate || !endDate) return
    const timeDifference = endDate.timestamp - startDate.timestamp
    const daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1
    setVacationDaysAmount(daysDifference);
  }

  const getDayFormat = (d: Day) => [d.day, monthNames[d.month - 1], d.year].join(' ')

  useEffect(() => {
    computeDaysAmount()
  }, [endDate])

  return (
    <View>

      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Оформить отпуск:</Text>
      </View>
      <Separator />

      {calendarView &&
        <Text style={styles.text}>
          Количество дней к выбору: {restDaysAmount - vacationDaysAmount}
        </Text>}

      <Button onClick={() => setCalendarView(!calendarView)} >
        ВЫБРАТЬ ДАТЫ ОТПУСКА
      </Button>

      {calendarView &&
        <View style={styles.calendar}>
          <VacationCalendar
            setVacationDaysAmount={setVacationDaysAmount}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </View>}
      {startDate &&
        <View>
          <Text style={styles.text}>
            Дата начала отпуска: {startDate ? getDayFormat(startDate) : 'Не выбрана'}
          </Text>
          <Text style={styles.text}>
            Дата окончания отпуска: {endDate ? getDayFormat(endDate) : 'Не выбрана'}
          </Text>
          <Text style={styles.text}>
            Итого выбрано дней: {vacationDaysAmount}
          </Text>
        </View>
      }

      <Button backgroundColor={colors.fourth}
        onClick={() => console.log('click')} >
        ОТПРАВИТЬ
      </Button>
      <Separator />

    </View>
  )
});

export default VacationForm;
