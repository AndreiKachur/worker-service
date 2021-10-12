import React from 'react';
import { View, Text } from 'react-native';

import styles from './EditProfileScreen.styles';

type EditProfileScreenProps = {};

const EditProfileScreen: React.FC<EditProfileScreenProps> = (props) => (
  <View style={styles.component}>
    <Text>EditProfileScreen</Text>
  </View>
);

export default EditProfileScreen;
