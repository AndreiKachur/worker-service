import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';

import colors from '../../../themes';
import VacationForm from '../../componentName/VacationForm'
import VacationInfo from '../../componentName/VacationInfo'
import VacationRules from '../../componentName/VacationRules'
import styles from './ServiceVacationScreen.styles';

type ServiceVacationProps = {};

const ServiceVacationScreen: React.FC<ServiceVacationProps> = () => {

  const [spinner, setSpinner] = useState(false);
  const [calendarView, setCalendarView] = useState(true);
  const [serverAnswer, setServerAnswer] = useState<any>();
  const [showInfo, setShowInfo] = useState(false);

  const toogleBlocks = () => {
    setTimeout(() => setServerAnswer(undefined), 2000)
    setCalendarView(false)
    setShowInfo(true)
  }

  return (
    <ScrollView>
      {serverAnswer ?
        <View style={styles.center}>
          <Text style={styles.text}>
            {serverAnswer}
          </Text>
        </View> :
        <View>
          <View style={styles.component}>
            {spinner ?
              <View style={styles.center}>
                <ActivityIndicator size='large' color={colors.primary} />
              </View> :
              <View style={styles.mainWrapper}>
                <VacationForm
                  setSpinner={setSpinner}
                  setCalendarView={setCalendarView}
                  calendarView={calendarView}
                  toogleBlocks={toogleBlocks}
                  setServerAnswer={setServerAnswer} />
                <VacationInfo
                  showInfo={showInfo}
                  setShowInfo={setShowInfo} />
                <VacationRules />
              </View>}
          </View>
        </View>}
    </ScrollView>
  )
};

export default ServiceVacationScreen;
