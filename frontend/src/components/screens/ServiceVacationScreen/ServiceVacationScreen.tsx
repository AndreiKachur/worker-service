import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import colors from '../../../themes';
import VacationForm from '../../componentName/VacationForm'
import VacationInfo from '../../componentName/VacationInfo'
import VacationRules from '../../componentName/VacationRules'
import styles from './ServiceVacationScreen.styles';

type ServiceVacationProps = {};

const ServiceVacationScreen: React.FC<ServiceVacationProps> = () => {

  const [spinner, setSpinner] = useState(false)

  return (
    <ScrollView>
      <View>
        <View style={styles.component}>
          {spinner ?
            <View style={styles.spinner}>
              <ActivityIndicator size='large' color={colors.primary} />
            </View> :
            <View style={styles.mainWrapper}>
              <VacationForm setSpinner={setSpinner} />
              <VacationInfo />
              <VacationRules />
            </View>}
        </View>
      </View>
    </ScrollView>
  )
};

export default ServiceVacationScreen;
