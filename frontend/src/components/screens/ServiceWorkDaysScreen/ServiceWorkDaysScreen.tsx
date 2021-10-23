import React, { useState } from 'react';

import Spinner from '../../common/Spinner';
import WorkDays from '../../componentName/WorkDays';

type ServiceScreenProps = {};

const ServiceWorkDayScreen: React.FC<ServiceScreenProps> = () => {

  const [spinner, setSpinner] = useState(false);

  if (spinner) return <Spinner />;

  return <WorkDays setSpinner={setSpinner} />;
}

export default ServiceWorkDayScreen;
