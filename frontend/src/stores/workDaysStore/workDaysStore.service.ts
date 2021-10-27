import axios from 'axios';

import baseApiUrl from '../../ipconfig';
import { WorkDaysData } from './workDaysStore.models';

const service = {

  async getWorkDays(): Promise<WorkDaysData> {
    return axios.get(`${baseApiUrl}/api`)
      .then((res: any) => res.data.workDays[0]);
  },

  async sendWorkDays(data: any): Promise<WorkDaysData> {
    return await axios.post(`${baseApiUrl}/api/workdays`, data)
      .then((res: any) => res.data);
  }

}

export default service;
