import React from 'react';
import { View, Text } from 'react-native';

import styles from './App.styles';

type AppProps = {};

const App: React.FC<AppProps> = (props) => (
  <View style={styles.component}>
    <Text>New React Native App</Text>
  </View>
);

export default App;
