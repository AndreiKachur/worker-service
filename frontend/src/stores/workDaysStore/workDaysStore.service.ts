import axios from 'axios';

import baseApiUrl from '../../ipconfig';
import {
  WorkDaysData, ResponseSendWorkDaysType, ResponseGetWorkDaysType, Answer,
} from './workDaysStore.models';

const service = {

  async getWorkDays(): Promise<WorkDaysData> {
    return axios.get(`${baseApiUrl}/api`)
      .then((res: ResponseGetWorkDaysType) => res.data.workDays[0]);
  },

  async sendWorkDays(data: any): Promise<WorkDaysData | Answer> {
    return axios.post(`${baseApiUrl}/api/workdays`, data)
      .then((res: ResponseSendWorkDaysType) => res.data);
  },

};

export default service;
