import React from 'react';
import { View, Text } from 'react-native';

import WorkDaysItemText from '../WorkDaysItemText';
import Item from '../models/workDaysItem';
import Separator from '../../common/Separator';
import styles from './WorkDaysItem.styles';
import Button from '../../common/Button';

type ItemActiveType = {
  date: string,
  name: string,
  hours: undefined | number
};

type WorkDaysItemProps = {
  item: Item,
  changeableDaysAmount: number,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setItemActive: React.Dispatch<React.SetStateAction<ItemActiveType>>
};

const WorkDaysItem: React.FC<WorkDaysItemProps> = ({
  item,
  changeableDaysAmount,
  setModalVisible,
  setItemActive,
}) => {
  function getDateFromNow(daysNumber: number) {
    const now = new Date()
    const today = [
      now.getFullYear(),
      ('0' + (now.getMonth() + 1)).slice(-2),
      ('0' + now.getDate()).slice(-2)
    ].join('-')

    return new Date(+new Date(today) + 1000 * 60 * 60 * 24 * daysNumber);
  }

  if (new Date(item.date) <= getDateFromNow(changeableDaysAmount)) {
    return (
      <WorkDaysItemText item={item} pastDate />
    );
  }

  return (
    <View style={styles.item}>
      <View style={styles.centeredTitle}>
        <View>

          <Text style={styles.text}>
            {item.name}
          </Text>
          <Separator width={70} />
          <WorkDaysItemText item={item} />

          <View style={styles.centeredView}>
            <Button
              width={27}
              paddingVertical={10}
              marginVertical={1}
              onClick={() => {
                setModalVisible(true);
                setItemActive({ ...item });
              }}
            >
              {item.hours !== undefined ? 'ИЗМЕНИТЬ' : 'УКАЗАТЬ'}
            </Button>
          </View>

        </View>
      </View>
    </View>
  );
};

export default WorkDaysItem;
