import React, { useState } from 'react';
import {
  View, TextInput, Dimensions, Pressable, Text, Alert, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker';

import Button from '../../common/Button';
import styles from './EditProfileScreen.styles';
import userStore from '../../../stores/userStore';

const windowWidth = Dimensions.get('window').width;

const EditProfileScreen: React.FC = () => {
  const [avatarFile, setAvatarFile] = useState({ uri: '', name: '' });
  const [fullNameValue, setFullNameValue] = useState(userStore.userData.fullName);
  const [telephoneNumberValue, setTelephoneNumberValue] = useState(userStore.userData.telephoneNumber);

  const tryUploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setAvatarFile({ uri: res[0].uri, name: res[0].name });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Cancel');
      } else {
        throw err;
      }
    }
  };

  const changeFullNameValue = (text: string) => {
    setFullNameValue(text);
  };

  const changeTelephoneNumberValue = (text: string) => {
    setTelephoneNumberValue(text);
  };

  const saveNewUserData = () => {
    if ((fullNameValue || telephoneNumberValue) && !avatarFile.uri) {
      userStore.setChangeUserData(fullNameValue, telephoneNumberValue);
      Alert.alert('Успешно!');
    } if ((fullNameValue || telephoneNumberValue) && avatarFile.uri) {
      userStore.setChangeUserData(fullNameValue, telephoneNumberValue, avatarFile.uri);
      Alert.alert('Успешно!');
    } else {
      Alert.alert('Поля "ФИО" и "Номер телефона" не могут быть пустыми!');
    }
  };

  return (
    <View style={styles.component}>
      <View style={styles.editProfileBox}>
        <View style={styles.avatarBox}>
          <View style={styles.iconBox}>
            <Icon
              name="user-circle"
              style={styles.iconStyle}
            />
          </View>
          <Text style={styles.avatarText}>{avatarFile.uri ? avatarFile.name : 'Файл не выбран.'}</Text>
          <Pressable style={styles.searchButtonStyle} onPress={tryUploadFile}>
            <Icon
              name="search-plus"
              style={styles.iconSearchStyle}
            />
            <Text style={styles.searchText}>Обзор...</Text>
          </Pressable>
        </View>
        <View style={styles.fullNameInputBox}>
          <View style={styles.iconBox}>
            <Icon
              name="address-card"
              style={styles.iconStyle}
            />
          </View>
          <TextInput
            onChangeText={changeFullNameValue}
            style={styles.input}
            value={fullNameValue}
            placeholder="ФИО"
            placeholderTextColor="grey"
          />
          <Pressable style={styles.iconButtonStyle} onPress={() => { setFullNameValue(''); }}>
            <Icon
              name="times"
              style={styles.iconStyle}
            />
          </Pressable>
        </View>
        <View style={styles.telephoneNumberInputBox}>
          <View style={styles.iconBox}>
            <Icon
              name="phone-alt"
              style={styles.iconStyle}
            />
          </View>
          <TextInput
            onChangeText={changeTelephoneNumberValue}
            style={styles.input}
            value={telephoneNumberValue}
            placeholder="Номер телефона"
            placeholderTextColor="grey"
          />
          <Pressable style={styles.iconButtonStyle} onPress={() => { setTelephoneNumberValue(''); }}>
            <Icon
              name="times"
              style={styles.iconStyle}
            />
          </Pressable>
        </View>
        <View style={styles.buttonBox}>
          <Button title="Сохранить" width={windowWidth < 600 ? 70 : 40} onClick={saveNewUserData} />
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
