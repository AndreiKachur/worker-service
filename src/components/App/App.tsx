import React, { useEffect } from 'react';
import axios from 'axios'

import AppNavigation from '../AppNavigation/AppNavigation'
import userStore from '../../stores/userStore'
import newsStore from '../../stores/newsStore'

import styles from './App.styles';

type AppProps = any;

const App: React.FC<AppProps> = (props) => {

  useEffect(() => {
    axios('/api')
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
