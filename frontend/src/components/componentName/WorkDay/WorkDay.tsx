import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

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
      <TouchableOpacity style={styles.item}>
        <View >
          <Text style={styles.text}>{item.name}</Text>
          <Separator width={50} />
          <Text style={styles.text}>Количество рабочих часов: не указано</Text>

        </View>
      </TouchableOpacity>
    )
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
      items={items}
      loadItemsForMonth={loadItems}
      renderItem={renderItem}
      onDayPress={() => console.log('click')}
    />
  )
};


export default WorkDay;
