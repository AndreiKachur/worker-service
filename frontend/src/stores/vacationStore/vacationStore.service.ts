import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import baseApiUrl from '../../ipconfig';
import { VacationData, Holidays } from './vacationStore.models';

const service = {
  getHolidays(): Promise<Holidays> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.holidays))
  },
  async getVacation(): Promise<VacationData> {
    const userId = await AsyncStorage.getItem('userId');
    return axios.get(`${baseApiUrl}/api/vacation?id=${userId}`)
      .then((res: any) => res.data)
  },
};

export default service;
