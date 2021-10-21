import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import WorkDayModal from '../WorkDayModal'
import Separator from '../../common/Separator';
import colors from '../../../themes';
import styles from './WorkDays.styles';
import workDaysStore from '../../../stores/workDaysStore';
import Button from '../../common/Button';

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
  const [itemActive, setItemActive] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  console.log(itemActive);

  const changeableDaysAmount = -10
  const minDateFromNow = -20
  const maxDateFromNow = 5

  useEffect(() => {
    for (let i = minDateFromNow; i <= maxDateFromNow; i++) {
      const date = getDateFormat(getDateFromNow(i))

      if (!days[date]) {
        days[date] = []
      }
      if (!days[date].length && i <= 0 && i >= changeableDaysAmount) {
        days[date] = [{ name: 'ВАШ РАБОЧИЙ ДЕНЬ', date: date }]
      }
    }
    setItems(days)
  }, [days])

  function addHours(hours: string) {
    if (hours === '') { return }
    const newItem = Object.assign(itemActive, { hours: + hours })
    setItemActive(newItem)
  }

  function getDateFromNow(daysNumber: number) {
    return new Date(+ new Date() + 1000 * 60 * 60 * 24 * daysNumber)
  }
  function getDateFormat(d: Date) {
    const month = d.getMonth() + 1
    const day = d.getDate()

    const dayFormat = day > 9 ? day : ['0', day].join('')
    const monthFormat = month > 9 ? month : ['0', month].join('')

    return [d.getFullYear(), monthFormat, dayFormat].join('-')
  }

  const renderItem = (item: Item) => {

    return (
      <View style={styles.item}>
        {new Date(item.date) > getDateFromNow(changeableDaysAmount - 1) ?
          <View style={styles.centeredTitle}>
            <View>
              <Text style={[styles.text, { color: colors.seventh, fontWeight: 'bold' }]}>
                {item.name}
              </Text>
              <Separator width={70} />
              {item.hours !== undefined ?
                <View>
                  {item.hours === 0 ?
                    <Text style={[styles.text, { fontWeight: 'bold', color: colors.primary }]}>
                      Выходной день
                    </Text>
                    :
                    <Text style={[styles.text, { fontWeight: 'bold', color: colors.primary }]}>
                      Количество рабочих часов: {item.hours}
                    </Text>
                  }
                </View>
                :
                <Text style={[styles.text, { fontWeight: 'bold', color: colors.fourth }]}>
                  Количество рабочих часов: НЕ УКАЗАНО
                </Text>
              }
              <View style={styles.centeredView}>
                <Button
                  width={27}
                  paddingVertical={10}
                  marginVertical={1}
                  onClick={() => {
                    setModalVisible(true)
                    setItemActive({ ...item })
                  }}>
                  {item.hours !== undefined ? 'ИЗМЕНИТЬ' : 'УКАЗАТЬ'}
                </Button>
              </View>
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
    <View style={styles.wrapper}>
      <Agenda
        minDate={getDateFromNow(minDateFromNow)}
        maxDate={getDateFromNow(maxDateFromNow)}
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
      {modalVisible &&
        <View style={{ height: 0 }}>
          <WorkDayModal
            title={1 ? 'ИЗМЕНИТЬ' : 'УКАЗАТЬ'}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            addHours={addHours} />
        </View>
      }
    </View>
  )
};

export default observer(WorkDays);
