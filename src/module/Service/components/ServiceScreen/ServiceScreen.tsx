import React from 'react';
import { View, Text } from 'react-native';

import styles from './ServiceScreen.styles';

type ServiceScreenProps = {};

const ServiceScreen: React.FC<ServiceScreenProps> = (props) => (
  <View style={styles.component}>
    <Text>ServiceScreen</Text>
  </View>
);

export default ServiceScreen;
