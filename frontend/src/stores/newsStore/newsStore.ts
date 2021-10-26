import { makeAutoObservable } from 'mobx';
import { Alert } from 'react-native';

import service from './newsStore.service';
import { News } from './newsStore.models';

class NewsStore {
  news: News[] | [] = [];

  constructor() {
    makeAutoObservable(this);

    service.getNews()
      .then((data) => this.setNews(data))
      .catch((error) => {
        console.log(error);
        Alert.alert('Network error');
      });
  }

  setNews(data: News[]) {
    this.news = data;
  }
}

export default new NewsStore();
