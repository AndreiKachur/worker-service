import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import color from '../../../themes';

type SeparatorProps = {
  width?: number
};

const Separator: React.FC<SeparatorProps> = ({ width = 90 }) => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: color.secondary,
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: Dimensions.get('window').width * (width / 100),
    }}
  />
);

export default Separator;
