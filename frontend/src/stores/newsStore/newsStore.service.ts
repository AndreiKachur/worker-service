import axios, { AxiosResponse } from 'axios';

import baseApiUrl from '../../ipconfig';
import { News } from './newsStore.models';

const service = {
  async getNews(): Promise<News[]> {
    return axios.get(`${baseApiUrl}/news`)
      .then((res: AxiosResponse<News[]>) => (res.data));
  },
};

export default service;
