import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import styles from './ServiceVacation.styles';

type ServiceScreenProps = {
};

const Separator = () => (
  <View style={styles.separator} />
);

const ServiceVacation: React.FC<ServiceScreenProps> = observer((props) => {
  const { daysAmount, restDaysAmount, planned, inquire } = vacationStore.data.thisYear

  const [showInfo, setShowInfo] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);

  return (
    <ScrollView>
      <View>
        <View style={styles.component}>
          <View style={styles.mainWrapper}>

            <View style={styles.headerWrapper}>
              <Text style={styles.header}>Оформить отпуск:</Text>
            </View>
            <Separator />

            <Text style={styles.text}>Количество дней к выбору: {restDaysAmount}</Text>


            <TouchableOpacity
              activeOpacity={0.70}
              onPress={() => setShowCalendar(!showCalendar)}>
              <Text style={styles.btnBig}>ВЫБРАТЬ ДАТЫ ОТПУСКА</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              activeOpacity={0.70}
              onPress={() => { console.log('click') }}>
              <Text style={styles.btnBig}>ОТПРАВИТЬ ЗАПРОС</Text>
            </TouchableOpacity>
            <Separator />

            <TouchableOpacity
              activeOpacity={0.70}
              onPress={() => setShowInfo(!showInfo)}>
              <Text style={styles.btnBig}>ПОКАЗАТЬ ИНФОРМАЦИЮ ПО ОТПУСКАМ</Text>
            </TouchableOpacity>

            {showInfo &&
              <View>
                <Text style={styles.header2}>Запросы на рассмотрении: </Text>
                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    с {planned[0].start} по {planned[0].end}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.70}
                    onPress={() => { console.log('click') }}>
                    <Text style={styles.btn}>ОТМЕНИТЬ</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Статус: передано </Text>
                <Separator />

                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    с {planned[0].start} по {planned[0].end}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.70}
                    onPress={() => { console.log('click') }}>
                    <Text style={styles.btn}>ОТМЕНИТЬ</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Статус: оформление </Text>
                <Separator />

                <Text style={styles.header2}>Оформленные отпуска: </Text>
                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    С {planned[0].start} по {planned[0].end}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.70}
                    onPress={() => { console.log('click') }}>
                    <Text style={styles.btn}>ОТМЕНИТЬ</Text>
                  </TouchableOpacity>
                </View>
                <Separator />

                <Text style={styles.header2}>Архив отпусков: </Text>
                <Text style={styles.text}>
                  С {planned[0].start} по {planned[0].end} ({planned[0].duration} дней)
        </Text>
                <Separator />
              </View>
            }


            <TouchableOpacity
              activeOpacity={0.70}
              onPress={() => setShowRules(!showRules)}>
              <Text style={styles.btnBig}>ПРАВИЛА ОФОРМЛЕНИЯ ОТПУСКОВ</Text>
            </TouchableOpacity>
            {
              showRules &&
              <View>
                <View style={styles.header} />
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam aliquid id provident, doloremque placeat veritatis,
                  alias natus adipisci at possimus repellat delectus quia eaque nam,
                  accusantium blanditiis esse officia beatae?
            </Text>
              </View>
            }

          </View>
        </View>
      </View>
    </ScrollView>
  )
});

export default ServiceVacation;
