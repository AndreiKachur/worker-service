import React, { useEffect } from 'react';
import axios from 'axios'
import { Platform } from 'react-native';
import AppNavigation from '../AppNavigation/AppNavigation'
import userStore from '../../stores/userStore'
import newsStore from '../../stores/newsStore'

import styles from './App.styles';

type AppProps = any;

const serverIP = 'http://192.168.100.3'// получить свой ip в консоли(ipconfig) => вписать в переменную serverIP
  
const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    axios(Platform.OS === 'web' ? '/api' : serverIP+':5000/api') 
      .then((res => {
        const data: any = res.data
        userStore.setUser(data.usersData[0])
        newsStore.setNews(data.newsData)
      }))
      .catch((error) => {
        console.log(`Api call error: ${error}`);
      })
  }, [])

  return (
    <AppNavigation />
  )
};

export default App;
