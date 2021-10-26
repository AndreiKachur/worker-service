import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import VacationInfoBlock from '../../componentName/VacationInfoBlock';
import Spinner from '../../common/Spinner';
import styles from './VacationInfoScreen.styles';

type VacactionInfoProps = {};

type Item = {
  start: string,
  end: string,
  duration: number,
  status: string,
}

type Data = {
  title: string,
  items: Item[]
}

const VacationInfoScreen: React.FC<VacactionInfoProps> = () => {

  const { dates } = vacationStore.data;
  const { cancelVacation } = vacationStore;
  const dateNow = + Date.now();

  const data: Data[] = [
    {
      title: 'Запросы на рассмотрении:',
      items: [],
    },
    {
      title: 'Оформленные отпуска:',
      items: [],
    },
    {
      title: 'Архив отпусков:',
      items: [],
    },
  ]

  dates.forEach((item: Item) => {

    if (+new Date(item.start) < dateNow) {
      data[2].items.push(item)
    } else {
      if (item.status === 'Оформлено') {
        data[1].items.push(item)
      } else {
        data[0].items.push(item)
      }
    }
  })

  data.forEach((d, i) => {
    data[i].items = d.items.sort((a, b) => {
      return +new Date(a.start) - (+new Date(b.start))
    })
  })

  const [spinner, setSpinner] = useState(false);

  const submitForm = (id: number) => {
    Alert.alert(
      'Внимание!',
      'Вы уверены, что хотите отменить?',
      [{
        text: 'Да',
        onPress: () => {
          setSpinner(true)
          cancelVacation(id)
          setTimeout(() => {
            Alert.alert('Ваша заявка принята к рассмотрению.');
            setSpinner(false);
          }, 500);
        },
      },
      { text: 'Нет', onPress: () => { } }],
    );
  };

  if (spinner) return <Spinner />;

  return (
    <ScrollView>
      <View style={styles.mainWrapper}>
        <View>
          {data.map((item: Data) => {
            return (
              <VacationInfoBlock
                key={item.title}
                data={item}
                submitForm={submitForm} />
            )
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(VacationInfoScreen);
