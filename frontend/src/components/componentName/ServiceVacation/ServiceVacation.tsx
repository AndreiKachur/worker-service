import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import styles from './ServiceVacation.styles';

type ServiceScreenProps = {

};

const ServiceVacation: React.FC<ServiceScreenProps> = observer((props) => {

  return (
    <View style={styles.component}>
      <Text style={styles.text}>Мой отпуск будет здесь</Text>
      <Text style={styles.text}>User id: {vacationStore.vacationData.id}</Text>
    </View>
  )
});

export default ServiceVacation;
