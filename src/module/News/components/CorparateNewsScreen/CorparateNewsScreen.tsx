import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { privateNewsData } from '../../../../data'

import styles from './CorparateNewsScreen.styles';

type CorparateNewsScreenProps = any;

const DATA = privateNewsData

const CorparateNewsScreen: React.FC<CorparateNewsScreenProps> = ({ navigation }) => (
  <View style={styles.component}>
    <Text>CorparateNewsScreen</Text>
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

export default CorparateNewsScreen;
