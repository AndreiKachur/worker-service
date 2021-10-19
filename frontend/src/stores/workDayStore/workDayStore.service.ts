import axios from 'axios';

import baseApiUrl from '../../ipconfig';

interface WorkDayData {
}

const service = {
  getSomeData(): Promise<WorkDayData> {
    return axios.get(`${baseApiUrl}/someData`).then((response) => response.data);
  },
};

export default service;
