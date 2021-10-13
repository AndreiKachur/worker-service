import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './ServicesScreen.styles';

type ServicesScreenProps = any;
const services = [
  {
    id: 1,
    title: 'Мой День',
    description: 'Посмотреть или внести данные о затраченном рабочем времени',
  },
  {
    id: 2,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 3,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 4,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 5,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 6,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 7,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 8,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 9,
    title: 'Мой Отпуск',
    description: 'Посмотреть или выбрать даты отпусков',
  },
  {
    id: 10,
    title: 'Мой Отпуск',
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
        </View>
        <Text style={styles.title}>{service.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default ServicesScreen;
