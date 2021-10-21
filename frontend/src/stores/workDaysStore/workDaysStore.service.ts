import axios from 'axios';

import baseApiUrl from '../../ipconfig';
import { WorkDaysData } from './workDaysStore.models';

const service = {
  getWorkDays(): Promise<WorkDaysData> {
    return axios.get(`${baseApiUrl}/api`)
      .then((res: any) => res.data.workDays[0]);
  },
};

export default service;
