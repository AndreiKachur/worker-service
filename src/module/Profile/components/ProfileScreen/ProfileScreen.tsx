import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './ProfileScreen.styles';


type ProfileScreenProps = any;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Профиль",
      headerRight: () => (
        <View style={styles.editButton}>
          <Button
            onPress={() => navigation.navigate('Edit')}
            title="Edit"
            color="rgb(200, 200, 200)"
          />
        </View>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.component}>
      <Text>ProfileScreen</Text>
      <Button title='Выйти' onPress={() => { navigation.navigate('Auth') }} />
    </View>
  )
}

export default ProfileScreen;