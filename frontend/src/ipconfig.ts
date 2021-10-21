import { Platform } from 'react-native';

// используется адрес удаленного сервера,
// если сервер запускаете локально,
// то нужно получить свой ip в консоли(ipconfig) => вписать в переменную ipconfig

const ipconfig = 'http://192.168.43.197:5000';

const baseApiUrl = Platform.OS === 'web' ? '' : ipconfig;

export default baseApiUrl;
