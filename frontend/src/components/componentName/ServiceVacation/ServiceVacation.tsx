import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import Button from '../../common/Button'
import styles from './ServiceVacation.styles';
import colors from '../../../themes'

type ServiceScreenProps = {
};

const Separator = () => <View style={styles.separator} />

const CancelButton = () => (
  <Button
    title={'ОТМЕНИТЬ'}
    width={22}
    fontSize={12}
    paddingVertical={8}
    borderRadius={5}
    onClick={() => console.log('click')} />
)

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
              ВЫБРАТЬ ДАТЫ ОТПУСКА
            </Button>

            <Separator />

            <Button backgroundColor={colors.seventh}
              onClick={() => setShowInfo(!showInfo)}>
              ПОКАЗАТЬ ИНФОРМАЦИЮ ПО ОТПУСКАМ
            </Button>

            {showInfo &&
              <View>
                <Text style={styles.header2}>Запросы на рассмотрении: </Text>
                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    с {planned[0].start} по {planned[0].end}
                  </Text>
                  <CancelButton />
                </View>
                <Text style={styles.text}>Статус: передано </Text>
                <Separator />

                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    с {planned[0].start} по {planned[0].end}
                  </Text>
                  <CancelButton />
                </View>
                <Text style={styles.text}>Статус: оформление </Text>
                <Separator />

                <Text style={styles.header2}>Оформленные отпуска: </Text>
                <View style={styles.vacationCard}>
                  <Text style={styles.text}>
                    С {planned[0].start} по {planned[0].end}
                  </Text>
                  <CancelButton />
                </View>
                <Separator />

                <Text style={styles.header2}>Архив отпусков: </Text>
                <Text style={styles.text}>
                  С {planned[0].start} по {planned[0].end} ({planned[0].duration} дней)
                </Text>
                <Separator />
              </View>
            }

            <Button onClick={() => setShowRules(!showRules)} >
              ПРАВИЛА ОФОРМЛЕНИЯ ОТПУСКОВ
            </Button>
            {
              showRules &&
              <View>
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
