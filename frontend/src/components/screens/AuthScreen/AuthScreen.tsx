import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Button, TextInput } from 'react-native';

import styles from './AuthScreen.styles';
import authStore from '../../../stores/authStore';

type AuthScreenProps = {
  navigation: any
};

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [emailValue, setEmailValue] = useState('test@mail.ru');
  const [passwordValue, setPasswordValue] = useState('123456');

  const changeEmailValue = (text: string) => {
    setEmailValue(text)
  };
  const changePasswordValue = (text: string) => {
    setPasswordValue(text)
  };
  const pushAuthButtonHander = () => {
    const body = {
      email: emailValue,
      password: passwordValue,
      returnSecureToken: true,
    };

    authStore.setPushAuthButton(body)
  }

  if (authStore.auth) { navigation.navigate('Main') }

  return (
    <View style={styles.component}>
      {/* <Image style={styles.img} source={imageUri} /> */}
      <TextInput onChangeText={changeEmailValue}
        style={styles.input}
        placeholder="Login"
        value={emailValue} />
      <TextInput onChangeText={changePasswordValue}
        style={styles.input}
        placeholder="Password"
        value={passwordValue} />
      <Button title="Войти" onPress={pushAuthButtonHander} />
    </View>
  );
};

export default observer(AuthScreen);
