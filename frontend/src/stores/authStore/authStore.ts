import {
  action, makeAutoObservable, observable, runInAction,
} from 'mobx';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthData, Body } from './authStore.models';
import service from './authStore.service';

class AuthStore {
  auth = false;

  loader = false;

  authData: AuthData = {
    displayName: '',
    email: '',
    expiresIn: '',
    idToken: '',
    kind: '',
    localId: '',
    refreshToken: '',
    registered: false,
  };

  constructor() {
    makeAutoObservable(this, {
      auth: observable,
      loader: observable,
      setAuthData: action.bound,
      setPushAuthButton: action.bound,
      setLogout: action.bound,
      setAutoLogin: action.bound,
    });
  }

  setAuthData(data: AuthData) { this.authData = data; }

  async setPushAuthButton(body: Body) {
    await service.getAuthData(body)
      .then((data: AuthData) => {
        this.setAuthTrue();
        this.setAuthData(data);
        this.setSaveToken(data);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert('Неверный Email или пароль');
      });
  }

  async setSaveToken(data: AuthData) {
    await AsyncStorage.setItem('token', data.idToken);
    await AsyncStorage.setItem('userId', data.localId);
  }

  async setDeleteToken() {
    await AsyncStorage.setItem('token', '');
    await AsyncStorage.setItem('userId', '');
  }

  async setAutoLogin() {
    const token = await AsyncStorage.getItem('token');
    if (token?.length) {
      this.setAuthTrue();
    }
  }

  setLogout() {
    this.setDeleteToken();
    this.authData = {
      displayName: '',
      email: '',
      expiresIn: '',
      idToken: '',
      kind: '',
      localId: '',
      refreshToken: '',
      registered: false,
    };
    this.setAuthFalse();
  }

  setAuthTrue() {
    runInAction(() => {
      this.auth = true;
    });
  }

  setAuthFalse() {
    runInAction(() => {
      this.auth = false;
    });
  }
}

export default new AuthStore();
