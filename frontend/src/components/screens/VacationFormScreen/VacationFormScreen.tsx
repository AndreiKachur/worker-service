import React, { useState } from 'react';
import {
  View, ScrollView, Text,
} from 'react-native';

import colors from '../../../themes';
import Spinner from '../../common/Spinner';
import styles from './VacationFormScreen.styles';
import VacationForm from '../../componentName/VacationForm'

type ServiceVacationProps = {};

const VacationFormScreen: React.FC<ServiceVacationProps> = () => {
  const [spinner, setSpinner] = useState(false);
  const [serverAnswer, setServerAnswer] = useState<any>();
  const [showInfo, setShowInfo] = useState(false);

  const toogleBlocks = () => {
    setTimeout(() => setServerAnswer(undefined), 2000);
    setShowInfo(true);
  };

  if (serverAnswer) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>
          {serverAnswer}
        </Text>
      </View>
    );
  }
  if (spinner) return <Spinner />;

  return (
    <ScrollView>
      {/* <View style={styles.component}> */}

      <VacationForm
        setSpinner={setSpinner}
        toogleBlocks={toogleBlocks}
        setServerAnswer={setServerAnswer} />

      {/* </View> */}
    </ScrollView>
  );
};

export default VacationFormScreen;
