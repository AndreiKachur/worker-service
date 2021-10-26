import axios, { AxiosResponse } from 'axios';
// import { Alert } from 'react-native';

import baseApiUrl from '../../ipconfig';
import { News } from './newsStore.models';

const service = {
  async getNews(): Promise<News[]> {
    return axios.get(`${baseApiUrl}/news`)
      .then((res: AxiosResponse<News[]>) => (res.data));
    // .catch((error) => {
    //   Alert.alert('Network error');
    //   console.log(`Api call error: ${error}`);
    // });
  },
};

export default service;
