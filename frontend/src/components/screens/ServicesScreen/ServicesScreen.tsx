import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FonticstoIco from 'react-native-vector-icons/Fontisto';
import MaterialIco from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import styles from './ServicesScreen.styles';
import colors from '../../../themes';

type ServicesScreenProps = {
  navigation: NavigationProp<ParamListBase>
};
const services = [
  {
    id: 1,
    title: 'Мой День',
    ico: <MaterialIco
      size={50}
      style={[styles.ico, { backgroundColor: colors.primary }]}
      name="office-building"
    />,
  },
  {
    id: 2,
    title: 'Мой Отпуск',
    ico: <FonticstoIco
      size={50}
      style={[styles.ico, { backgroundColor: colors.seventh }]}
      name="holiday-village"
    />,
  }
];

const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigation }) => (

  <View style={styles.component}>
    {services.map((service) => (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate(service.title)}
        key={`services${service.id}`}
      >
        {service.ico}
        <Text style={styles.title}>{service.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default ServicesScreen;
