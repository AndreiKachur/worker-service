import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';

import sendForm from '../../common/sendForm';
import VacationCalendar from '../VacationCalendar';
import VacationFormText from '../VacationFormText';
import Day from '../models/day';
import styles from './VacationForm.styles';

type VacationFormProps = {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
};

const VacationForm: React.FC<VacationFormProps> = ({ setSpinner }) => {
  const [vacationDaysAmount, setVacationDaysAmount] = useState(0);
  const [holidaysInPeriod, setHolidaysInPeriod] = useState(0);
  const [startDate, setStartDate] = useState<Day>();
  const [endDate, setEndDate] = useState<Day>();

  const computeDaysAmount = () => {
    if (!startDate || !endDate) return;
    const timeDifference = endDate.timestamp - startDate.timestamp;
    const daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1;
    setVacationDaysAmount(daysDifference);
  };

  const submitForm = async () => {
    if (vacationDaysAmount <= 0) {
      Alert.alert(
        `Выбранное количество дней: ${vacationDaysAmount}`,
        'Пожалуйста выберите корректные даты отпуска.',
      );
    }

    const data = {
      startDate,
      endDate,
      duration: vacationDaysAmount,
    };

    sendForm('vacation', setSpinner, data);
  };

  useEffect(() => {
    computeDaysAmount();
  }, [endDate, computeDaysAmount]);

  return (
    <View>
      <View style={styles.calendar}>
        <VacationCalendar
          setHolidaysInPeriod={setHolidaysInPeriod}
          setVacationDaysAmount={setVacationDaysAmount}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
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

export default VacationForm;
