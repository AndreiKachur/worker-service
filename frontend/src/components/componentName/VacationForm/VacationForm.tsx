import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import Button from '../../common/Button'
import Separator from '../../common/Separator'
import styles from './VacationForm.styles';
import colors from '../../../themes'

type VacationFormProps = {
};

const VacationForm: React.FC<VacationFormProps> = observer(() => {
  const { restDaysAmount } = vacationStore.data.thisYear

  const [showCalendar, setShowCalendar] = useState(true);

  return (
    <View>

      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Оформить отпуск:</Text>
      </View>
      <Separator />

      <Text style={styles.text}>Количество дней к выбору: {restDaysAmount}</Text>

      <Button onClick={() => setShowCalendar(!showCalendar)} >
        ВЫБРАТЬ ДАТЫ ОТПУСКА
            </Button>

      {showCalendar &&
        <View style={styles.calendar}>
          <Calendar
            markingType={'period'}
            markedDates={{
              '2021-10-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
              '2021-10-22': { color: '#70d7c7', textColor: 'white' },
              '2021-10-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
              '2021-10-24': { color: '#70d7c7', textColor: 'white' },
              '2021-10-25': { color: '#70d7c7', textColor: 'white' },
              '2021-10-26': { color: '#70d7c7', textColor: 'white' },
              '2021-10-27': { color: '#70d7c7', textColor: 'white' },
              '2021-10-28': { color: '#70d7c7', textColor: 'white' },
              '2021-10-29': { color: '#70d7c7', textColor: 'white' },
              '2021-10-30': { color: '#70d7c7', textColor: 'white' },
              '2021-10-31': { color: '#70d7c7', textColor: 'white' },
              '2021-11-01': { color: '#70d7c7', textColor: 'white' },
              '2021-11-02': { endingDay: true, color: '#50cebb', textColor: 'white' }
            }}
          />
        </View>}

      <Text style={styles.text}>Итого выбрано дней: 0</Text>

      <Button backgroundColor={colors.fourth}
        onClick={() => console.log('click')} >
        ОТПРАВИТЬ
      </Button>
      <Separator />

    </View>
  )
});

export default VacationForm;
