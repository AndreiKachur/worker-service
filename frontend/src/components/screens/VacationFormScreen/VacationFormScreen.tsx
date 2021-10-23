import React, { useState } from 'react';
import {
  View, ScrollView, Text,
} from 'react-native';

import colors from '../../../themes';
import Spinner from '../../common/Spinner';
import styles from './VacationFormScreen.styles';
import VacationForm from '../../componentName/VacationForm';

type ServiceVacationProps = {};

const VacationFormScreen: React.FC<ServiceVacationProps> = () => {
  const [spinner, setSpinner] = useState(false);

  if (spinner) return <Spinner />;

  return (
    <ScrollView>
      <VacationForm setSpinner={setSpinner} />
    </ScrollView>
  );
};

export default VacationFormScreen;
