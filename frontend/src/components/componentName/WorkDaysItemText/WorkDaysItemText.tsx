import React from 'react';
import { Text, View } from 'react-native';

import Item from '../models/workDaysItem';
import colors from '../../../themes';
import styles from './WorkDaysItemText.styles';

type WorkDaysItemTextProps = {
  item: Item,
  pastDate?: boolean
};

const WorkDaysItemText: React.FC<WorkDaysItemTextProps> = ({
  item,
  pastDate = false,
}) => {
  if (pastDate) {
    return (
      <View style={styles.item}>
        <View style={styles.inActiveDate}>
          <Text style={styles.text}>
            Количество учтенных часов: {item.hours}
          </Text>
        </View>
      </View>
    );
  }

  if (!item.hours) {
    return (
      <Text style={[styles.text, { color: colors.fourth }]}>
        Количество рабочих часов: НЕ УКАЗАНО
      </Text>
    );
  }

  if (item.hours === 0) {
    return (
      <Text style={styles.text}>
        Выходной день
      </Text>
    );
  }

  return (
    <Text style={styles.text}>
      Количество рабочих часов: {item.hours}
    </Text>
  );
};

export default WorkDaysItemText;
