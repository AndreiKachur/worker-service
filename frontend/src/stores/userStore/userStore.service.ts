import axios from 'axios';

import User from '../models/user';
import baseApiUrl from '../../ipconfig';

const service = {
  getUser(userId: string | null): Promise<User> {
    return axios.get(`${baseApiUrl}/api/user/${userId}`)
      .then(((res) => res.data));
  },
};

export default service;
