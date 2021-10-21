import axios from 'axios';
import { Alert } from 'react-native';

import baseApiUrl from '../../ipconfig';
import { News } from './newsStore.model';

const service = {
  getNews(): Promise<News[]> {
    return axios.get(`${baseApiUrl}/api`)
      .then(((res: any) => res.data.newsData))
      .catch((error) => {
        Alert.alert('Network error');
        console.log(`Api call error: ${error}`);
      });
  },
};

export default service;
