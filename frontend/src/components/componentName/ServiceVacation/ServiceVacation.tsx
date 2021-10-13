import React from 'react';
import { View, Text } from 'react-native';

import styles from './ServiceVacation.styles';

type ServiceScreenProps = {

};

const ServiceVacation: React.FC<ServiceScreenProps> = (props) => (
  <View style={styles.component}>
    <Text style={styles.text}>Мой отпуск будет здесь</Text>
  </View>
);

export default ServiceVacation;
