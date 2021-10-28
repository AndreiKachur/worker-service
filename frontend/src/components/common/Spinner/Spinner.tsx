import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './Spinner.styles';
import colors from '../../../themes';

function Spinner(): JSX.Element {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

export default Spinner;
