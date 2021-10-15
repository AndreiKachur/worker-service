import axios from 'axios';
import { Alert, Platform } from 'react-native';

import ipconfig from '../../ipconfig';
import { VacationData } from './vacationStore.models'

const baseApiUrl = Platform.OS === 'web' ? '' : ipconfig;

const service = {
  getVacation(): Promise<VacationData> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.vacation[0]))
  },
};

export default service;
