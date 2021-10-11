import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './ServicesScreen.styles';

type ServicesScreenProps = any;
const services = [
  {
    id: 1,
    title: 'service 1',
  },
  {
    id: 2,
    title: 'service 2',
  },
  {
    id: 3,
    title: 'service 3',
  },
  {
    id: 4,
    title: 'service 4',
  },
  {
    id: 5,
    title: 'service 5',
  },
  {
    id: 6,
    title: 'service 6',
  },

];
const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigation }) => (

  <View style={styles.component}>
    <Text>ServicesScreen</Text>
    {services.map((servis) => (
      <Button
        key={servis.id}
        onPress={() => navigation.navigate('Service')}
        title={servis.title}
      />
    ))}
  </View>
);

export default ServicesScreen;
