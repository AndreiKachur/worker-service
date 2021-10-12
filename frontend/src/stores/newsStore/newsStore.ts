import { makeAutoObservable } from 'mobx';

import service from './newsStore.service';
import { News } from '../../data';

class NewsStore {
  news: News[] = [{
    id: '', private: false, title: '', content: '',
  }];

  constructor() {
    makeAutoObservable(this);

    service.getNews()
      .then((d) => this.setNews(d));
  }

  setNews(news: News[]) {
    this.news = news;
  }
}

export default new NewsStore();
