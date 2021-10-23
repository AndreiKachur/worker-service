import axios from 'axios';

import baseApiUrl from '../../ipconfig';
import { VacationData, Holidays } from './vacationStore.models';

type GetVacationType = {
  vacation: VacationData,
  holidays: Holidays
};

const service = {
  getVacation(): Promise<GetVacationType> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => ({
        vacation: res.data.vacation[0],
        holidays: res.data.holidays,
      })));
  },
};

export default service;
