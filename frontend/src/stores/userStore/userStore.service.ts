import axios from 'axios';

import User from '../models/user';
import baseApiUrl from '../../ipconfig';

const service = {
  getUser(): Promise<User> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.usersData[0]));
  },
};

export default service;
