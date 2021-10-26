import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import userStore from '../../../stores/userStore/userStore';
import VacationInfoBlock from '../../componentName/VacationInfoBlock';
import sendForm from '../../common/sendForm';
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

  const [spinner, setSpinner] = useState(false);

  const submitForm = () => {
    Alert.alert(
      'Внимание!',
      'Вы уверены, что хотите отменить?',
      [{
        text: 'Да',
        onPress: () => sendForm('vacation', setSpinner, { info: 'VacationInfo' }),
      },
      { text: 'Нет', onPress: () => { } }],
    );
  };

  if (spinner) return <Spinner />;

  return (
    <ScrollView>
      <View style={styles.mainWrapper}>
        <View>
          {data.map((item: Data) => <VacationInfoBlock key={item.title} data={item} submitForm={submitForm} />)}
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(VacationInfoScreen);
