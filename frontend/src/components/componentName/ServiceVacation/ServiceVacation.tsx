import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
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

  return (
    <View style={styles.component}>
      <View style={styles.info}>

        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Отпуск - 2021</Text>
        </View>
        <Separator />
        <Text style={styles.text}>Всего: {daysAmount} дней отпуска</Text>
        <Text style={styles.text}>Осталось: {restDaysAmount} дней</Text>
        <Separator />

        <Text style={styles.header2}>Прошедшие отпуска: </Text>
        <Text style={styles.text}>
          С {planned[0].start} по {planned[0].end} ({planned[0].duration} дней)
        </Text>
        <Separator />

        <Text style={styles.header2}>Запланированные отпуска: </Text>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            С {planned[0].start} по {planned[0].end}
          </Text>
          <TouchableOpacity
            activeOpacity={0.70}
            onPress={() => { console.log('click') }}>
            <Text style={styles.btn}>ИЗМЕНИТЬ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            С {planned[0].start} по {planned[0].end}
          </Text>
          <TouchableOpacity
            activeOpacity={0.70}
            onPress={() => { console.log('click') }}>
            <Text style={styles.btn}>ИЗМЕНИТЬ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            С {planned[0].start} по {planned[0].end}
          </Text>
          <TouchableOpacity
            activeOpacity={0.70}
            onPress={() => { console.log('click') }}>
            <Text style={styles.btn}>ИЗМЕНИТЬ</Text>
          </TouchableOpacity>
        </View>
        <Separator />

        <Text style={styles.header2}>Запрашиваемые отпуска: </Text>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            С {planned[0].start} по {planned[0].end}
          </Text>
          <TouchableOpacity
            activeOpacity={0.70}
            onPress={() => { console.log('click') }}>
            <Text style={styles.btn}>УДАЛИТЬ</Text>
          </TouchableOpacity>
        </View>
        <Separator />
      </View>
    </View>
  )
});

export default ServiceVacation;
