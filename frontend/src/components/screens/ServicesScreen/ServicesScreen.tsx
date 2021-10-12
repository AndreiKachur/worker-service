import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './ServicesScreen.styles';

type ServicesScreenProps = any;
const services = [
  {
    id: 1,
    title: 'МОЙ ДЕНЬ',
    description: 'Посмотреть или внести данные о затраченном рабочем времени',
  },
  {
    id: 2,
    title: 'МОЙ ОТПУСК',
    description: 'Посмотреть или выбрать даты отпусков',
  },
];

const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigation }) => (

  <View style={styles.component}>
    {services.map((service) => (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate(service.title)}
        key={service.id}
      >
        <View style={styles.card}>
          <Text style={styles.title}>{service.title}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default ServicesScreen;
