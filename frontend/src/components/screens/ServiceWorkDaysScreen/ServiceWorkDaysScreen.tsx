import React, { useState } from 'react';

import Spinner from '../../common/Spinner';
import WorkDays from '../../componentName/WorkDays';

const ServiceWorkDayScreen: React.FC<unknown> = () => {
  const [spinner, setSpinner] = useState(false);

  if (spinner) return <Spinner />;

  return <WorkDays setSpinner={setSpinner} />;
};

export default ServiceWorkDayScreen;
