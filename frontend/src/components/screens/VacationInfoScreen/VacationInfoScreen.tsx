import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import VacationInfoBlock from '../../componentName/VacationInfoBlock';
import sendForm from '../../common/sendForm';
import Spinner from '../../common/Spinner';
import styles from './VacationInfoScreen.styles';

type VacactionInfoProps = {};

const VacationInfoScreen: React.FC<VacactionInfoProps> = () => {
  const { planned } = vacationStore.data;

  const data = [
    {
      title: 'Запросы на рассмотрении:',
      items: [
        {
          start: planned[0].start,
          end: planned[0].end,
          status: 'передано',
        },
        {
          start: planned[0].start,
          end: planned[0].end,
          status: 'оформление',
        },
      ],
    },
    {
      title: 'Оформленные отпуска:',
      items: [
        {
          start: planned[0].start,
          end: planned[0].end,
          status: 'оформлено',
        },
      ],
    },
    {
      title: 'Архив отпусков:',
      items: [
        {
          start: planned[0].start,
          end: planned[0].end,
          status: 'исполнено',
        },
      ],
    },
  ];

  const [spinner, setSpinner] = useState(false);

  const submitForm = () => sendForm('vacation', setSpinner, { info: 'VacationInfo' });

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
