import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

import styles from './ServicesScreen.styles';

type ServicesScreenProps = any;
const services = [
  {
    id: 1,
    title: 'МОЙ РАБОЧИЙ ДЕНЬ',
    description: `Посмотреть или внести данные о затраченном рабочем времени`
  },
  {
    id: 2,
    title: 'МОЙ ОТПУСК',
    description: `Посмотреть или выбрать даты отпусков`
  }
];

const Separator = () => (
  <View style={styles.separator} />
);

const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigation }) => (
  <SafeAreaView style={styles.androidSafeArea}>
    <View style={styles.component}>
      {services.map((service) => (
        <View style={styles.card}>
          <Text style={styles.title}>
            {service.title}
          </Text>
          <Separator />
          <Text style={styles.description}>
            {service.description}
          </Text>
          <View style={styles.btn}>
            <Button
              key={service.id}
              onPress={() => navigation.navigate('Service')}
              title='Перейти'
            />
          </View>
        </View>
      ))}
    </View>
  </SafeAreaView>
);

export default ServicesScreen;
