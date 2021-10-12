import axios from 'axios';
import { Platform } from 'react-native';

import { User } from '../../data';
import ipconfig from '../../ipconfig';

const baseApiUrl = Platform.OS === 'web' ? '' : ipconfig;

const service = {
  getUser(): Promise<User> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.usersData[0]));
  },
};

export default service;
