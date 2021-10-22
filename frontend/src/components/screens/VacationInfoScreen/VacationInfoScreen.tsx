import React, { useState } from 'react';
import {
  View, ScrollView, ActivityIndicator, Text,
} from 'react-native';

import colors from '../../../themes';
import Spinner from '../../common/Spinner'
import VacationForm from '../../componentName/VacationForm';
import VacationInfo from '../../componentName/VacationInfo';
import VacationRules from '../../componentName/VacationRules';
import styles from './VacationInfoScreen.styles';

type ServiceVacationProps = {};

const VacationFormScreen: React.FC<ServiceVacationProps> = () => {
  const [spinner, setSpinner] = useState(false);
  const [calendarView, setCalendarView] = useState(true);
  const [serverAnswer, setServerAnswer] = useState<any>();
  const [showInfo, setShowInfo] = useState(false);

  const toogleBlocks = () => {
    setTimeout(() => setServerAnswer(undefined), 2000);
    setCalendarView(false);
    setShowInfo(true);
  };

  if (serverAnswer) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>
          {serverAnswer}
        </Text>
      </View>
    )
  }
  if (spinner) return <Spinner />

  return (
    <ScrollView>
      <View>
        <View style={styles.component}>

          <View style={styles.mainWrapper}>
            <VacationForm
              setSpinner={setSpinner}
              setCalendarView={setCalendarView}
              calendarView={calendarView}
              toogleBlocks={toogleBlocks}
              setServerAnswer={setServerAnswer} />

            {/* <VacationInfo
              showInfo={showInfo}
              setShowInfo={setShowInfo} />

            <VacationRules /> */}

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VacationFormScreen;
