import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import VacationInfoBlock from '../../componentName/VacationInfoBlock';
import sendForm from '../../common/sendForm';
import Spinner from '../../common/Spinner';
import styles from './VacationInfoScreen.styles';

type VacactionInfoProps = {};

const VacationInfoScreen: React.FC<VacactionInfoProps> = () => {
  const { planned } = vacationStore.data;
  const dates = vacationStore.data_.dates;
  console.log(dates);


  const data = [
    {
      title: 'Запросы на рассмотрении:',
      items: [
        {
          start: dates[0].start,
          end: dates[0].end,
          status: 'передано',
        },
        {
          start: dates[0].start,
          end: dates[0].end,
          status: 'оформление',
        },
      ],
    },
    {
      title: 'Оформленные отпуска:',
      items: [
        {
          start: dates[0].start,
          end: dates[0].end,
          status: 'оформлено',
        },
      ],
    },
    {
      title: 'Архив отпусков:',
      items: [
        {
          start: dates[0].start,
          end: dates[0].end,
          status: 'исполнено',
        },
      ],
    },
  ];

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
          {data.map((item) => <VacationInfoBlock key={item.title} data={item} submitForm={submitForm} />)}
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(VacationInfoScreen);
