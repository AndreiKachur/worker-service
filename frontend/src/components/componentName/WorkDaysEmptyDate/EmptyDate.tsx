import React from 'react';
import { View, Text } from 'react-native';

import styles from './EmptyDate.styles';

function EmptyDate() {
  return (
    <View style={styles.item}>
      <View style={styles.inActiveDate}>
        <Text>Рабочее время не заполнялось</Text>
      </View>
    </View>
  );
}

export default EmptyDate;
