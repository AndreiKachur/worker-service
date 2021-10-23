import { observer } from 'mobx-react-lite';
import React, {
  useLayoutEffect, useState, useCallback, useEffect,
} from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';

import Button from '../../common/Button';
import authStore from '../../../stores/authStore';
import styles from './ProfileScreen.styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
            name="user-edit"
            backgroundColor="#fff"
            iconStyle={styles.iconStyle}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.component}>
      <View style={styles.profileBox}>
        <View style={styles.avatarBox}>
          {/* <View style={styles.avatar}> */}
          <Avatar.Image size={200} source={{ uri: 'https://avatars.mds.yandex.net/i?id=d6e0b45c8a9f07b60d73f92bd8aa9897-5231737-images-thumbs&n=13' }} />
          {/* </View> */}
          <View style={styles.userNameBox}>
            <Text style={styles.userNameText}>Mikheev_Maxim</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.itemBox}>
            <Icon name="address-card" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>ФИО</Text>
              <Text style={styles.boxContent}>Михеев Максим Олегович</Text>
            </View>
          </View>
          <View style={styles.itemBox}>
            <Icon name="envelope" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>Электронная почта</Text>
              <Text style={styles.boxContent}>Presswallperm@yandex.ru</Text>
            </View>
          </View>
          <View style={styles.itemBox}>
            <Icon name="phone-alt" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>Номер телефона</Text>
              <Text style={styles.boxContent}>+7 (982) 470-40-90</Text>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <Button title="Выйти" width={windowWidth < 600 ? 70 : 40} onClick={() => { authStore.setLogout(); }} />
          </View>

        </View>

      </View>





      {/* {
        user
        && (
        <>
          <Image source={{ uri: user.avatar }} />
          <Text>{user.name}</Text>
        </>
        )
    } */}

    </View>
  );
});

export default ProfileScreen;
