import React from 'react';
import { View, Text } from 'react-native';

import styles from './NewsScreen.styles';

type  NewsScreenProps = {};

const NewsScreen: React.FC< NewsScreenProps> = (props) => (
  <View style={styles.component}>
    <Text> NewsScreen</Text>
  </View>
);

export default NewsScreen;