import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Button, TextInput, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './AuthScreen.styles';
import authStore from '../../../stores/authStore';

type AuthScreenProps = {
  navigation: any
};

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [emailValue, setEmailValue] = useState(''); //test@mail.ru
  const [passwordValue, setPasswordValue] = useState(''); //123456
  const [privatePassword, setPrivatePassword] = useState(true)

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

  return (
    <View style={styles.component}>
      <View style={styles.logoBox}>
        <Image style={styles.img} source={{ uri: 'https://www.gnivc.ru/design/www/images/ico/logo.png' }} />
      </View>
      <View style={styles.inputsBox}>
        <View style={styles.emailInputBox}>
          <View style={styles.iconBox}>
            <Icon
              name="envelope"
              style={styles.iconStyle}
            />
          </View>
          <TextInput onChangeText={changeEmailValue}
            style={styles.emailInput}
            value={emailValue}
          />
        </View>
        <View style={styles.passwordInputBox}>
          <View style={styles.iconBox}>
            <Icon
              name="key"
              style={styles.iconStyle}
            />
          </View>
          <TextInput onChangeText={changePasswordValue}
            secureTextEntry={privatePassword ? true : false}
            style={styles.passwordInput}
            value={passwordValue}
          />
          <Pressable style={styles.iconButtonStyle} onPress={() => { setPrivatePassword(!privatePassword) }}>
            <Icon
              name={!privatePassword ? 'eye' : 'eye-slash'}
              style={styles.iconStyle}
            />
          </Pressable>

        </View>


      </View>
      <View style={styles.buttonBox}>
        <Button title="Войти" onPress={pushAuthButtonHander} />
      </View>
    </View>
  );
};

export default observer(AuthScreen);
