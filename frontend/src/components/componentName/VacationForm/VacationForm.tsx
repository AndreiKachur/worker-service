import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import VacationCalendar from '../VacationCalendar';
import VacationFormText from '../VacationFormText';
import Day from '../models/day';
import styles from './VacationForm.styles';
import vacationStore from '../../../stores/vacationStore';

type VacationFormProps = {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
};

const VacationForm: React.FC<VacationFormProps> = ({ setSpinner }) => {
  const [vacationDaysAmount, setVacationDaysAmount] = useState(0);
  const [holidaysInPeriod, setHolidaysInPeriod] = useState(0);
  const [startDate, setStartDate] = useState<Day>();
  const [endDate, setEndDate] = useState<Day>();
  const [isEndDay, setIsEndDay] = useState(false);
  const [daysInterval, setDaysInterval] = useState<any>({});
  const { submitVacation } = vacationStore;

  const computeDaysAmount = () => {
    if (!startDate || !endDate) return;
    const timeDifference = endDate.timestamp - startDate.timestamp;
    const daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1;
    setVacationDaysAmount(daysDifference);
  };

  const setDate = (day: Day | undefined) => {
    setIsEndDay(!isEndDay);

    const makeSets = (startDay: Day | undefined) => {
      setStartDate(startDay);
      setEndDate(undefined);
      setDaysInterval({});
      setVacationDaysAmount(0);
      setHolidaysInPeriod(0);
    };

    return isEndDay ? setEndDate(day) : makeSets(day);
  };

  const submitForm = async () => {
    setSpinner(true);
    if (vacationDaysAmount <= 0) {
      Alert.alert(
        `Выбранное количество дней: ${vacationDaysAmount}`,
        'Пожалуйста выберите корректные даты отпуска.',
      );
      return;
    }

    if (startDate && endDate) {
      submitVacation(startDate.dateString, endDate.dateString, vacationDaysAmount);
      setDate(undefined);
      setTimeout(() => {
        Alert.alert('Ваша заявка принята к рассмотрению.');
        setSpinner(false);
      }, 500);
    }
  };

  useEffect(() => {
    computeDaysAmount();
  }, [endDate, computeDaysAmount]);

  return (
    <View>
      <View style={styles.calendar}>
        <VacationCalendar
          setHolidaysInPeriod={setHolidaysInPeriod}
          startDate={startDate}
          endDate={endDate}
          setDate={setDate}
          isEndDay={isEndDay}
          daysInterval={daysInterval}
          setDaysInterval={setDaysInterval}
        />
      </View>

      <VacationFormText
        startDate={startDate}
        endDate={endDate}
        vacationDaysAmount={vacationDaysAmount}
        holidaysInPeriod={holidaysInPeriod}
        submitForm={submitForm}
      />

    </View>
  );
};

export default observer(VacationForm);
