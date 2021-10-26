import { makeAutoObservable } from 'mobx';

import service from './newsStore.service';
import { News } from './newsStore.models';

class NewsStore {
  news: News[] | [] = [];

  constructor() {
    makeAutoObservable(this);

    service.getNews()
      .then((d) => this.setNews(d));
  }

  setNews(data: News[]) {
    this.news = data;
  }
}

export default new NewsStore();
