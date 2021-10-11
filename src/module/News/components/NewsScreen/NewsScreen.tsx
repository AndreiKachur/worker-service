import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import {publicNewsData} from '../../../../data'

import styles from './NewsScreen.styles';

type NewsScreenProps = any;

const DATA = publicNewsData

const NewsScreen: React.FC<NewsScreenProps> = ({ navigation }) => (
  <View style={styles.component}>
    <Text>NewsScreen</Text>
    {DATA.map((post) => (
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Button
          onPress={() => {Alert.alert("Заглушка")}}
          title="Open"
        />
      </View>
    ))}
  </View>
);

export default NewsScreen;
