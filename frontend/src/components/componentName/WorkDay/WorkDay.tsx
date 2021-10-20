import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

import WorkDayModal from '../WorkDayModal'
import Separator from '../../common/Separator';
import colors from '../../../themes';
import styles from './WorkDay.styles';

type WorkDayProps = {

};

const WorkDay: React.FC<WorkDayProps> = (props) => {

  const [items, setItems] = useState({})

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -1; i < 3; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < 1; j++) {
            items[strTime].push({
              name: 'ВАШ РАБОЧИЙ ДЕНЬ',
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <View >
          <View style={styles.centeredTitle}>
            <Text style={styles.text}>{item.name}</Text>
            <Separator width={70} />
          </View>
          <Text style={styles.text}>Количество рабочих часов: не указано</Text>
          <WorkDayModal />
        </View>
      </View>
    )
  }

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Дата не актуальна</Text>
      </View>
    );
  }

  return (
    <Agenda
      // markingType={'period'}
      minDate={new Date(new Date() - 1000 * 60 * 60 * 24 * 7)}
      selected={new Date()}
      pastScrollRange={1}
      futureScrollRange={1}
      firstDay={1}
      enableSwipeMonths={true}
      items={{
        '2021-10-17': [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ' }],
        '2021-10-18': [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ' }],
        '2021-10-19': [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ' }],
        '2021-10-20': [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ' }],
        '2021-10-21': [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ' }],
        '2021-10-22': [],
        '2021-10-23': [],
        '2021-10-24': [],
        '2021-10-25': [],
        '2021-10-26': [],
        '2021-10-27': [],
        '2021-10-28': [],
      }}
      loadItemsForMonth={loadItems}
      renderItem={renderItem}
      onDayPress={() => console.log('click')}
      renderEmptyDate={renderEmptyDate}
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
  )
};


export default WorkDay;
