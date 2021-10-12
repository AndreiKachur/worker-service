import axios from 'axios';

const baseApiUrl = 'http://localhost:8080';

interface SomeData {
}

const service = {
  getSomeData(): Promise<SomeData> {
    return axios.get(`${baseApiUrl}/someData`).then((response) => response.data);
  },
};

export default service;
