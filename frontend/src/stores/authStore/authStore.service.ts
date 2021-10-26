import axios from 'axios';

import { AuthData, Body } from './authStore.models';

const service = {
  getAuthData(body: Body): Promise<AuthData> {
    return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkeOQ9KwFegK2pR6-EwzH9aDvDoAUYAyY', body)
      .then((response: any) => response.data);
  },
};

export default service;
