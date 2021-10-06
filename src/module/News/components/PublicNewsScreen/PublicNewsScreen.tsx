import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { publicNewsData } from '../../../../data'

import styles from './PublicNewsScreen.styles'

type PublicNewsScreenProps = any

const DATA = publicNewsData


const PublicNewsScreen: React.FC<PublicNewsScreenProps> = ({ navigation }) => (
  <View style={styles.component}>
    <Text>PublicNewsScreen</Text>
    {DATA.map((post) => (
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Button
          onPress={() => { Alert.alert("Заглушка") }}
          title="Open"
        />
      </View>
    ))}
  </View>
);

export default PublicNewsScreen;
