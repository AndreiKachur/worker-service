import { observer } from 'mobx-react-lite';
import React, {
  useLayoutEffect, useState, useCallback, useEffect,
} from 'react';
import {
  View, Text, Button, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import authStore from '../../../stores/authStore';
import styles from './ProfileScreen.styles';

type ProfileScreenProps = any;
type UserInfo = {
  id: string;
  name: string,
  avatar: string
};

const ProfileScreen: React.FC<ProfileScreenProps> = observer(({ navigation }) => {
  const [user, setUser] = useState<UserInfo>();

  const getUserInfo = useCallback(async () => {
    const name = 'Артем';
    const response = await fetch('http://192.168.0.4:5000/getInfo', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    setUser(json);
  }, [user, setUser]);

  useEffect(() => { getUserInfo(); }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Профиль',
      headerRight: () => (
        <View style={styles.editButton}>
          <Icon.Button
            onPress={() => navigation.navigate('Edit')}
            name="user-cog"
            backgroundColor="#fff"
            iconStyle={styles.iconStyle}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.component}>
      <Text>ProfileScreen</Text>
      {
        user
        && (
        <>
          <Image source={{ uri: user.avatar }} />
          <Text>{user.name}</Text>
        </>
        )
    }
      <Button title="Выйти" onPress={() => { authStore.setLogout(); }} />
    </View>
  );
});

export default ProfileScreen;
