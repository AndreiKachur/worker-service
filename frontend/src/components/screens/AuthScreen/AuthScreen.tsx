import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import {
  View, Text, Button, TextInput, Alert, Image,
} from 'react-native';

import styles from './AuthScreen.styles';
import authStore from '../../../stores/authStore'

type AuthScreenProps = any;

const AuthScreen: React.FC<AuthScreenProps> = observer(({ navigation }) => {
  const { setPushAuthButton, setEmailValue, setPasswordValue, emailValue, passwordValue, auth } = authStore
  

  if(auth) { navigation.navigate('Main') }

  return (
    <View style={styles.component}>
      {/* <Image style={styles.img} source={imageUri} /> */}
      <TextInput onChange={setEmailValue} style={styles.input} placeholder="Login" value={emailValue} />
      <TextInput onChange={setPasswordValue} style={styles.input} placeholder="Password" value={passwordValue} />
      <Button title="Войти" onPress={setPushAuthButton} />
    </View>
  );
});

export default AuthScreen;
