import React, { useState } from 'react';
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
          <VacationCalendar />
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
