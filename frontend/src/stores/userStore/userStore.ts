import {
  action, makeAutoObservable, observable,
} from 'mobx';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import service from './userStore.service';
import User from '../models/user';

class UserStore {
  userData: User = {
    id: '',
    userName: '',
    avatar: 'https://avatars.mds.yandex.net/i?id=d6e0b45c8a9f07b60d73f92bd8aa9897-5231737-images-thumbs&n=13',
    fullName: '',
    mail: '',
    telephoneNumber: '',
  };

  constructor() {
    makeAutoObservable(this, {
      userData: observable,
      setUserData: action.bound,
      setOpenProfileScreen: action.bound,
    });
  }

  async setOpenProfileScreen() {
    const userId = await AsyncStorage.getItem('userId');
    await service.getUser(userId)
      .then((data) => {
        this.setUserData(data);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert('Ошибка загрузки данный пользователя');
      });
  }

  setUserData(userData: User) {
    this.userData.id = userData.id;
    this.userData.userName = userData.userName;
    this.userData.avatar = userData.avatar;
    this.userData.fullName = userData.fullName;
    this.userData.mail = userData.mail;
    this.userData.telephoneNumber = userData.telephoneNumber;
  }

  setChangeUserData(fullName: string, telephoneNumber: string, avatarUri?: string) {
    if (avatarUri) { this.userData.avatar = avatarUri; }
    this.userData.fullName = fullName;
    this.userData.telephoneNumber = telephoneNumber;
  }
}

export default new UserStore();
