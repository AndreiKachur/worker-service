import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import sendForm from '../../common/sendForm';
import WorkDaysEmptyDate from '../WorkDaysEmptyDate';
import WorkDaysItem from '../WorkDaysItem';
import WorkDayModal from '../WorkDaysModal';
import Item from '../models/workDaysItem';
import colors from '../../../themes';
import styles from './WorkDays.styles';
import workDaysStore from '../../../stores/workDaysStore';

type WorkDayProps = {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>
};

const WorkDays: React.FC<WorkDayProps> = ({ setSpinner }) => {
  const { days } = workDaysStore.data;

  const [items, setItems] = useState({});
  const [itemActive, setItemActive] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const changeableDaysAmount = -7;
  const minDateFromNow = -14;
  const maxDateFromNow = 4;

  function getDateFromNow(daysNumber: number) {
    return new Date(+new Date() + 1000 * 60 * 60 * 24 * daysNumber);
  }

  function getDateFormat(d: Date) {
    const month = d.getMonth() + 1;
    const day = d.getDate();

    const dayFormat = day > 9 ? day : ['0', day].join('');
    const monthFormat = month > 9 ? month : ['0', month].join('');

    return [d.getFullYear(), monthFormat, dayFormat].join('-');
  }

  const submitForm = () => sendForm('workdays', setSpinner, itemActive);

  useEffect(() => {
    for (let i = minDateFromNow; i <= maxDateFromNow; i += 1) {
      const date = getDateFormat(getDateFromNow(i));

      if (!days[date]) {
        days[date] = [];
      }
      if (!days[date].length && i <= 0 && i >= changeableDaysAmount) {
        days[date] = [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ', date }];
      }
    }
    setItems(days);
  }, [days]);

  function addHours(hours: string) {
    if (hours === '') { return; }
    const newItem = Object.assign(itemActive, { hours: +hours });
    setItemActive(newItem);
  }

  const renderItem = (item: Item) => (
    <WorkDaysItem
      item={item}
      changeableDaysAmount={changeableDaysAmount}
      setModalVisible={setModalVisible}
      setItemActive={setItemActive}
    />
  );

  return (
    <View style={styles.wrapper}>
      <Agenda
        minDate={getDateFromNow(minDateFromNow)}
        maxDate={getDateFromNow(maxDateFromNow)}
        selected={getDateFromNow(-1)}
        pastScrollRange={1}
        futureScrollRange={1}
        firstDay={1}
        items={items}
        renderItem={renderItem}
        renderEmptyDate={WorkDaysEmptyDate}
        theme={{
          selectedDayBackgroundColor: colors.primary,
          todayTextColor: colors.primary,
          dotColor: colors.primary,
          monthTextColor: colors.primary,
          indicatorColor: colors.primary,
          agendaDayNumColor: colors.primary,
          agendaTodayColor: colors.primary,
        }}
      />
      {modalVisible
        && (
          <View style={{ height: 0 }}>
            <WorkDayModal
              submitForm={submitForm}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              addHours={(hours) => addHours(hours)}
            />
          </View>
        )}
    </View>
  );
};

export default observer(WorkDays);
