import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Spinner from '../../common/Spinner';
import VacationForm from '../../componentName/VacationForm';

const VacationFormScreen: React.FC<unknown> = () => {
  const [spinner, setSpinner] = useState(false);

  if (spinner) return <Spinner />;

  return (
    <ScrollView>
      <VacationForm setSpinner={setSpinner} />
    </ScrollView>
  );
};

export default VacationFormScreen;
