import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import WorkDayModal from '../WorkDayModal'
import Separator from '../../common/Separator';
import colors from '../../../themes';
import styles from './WorkDays.styles';
import workDaysStore from '../../../stores/workDaysStore';

type WorkDayProps = {

};

type Item = {
  name: string,
  hours: number,
  date: string
}

const WorkDays: React.FC<WorkDayProps> = () => {

  const { days } = workDaysStore.data

  const [items, setItems] = useState({})

  const changeableDaysAmount = -10
  const maxDatefromNow = 4

  useEffect(() => {
    for (let i = changeableDaysAmount; i <= maxDatefromNow; i++) {
      const date = getDateFormat(getDateFromNow(i))
      if (!days[date]) {
        days[date] = []
      }
      if (!days[date].length && i <= 0) {
        days[date] = [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ', date: date }]
      }
    }
    setItems(days)
  }, [days])

  function getDateFromNow(daysNumber: number) {
    return new Date(+ new Date() + 1000 * 60 * 60 * 24 * daysNumber)
  }
  function getDateFormat(d: Date) {
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-')
  }

  const renderItem = (item: Item) => {

    return (
      <View style={styles.item}>
        {new Date(item.date) > getDateFromNow(changeableDaysAmount - 1) ?
          <View style={styles.centeredTitle}>
            <View>
              <Text style={[styles.text, { color: colors.seventh, fontWeight: 'bold' }]}>{item.name}</Text>
              <Separator width={70} />
              {item.hours ?
                <Text style={[styles.text, { fontWeight: 'bold', color: colors.primary }]}>
                  Количество рабочих часов: {item.hours}
                </Text>
                :
                <View>
                  <Text style={[styles.text, { fontWeight: 'bold', color: colors.fourth }]}>
                    Количество рабочих часов: НЕ УКАЗАНО
              </Text>
                </View>
              }
              <WorkDayModal title={item.hours ? 'ИЗМЕНИТЬ' : 'УКАЗАТЬ'} />
            </View>
          </View>
          :
          <View style={styles.inActiveDate}>
            <Text style={{ fontWeight: 'bold', color: colors.primary }}>
              Количество учтенных часов: {item.hours}
            </Text>
          </View>
        }
      </View>
    )
  }

  const renderEmptyDate = () => {

    return (
      <View style={styles.item}>
        <View style={styles.inActiveDate}>
          <Text>Рабочее время не заполнялось</Text>
        </View>
      </View>
    );
  }

  return (
    <Agenda
      minDate={getDateFromNow(-30)}
      maxDate={getDateFromNow(maxDatefromNow)}
      selected={getDateFromNow(-1)}
      pastScrollRange={1}
      futureScrollRange={1}
      firstDay={1}
      items={items}
      // loadItemsForMonth={loadItems}
      renderItem={renderItem}
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

export default observer(WorkDays);


 // const timeToString = (time) => {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // }

  // const loadItems = (day) => {
  //   setTimeout(() => {
  //     for (let i = -1; i < 3; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         // const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < 1; j++) {
  //           items[strTime].push({
  //             name: 'ВАШ РАБОЧИЙ ДЕНЬ',
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach(key => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // }
