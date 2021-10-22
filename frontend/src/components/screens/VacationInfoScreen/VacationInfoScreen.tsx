import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import Button from '../../common/Button';
import Separator from '../../common/Separator';
import ButtonCancel from '../../componentName/ButtonCancel';
import styles from './VacationInfoScreen.styles';
import colors from '../../../themes';

type VacactionInfoProps = {
  // showInfo: boolean;
  // setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const VacationInfoScreen: React.FC<VacactionInfoProps> = () => {
  const { planned } = vacationStore.data.thisYear;

  return (
    <View style={styles.mainWrapper}>
      <View>
        <Text style={styles.header}>Запросы на рассмотрении: </Text>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            с {planned[0].start} по {planned[0].end}
          </Text>
          <ButtonCancel />
        </View>
        <Text style={styles.text}>Статус: передано </Text>
        <Separator />

        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            с {planned[0].start} по {planned[0].end}
          </Text>
          <ButtonCancel />
        </View>
        <Text style={styles.text}>Статус: оформление </Text>
        <Separator />

        <Text style={styles.header}>Оформленные отпуска: </Text>
        <View style={styles.vacationCard}>
          <Text style={styles.text}>
            С {planned[0].start} по {planned[0].end}
          </Text>
          <ButtonCancel />
        </View>
        <Separator />

        <Text style={styles.header}>Архив отпусков: </Text>
        <Text style={styles.text}>
          С {planned[0].start} по {planned[0].end} ({planned[0].duration} дней)
        </Text>
        <Separator />
      </View>
    </View>
  );
};

export default observer(VacationInfoScreen);
