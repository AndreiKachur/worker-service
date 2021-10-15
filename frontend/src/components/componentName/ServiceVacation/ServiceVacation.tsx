import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import styles from './ServiceVacation.styles';
import color from '../../../themes'

type ServiceScreenProps = {

};

const Separator = () => (
  <View style={styles.separator} />
);

const ServiceVacation: React.FC<ServiceScreenProps> = observer((props) => {
  const { daysAmount, restDaysAmount, planned, inquire } = vacationStore.data.thisYear

  const [showInfo, setShowInfo] = useState(false);
  const [showRules, setShowRules] = useState(false);

  return (
    <View style={styles.component}>
      <View style={styles.info}>

        {/* <View style={styles.headerWrapper}>
          <Text style={styles.header}>Отпуск - 2021</Text>
        </View> */}
        <Separator />

        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Оформить отпуск:</Text>
        </View>
        {/* <Text style={styles.text}>Всего: {daysAmount} дней отпуска</Text> */}
        <Text style={styles.text}>Количество дней к выбору: {restDaysAmount}</Text>
        <View style={styles.vacationCard}>
          <View>
            <Text style={styles.text}>Дата начала :</Text>
            <TextInput
              style={styles.input}
              placeholder="введите дату"
              placeholderTextColor={color.primary}
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text style={styles.text}>Дата окончания:</Text>
            <TextInput
              style={styles.input}
              placeholder="введите дату"
              placeholderTextColor={color.primary}
              keyboardType="numeric"
            />
          </View>
        </View>

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

            <Text style={styles.header2}>Прошедшие отпуска: </Text>
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
  )
});

export default ServiceVacation;
