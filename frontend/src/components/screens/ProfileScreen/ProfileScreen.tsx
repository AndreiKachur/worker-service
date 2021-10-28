import { observer } from 'mobx-react-lite';
import React, {
  useLayoutEffect, useEffect,
} from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import Button from '../../common/Button';
import authStore from '../../../stores/authStore';
import userStore from '../../../stores/userStore';
import styles from './ProfileScreen.styles';

const windowWidth = Dimensions.get('window').width;

type ProfileScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  useEffect(() => { userStore.setOpenProfileScreen(); }, []);
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
          <Avatar.Image size={200} source={{ uri: userStore.userData.avatar }} />
          <View style={styles.userNameBox}>
            <Text style={styles.userNameText}>{userStore.userData.userName}</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.itemBox}>
            <Icon name="address-card" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>ФИО</Text>
              <Text style={styles.boxContent}>{userStore.userData.fullName}</Text>
            </View>
          </View>
          <View style={styles.itemBox}>
            <Icon name="envelope" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>Электронная почта</Text>
              <Text style={styles.boxContent}>{userStore.userData.mail}</Text>
            </View>
          </View>
          <View style={styles.itemBox}>
            <Icon name="phone-alt" style={styles.itemIcon} />
            <View style={styles.textBox}>
              <Text style={styles.boxName}>Номер телефона</Text>
              <Text style={styles.boxContent}>{userStore.userData.telephoneNumber}</Text>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <Button title="Выйти" width={windowWidth < 600 ? 70 : 40} onClick={() => { authStore.setLogout(); }} />
          </View>

        </View>

      </View>
    </View>
  );
};

export default observer(ProfileScreen);
