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
  getVacation_(): Promise<GetVacationType> {
    return axios.get(`${baseApiUrl}/api/vacation?id=ZM3F7zvqKJWdciJU1U7b4UHism53`)
  },
};

export default service;
