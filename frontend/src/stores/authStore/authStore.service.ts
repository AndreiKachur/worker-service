import axios, { AxiosResponse } from 'axios';

import { AuthData, Body } from './authStore.models';

const service = {
  async getAuthData(body: Body): Promise<AuthData> {
    return axios.post<Body, AxiosResponse<AuthData>>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkeOQ9KwFegK2pR6-EwzH9aDvDoAUYAyY',
      body,
    )
      .then((response: AxiosResponse<AuthData>) => (response.data));
  },
};

export default service;
