import React from 'react';
import { View, ScrollView } from 'react-native';

import VacationForm from '../../componentName/VacationForm'
import VacationInfo from '../../componentName/VacationInfo'
import VacationRules from '../../componentName/VacationRules'
import styles from './ServiceVacationScreen.styles';

type ServiceVacationProps = {};

const ServiceVacationScreen: React.FC<ServiceVacationProps> = () => {

  return (
    <ScrollView>
      <View>
        <View style={styles.component}>
          <View style={styles.mainWrapper}>
            <VacationForm />
            <VacationInfo />
            <VacationRules />
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export default ServiceVacationScreen;
