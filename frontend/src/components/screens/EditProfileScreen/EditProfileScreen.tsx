import React, { useState } from 'react';
import { View, TextInput, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../common/Button';
import styles from './EditProfileScreen.styles';
import userStore from '../../../stores/userStore';
import { Text } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const EditProfileScreen: React.FC = () => {
  const [avatarValue, setAvatarValue] = useState()
  const [fullNameValue, setFullNameValue] = useState(userStore.userData.fullName)
  const [telephoneNumberValue, setTelephoneNumberValue] = useState(userStore.userData.telephoneNumber)

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
          <Text style={styles.avatarText}>Файл не выбран.</Text>
          <Pressable style={styles.searchButtonStyle} onPress={() => { }}>
            <Icon
              name='search-plus'
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
            // onChangeText={changePasswordValue}
            style={styles.input}
            value={fullNameValue}
            placeholder='ФИО'
            placeholderTextColor="grey"
          />
          <Pressable style={styles.iconButtonStyle} onPress={() => { setFullNameValue('') }}>
            <Icon
              name='times'
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
            // onChangeText={changePasswordValue}
            style={styles.input}
            value={telephoneNumberValue}
            placeholder='Номер телефона'
            placeholderTextColor="grey"
          />
          <Pressable style={styles.iconButtonStyle} onPress={() => { setTelephoneNumberValue('') }}>
            <Icon
              name='times'
              style={styles.iconStyle}
            />
          </Pressable>
        </View>
        <View style={styles.buttonBox}>
          <Button title="Сохранить" width={windowWidth < 600 ? 70 : 40} onClick={() => { }} />
        </View>
      </View>
    </View>
  )
}

export default EditProfileScreen;
