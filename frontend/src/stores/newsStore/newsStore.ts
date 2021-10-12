import { makeAutoObservable } from 'mobx';

import { News } from '../../data';

class NewsStore {
  news: News[] = [{
    id: '', private: false, title: '', content: '',
  }];

  constructor() {
    makeAutoObservable(this);
  }

  setNews(news: News[]) {
    this.news = news;
  }
}

export default new NewsStore();
