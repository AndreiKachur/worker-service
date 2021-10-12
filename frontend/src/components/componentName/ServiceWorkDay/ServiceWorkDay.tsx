import React from 'react';
import { View, Text } from 'react-native';

import styles from './ServiceWorkDay.styles';

type ServiceScreenProps = {

};

const ServiceVacation: React.FC<ServiceScreenProps> = (props) => (
  <View style={styles.component}>
    <Text>Мой рабочий день закончился</Text>
  </View>
);

export default ServiceVacation;
