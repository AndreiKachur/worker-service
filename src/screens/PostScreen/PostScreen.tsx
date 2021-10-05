import React from 'react';
import { View, Text } from 'react-native';

import styles from './PostScreen.styles';

type PostScreenProps = {};

const PostScreen: React.FC< PostScreenProps> = (props) => (
  <View style={styles.component}>
    <Text>PostScreen</Text>
  </View>
);

export default PostScreen;
