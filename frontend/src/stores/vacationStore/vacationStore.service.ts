import axios from 'axios';

import baseApiUrl from '../../ipconfig';
import { VacationData } from './vacationStore.models';

const service = {
  getVacation(): Promise<VacationData> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.vacation[0]));
  },
};

export default service;
