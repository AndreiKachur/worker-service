import axios from 'axios';
import { Alert } from 'react-native';

import baseApiUrl from '../../ipconfig';

type SendForm = (
  url: string,
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>,
  data: {}
) => Promise<void>;

const sendForm: SendForm = async (url, setSpinner, data) => {
  setSpinner(true);

  const res: any = await axios.post(`${baseApiUrl}/${url}`, data);

  setTimeout(() => {
    Alert.alert(res.data.answer);
    setSpinner(false);
  }, 800);

  console.log(res.data);
};

export default sendForm;
