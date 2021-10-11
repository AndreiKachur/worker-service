import React from 'react';
import { View, Text } from 'react-native';

import styles from './ProfileScreen.styles';

type ProfileScreenProps = {};

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => (
  <View style={styles.component}>
    <Text>ProfileScreen</Text>
  </View>
);

export default ProfileScreen;