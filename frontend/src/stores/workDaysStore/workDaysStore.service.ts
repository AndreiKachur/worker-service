import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import baseApiUrl from '../../ipconfig';
import {
  WorkDaysData, ResponseSendWorkDaysType, ResponseGetWorkDaysType, Answer,
} from './workDaysStore.models';


const service = {

  async getWorkDays(): Promise<any> {
    const userId = await AsyncStorage.getItem('userId');
    return axios.get(`${baseApiUrl}/workdays?id=${userId}`)
      .then((res: ResponseGetWorkDaysType) => res.data);
  },

  async sendWorkDays(data: any): Promise<WorkDaysData | Answer> {
    const userId = await AsyncStorage.getItem('userId');
    data.userId = userId
    return axios.post(`${baseApiUrl}/api/workdays`, data)
      .then((res: ResponseSendWorkDaysType) => res.data);
  },

};

export default service;
