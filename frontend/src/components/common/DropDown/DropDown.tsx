import React from 'react';
import {
  View, Pressable, Button,
} from 'react-native';

import styles from './DropDown.styles';
import { Filter } from '../../screens/NewsScreen';
import colors from '../../../themes';

type DropDownProps = {
  setActiveDropDown: (a: boolean) => void,
  filters: Filter[],
  newsFilter: string,
  setNewsFilter: (a: string) => void,
};

const DropDown: React.FC<DropDownProps> = (props) => {
  const dropDownOut = () => {
    props.setActiveDropDown(false);
  };

  return (
    <Pressable onPress={dropDownOut} style={styles.component}>
      <View style={styles.dropDown}>
        {props.filters.map((filter: Filter) => (
          <View key={filter.id} style={styles.button}>
            <Button
              color={
                filter.name === props.newsFilter
                  ? `${colors.sixth}`
                  : `${colors.primary}`
              }
              onPress={() => {
                props.setNewsFilter(filter.name);
                dropDownOut();
              }}
              title={filter.title}
            />
          </View>
        ))}
      </View>
    </Pressable>
  );
};

export default DropDown;
