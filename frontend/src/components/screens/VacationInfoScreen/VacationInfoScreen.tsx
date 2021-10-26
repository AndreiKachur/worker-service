import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import VacationInfoBlock from '../../componentName/VacationInfoBlock';
import getVacationInfoData from './getVacationInfoData';
import Spinner from '../../common/Spinner';
import styles from './VacationInfoScreen.styles';

type VacactionInfoProps = {};

type Item = {
  start: string,
  end: string,
  duration: number,
  status: string,
};

type Data = {
  title: string,
  items: Item[]
};

const VacationInfoScreen: React.FC<VacactionInfoProps> = () => {
  const { dates } = vacationStore.data;
  const { cancelVacation } = vacationStore;
  const [spinner, setSpinner] = useState(false);

  const data = getVacationInfoData(dates);

  const submitForm = (id: number) => {
    Alert.alert(
      'Внимание!',
      'Вы уверены, что хотите отменить?',
      [{
        text: 'Да',
        onPress: () => {
          setSpinner(true);
          cancelVacation(id);
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
          {data.map((item: Data) => (
            <VacationInfoBlock
              key={item.title}
              data={item}
              submitForm={submitForm}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(VacationInfoScreen);
