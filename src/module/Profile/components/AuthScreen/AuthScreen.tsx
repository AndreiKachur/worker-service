import React from 'react';
import {
  View, Text, Button, TextInput,
} from 'react-native';

import styles from './AuthScreen.styles';

type AuthScreenProps = any;

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const clickHandler = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.component}>
      <TextInput style={styles.input} placeholder="Login" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Enter" onPress={clickHandler} />
    </View>
  );
};

export default AuthScreen;
